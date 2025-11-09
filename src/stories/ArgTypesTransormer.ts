/* eslint-disable no-param-reassign */
import type { Args, ArgTypes } from "storybook/internal/csf";

function camelCase(input: string): string {
  return input.toLowerCase().replace(/-(.)/g, (_match, group1) => group1.toUpperCase());
}

function removeUnwanted(argTypesOrArgs: (Partial<unknown> & { [p: string]: any }) | ArgTypes<Args>): void {
  // remove
  delete argTypesOrArgs["accessibility-attributes"];
  delete argTypesOrArgs["is-ui5-element"];
  delete argTypesOrArgs["effective-dir"];

  // disable control
  if (argTypesOrArgs.model) {
    argTypesOrArgs.model.control = "none";
  }
}

export function ArgTypesTransormer(argTypes: ArgTypes<Args>): void {
  // remove
  removeUnwanted(argTypes);

  Object.keys(argTypes).forEach(key => {
    // remove controls from styles
    if (argTypes[key].table?.category === "css shadow parts") {
      if (argTypes[key]) {
        // @ts-expect-error undocumented feature
        argTypes[key].control = "none";
        argTypes[key].name = `::part(${key})`;
      }
    }

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
  if (argTypes[field]) {
    argTypes[field].control = "select";
    argTypes[field].options = values;
  } else {
    console.error(`Unknown field ${field}`);
  }
}

/**
 * Transforms all args and argTypes to propper camel case.
 *
 * @param argTypes
 * @param args
 * @param deleteList - List of args to remove from the controls
 * @constructor
 */
export function ArgsTransormAll(argTypes: ArgTypes<Args>, args: Partial<unknown> & { [p: string]: any }, deleteList: string[]) {
  ArgTypesTransormer(argTypes);
  ArgsTransormer(args);

  deleteList.forEach(item => {
    delete argTypes[item];
    delete args[item];
  });
}
