# Creating a DataStore

A DataStore consists of four files that work together to manage entity data:

1. **EntityModel** - Singleton model instance (the data)
2. **EntityService** - API communication and event dispatching
3. **Decorators** - Pre-configured bindings for components
4. **index.ts** - Barrel re-exports

## Directory Structure

```
src/pages/page-{entity}/
├── PageEntity.ts           # Main page component
├── data/                   # DataStore files
│   ├── index.ts            # Re-exports
│   ├── {Entity}Model.ts    # Singleton model
│   ├── {Entity}Service.ts  # API service with events
│   └── Decorators.ts       # Bindings for components
├── components/             # Page-specific UI components
│   ├── header/
│   └── ...
├── tabs/                   # Tab content components
│   ├── editor/
│   └── ...
└── utils/                  # Page-specific utilities
```

## Step 1: Create the Entity Model

The model is a singleton container holding the FieldNode instance.

```typescript
// data/{Entity}Model.ts
import { TaskRepresentation } from "@contract/acme/platform/tasks/v1/TaskRepresentation";

/**
 * Singleton container for the shared {@link TaskRepresentation} model.
 */
class EntityContainer {
  /** The task representation instance used for data binding across the task page. */
  model = new TaskRepresentation();

  // Add custom helper methods if needed
  // getId(): string {
  //   return this.model.id.toString();
  // }
}

/** Singleton instance of the task entity model. */
export const TaskModel = new EntityContainer();
```

**Key points:**
- Wrap the model in a container class for potential helper methods
- Export a singleton instance
- The model type comes from the contract package (`@contract/...`)

## Step 2: Create the Entity Service

The service handles API communication and dispatches events.

### 2.1 Define Custom Event Types

Extend the base event types with entity-specific events:

```typescript
// data/{Entity}Service.ts
import type { EntityServiceEventMap, EntityServiceEventType } from "@furo/open-models";

// Add custom events
export type TaskServiceEventType = EntityServiceEventType | "data-loaded" | "list-loaded";

// Extend the event map with typed details
export interface TaskServiceEventMap extends EntityServiceEventMap {
  "data-loaded": { response: ITaskRepresentation; serverResponse: Response };
  "list-loaded": { response: ITaskServiceGetTasksResponse; serverResponse: Response };
}
```

### 2.2 Create Typed Dispatch Function

```typescript
function createTaskDispatch(target: EventTarget) {
  return <K extends TaskServiceEventType>(type: K, detail: TaskServiceEventMap[K]) => {
    target.dispatchEvent(new CustomEvent(type, { detail }));
  };
}
```

### 2.3 Implement the Service Class

```typescript
import { TaskService } from "@contract/acme/platform/tasks/TaskService";
import type { ITaskServiceGetTasksRequest } from "@contract/acme/platform/tasks/TaskServiceGetTasksRequest";
import type { ITaskServiceGetTasksResponse } from "@contract/acme/platform/tasks/TaskServiceGetTasksResponse";
import type { ITaskRepresentation } from "@contract/acme/platform/tasks/v1/TaskRepresentation";
import type { EntityServiceEventMap, EntityServiceEventType } from "@furo/open-models";
import { DefaultServiceEventHandlers } from "@furo/open-models";

import { TaskModel } from "./TaskModel";

class TaskEntityServiceClass extends EventTarget {
  /** Reference to the shared model. */
  private readonly entity = TaskModel.model;

  /** The underlying TaskService contract for API communication. */
  private readonly service: TaskService = new TaskService();

  /** Typed dispatch function for emitting events. */
  private dispatch = createTaskDispatch(this);

  constructor() {
    super();
    this.setupServiceHandlers();
  }

  // ─── Public API ───────────────────────────────────────────────

  /** Whether the service is busy (loading a task or task list). */
  get busy(): boolean {
    return this.service.Get.isLoading || this.service.GetTasks.isLoading;
  }

  /**
   * Load a single task by ID.
   * @param taskId - The unique identifier of the task to load.
   */
  load(taskId: string): void {
    void this.service.Get.invoke({ taskId });
  }

  /**
   * Load a filtered list of tasks.
   * @param request - The filter/pagination parameters.
   */
  loadList(request: ITaskServiceGetTasksRequest): void {
    void this.service.GetTasks.invoke(request);
  }

  /**
   * Abort any pending API requests.
   * @param reason - The reason for aborting (defaults to `"aborted"`).
   */
  abortPendingRequests(reason = "aborted"): void {
    this.service.Get.abortPendingRequest(reason);
    this.service.GetTasks.abortPendingRequest(reason);
  }

  /** Clear the entity model, resetting it to an empty state. */
  clear(): void {
    this.entity.fromLiteral({});
  }

  // ─── Setup ────────────────────────────────────────────────────

  private setupServiceHandlers(): void {
    const autoHandlerOptions = {
      isLoading: () => this.service.Get.isLoading || this.service.GetTasks.isLoading,
    };

    // GET handlers
    this.service.Get.setHandlers({
      ...DefaultServiceEventHandlers(this.dispatch, autoHandlerOptions),
      onResponse: (response, serverResponse) => {
        this.entity.fromLiteral(response);
        this.dispatch("data-loaded", { response, serverResponse });
      },
    });

    // GET TASKS handlers
    this.service.GetTasks.setHandlers({
      ...DefaultServiceEventHandlers(this.dispatch, autoHandlerOptions),
      onResponse: (response, serverResponse) => {
        this.dispatch("list-loaded", { response, serverResponse });
      },
    });
  }
}

// Export singleton instance
export const taskEntityService = new TaskEntityServiceClass();
```

### Key Patterns

**Using `DefaultServiceEventHandlers`:**
- Provides standard handlers for request lifecycle, errors, etc.
- You only need to implement `onResponse` (entity-specific logic)
- Pass `isLoading` option when service has multiple operations

**Dispatching events:**
- Use the typed `dispatch` function for type safety
- Dispatch custom events (`data-loaded`, `list-loaded`) for entity-specific notifications
- Standard events (`busy-changed`, `error-404`, etc.) are handled automatically

**Invoking service methods:**
- Always use `void` before `invoke()` calls: `void this.service.Get.invoke({...})`
- Errors are handled by the registered handlers, not by the caller

**Populating the model:**
- Use `this.entity.fromLiteral(response)` to populate the model from the API response
- If the response wraps the entity (e.g., `response.entity`), extract it: `this.entity.fromLiteral(response.entity)`

**Error handling with `RpcStatusApplier` (for save/update operations):**
```typescript
import { FieldNode } from "@furo/open-models";
import { type IStatus, RpcStatusApplier } from "@furo/open-models/dist/RpcStatusApplier";

// In onResponseError handler:
onResponseError: (parsedResponse, serverResponse) => {
  this.dispatch("response-error", { parsedResponse, serverResponse });
  RpcStatusApplier.apply(this.entity as FieldNode, parsedResponse as IStatus);
},
```

**Save operation pattern (for services with Update/Create):**
```typescript
save(): void {
  if (!this._entityId) {
    console.warn("Cannot save without an ID");
    return;
  }
  void this.service.Update.invoke({
    entityId: this._entityId,
    entity: this.entity.toLiteral(),
  });
}
```

## Step 3: Create Decorators

Export pre-configured bindings for use in components:

```typescript
// data/Decorators.ts
import { ModelBindings, ServiceBindings } from "@furo/open-models";

import { TaskModel } from "./TaskModel";
import { taskEntityService, type TaskServiceEventMap } from "./TaskService";

/**
 * Service bindings for {@link taskEntityService}.
 * - `taskService.bindToEvent(eventType)` — Bind property to event detail
 * - `taskService.onEvent(eventType)` — Bind method to event
 */
export const taskService = ServiceBindings<TaskServiceEventMap>(taskEntityService);

/**
 * Model bindings for {@link TaskModel.model}.
 * - `taskModel.bind(path)` — Bind property to model field
 * - `taskModel.onEvent(eventType)` — Bind method to model event
 * - `taskModel.onFieldEvent(path, eventType)` — Bind method to field event
 */
export const taskModel = ModelBindings(TaskModel.model);
```

## Step 4: Create the Barrel Export

```typescript
// data/index.ts
export { TaskModel } from "./TaskModel";
export { taskEntityService, type TaskServiceEventMap, type TaskServiceEventType } from "./TaskService";
export { taskModel, taskService } from "./Decorators";
```

## Usage in Components

```typescript
import { taskEntityService } from "./data/TaskService";
import { taskModel, taskService } from "./data/Decorators";
import { TaskModel } from "./data/TaskModel";

// Or use the index re-exports
import { TaskModel, taskEntityService, taskModel, taskService } from "./data";

class PageTask extends LitElement {
  // Direct model reference
  private taskEntity = TaskModel.model;

  // Bind to service events
  @taskService.bindToEvent("busy-changed")
  @state()
  private busy: boolean = false;

  // Bind to model fields
  @taskModel.bind("__isValid", "validity-changed")
  @state()
  private isValid: boolean = true;

  // React to events
  @taskService.onEvent("data-loaded")
  private onDataLoaded() {
    this.requestUpdate();
  }

  @taskService.onEvent("error-404")
  private onNotFound() {
    this.showNotFoundView();
  }

  // Page lifecycle
  onPageActivated(location: LocationObject) {
    if (location.query.task_id) {
      taskEntityService.load(location.query.task_id as string);
    }
  }

  pageDeactivated() {
    taskEntityService.abortPendingRequests("pageDeactivated");
  }
}
```

## Checklist

- [ ] Create `{Entity}Model.ts` with singleton container
- [ ] Create `{Entity}Service.ts` with:
  - [ ] Custom event types extending `EntityServiceEventType`
  - [ ] Custom event map extending `EntityServiceEventMap`
  - [ ] Typed dispatch function
  - [ ] Service class extending `EventTarget`
  - [ ] `load()`, `clear()`, `abortPendingRequests()` methods (and `save()` / `loadList()` as needed)
  - [ ] Handler setup using `DefaultServiceEventHandlers`
  - [ ] `void` before all `invoke()` calls
  - [ ] Singleton export
- [ ] Create `Decorators.ts` with `ServiceBindings` and `ModelBindings`
- [ ] Create `index.ts` with barrel re-exports

## Import Reference

| What | Import from |
|------|-------------|
| `DefaultServiceEventHandlers` | `@furo/open-models` |
| `EntityServiceEventMap`, `EntityServiceEventType` | `@furo/open-models` (type import) |
| `ModelBindings`, `ServiceBindings` | `@furo/open-models` |
| `FieldNode` | `@furo/open-models` |
| `RpcStatusApplier`, `IStatus` | `@furo/open-models/dist/RpcStatusApplier` |
| Contract service class | `@contract/{path}/ServiceName` |
| Contract types (interfaces) | `@contract/{path}/TypeName` (type import) |
