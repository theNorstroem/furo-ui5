import type { Args, ArgTypes } from "storybook/internal/csf";

function removeUnwanted(argTypesOrArgs: (Partial<unknown> & { [p: string]: any }) | ArgTypes<Args>): void {
  // remove
  delete argTypesOrArgs["accessibility-attributes"];
  delete argTypesOrArgs["is-ui5-element"];
  delete argTypesOrArgs["effective-dir"];
}

export function ArgTypesTransormer(argTypes: ArgTypes<Args>): void {
  // remove
  removeUnwanted(argTypes);

  Object.keys(argTypes).forEach(key => {
    const match = key.match(/(.*)-(.*)/);
    if (match) {
      argTypes[camelCase(key)] = argTypes[key];
      delete argTypes[key];
    }
  });
}

export function ArgsTransormer(args: Partial<unknown> & { [p: string]: any }): void {
  removeUnwanted(args);

  Object.keys(args).forEach(key => {
    const match = key.match(/(.*)-(.*)/);
    if (match) {
      args[camelCase(key)] = args[key];
      delete args[key];
    }
  });
  Object.keys(args).forEach(key => {
    if (args[key] === "undefined") {
      args[key] = undefined;
    }
  });
}

export function ArgsSetEnum(argTypes: ArgTypes<Args>, field: string, values: string[]): void {
  argTypes[field].control = "select";
  argTypes[field].options = values;
}

function camelCase(input: string): string {
  return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}
