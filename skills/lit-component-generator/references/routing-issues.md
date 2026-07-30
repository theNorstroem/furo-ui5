# Routing Issues

## Page Not Activating
**Problem**: `onPageActivated` not called when navigating.

**Solution**:
1. Ensure page implements `FuroPage` interface
2. Check route configuration in `RouteConfig.ts`
3. Register page in `MainStage.ts`

```typescript
import { FuroPage, LocationObject } from "@furo/route";
import { LitElement } from "lit";

export default class MyPage extends LitElement implements FuroPage {
  onPageActivated(location: LocationObject) {
    console.log("Page activated", location);
  }

  onPageDeactivated() {
    console.log("Page deactivated");
  }

  onPageUpdated(location: LocationObject) {
    console.log("Page updated", location);
  }
}
```

## Back Button Doesn't Return to Previous Page
**Problem**: After navigating away from a page, pressing back skips it.

**Cause**: Missing `FuroWaypoint.deepDive()` before `dispatchPageRequest()`. Without it, the page is never pushed to browser history.

**Solution**: Call `FuroWaypoint.deepDive()` immediately before `dispatchPageRequest()` in click handlers.

```typescript
import { FuroWaypoint } from "@furo/route";
import { dispatchPageRequest } from "@/config/RouteConfig";

// In a click handler:
private _handleClick = () => {
  FuroWaypoint.deepDive();
  dispatchPageRequest("target-requested", { id: "42" });
};
```

## URL Parameters Not Available
**Problem**: Can't access URL parameters.

**Solution**: Use `FuroLocation` or access from `LocationObject`.
```typescript
onPageActivated(location: LocationObject) {
  const id = location.query.person_id as string;  // ?person_id=123 → "123"
  const tab = location.query.tab as string;        // ?tab=details → "details"
}
```
