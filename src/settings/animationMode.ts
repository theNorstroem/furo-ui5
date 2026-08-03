import {
  getAnimationMode as getUi5AnimationMode,
  setAnimationMode as setUi5AnimationMode,
} from "@ui5/webcomponents-base/dist/config/AnimationMode.js";

import { ANIMATION_MODE_STORAGE_KEY } from "./keys";
import { readSetting, removeSetting, writeSetting } from "./storage";

import AnimationMode from "@/types/AnimationMode";

export { ANIMATION_MODE_STORAGE_KEY };

/**
 * Callback interface for receiving animation mode changes.
 */
type AnimationModeUpdateFunc = (animationMode: AnimationMode) => void;

/** The furo default: animations off, matching the config `./init` writes. */
export const DEFAULT_ANIMATION_MODE = AnimationMode.None;

let _animationMode: AnimationMode | undefined;

/** Guards the one-time storage read. */
let _restored = false;

const _callbacks: AnimationModeUpdateFunc[] = [];

// Storage is user-writable and outlives the code that wrote it, so a value that is no longer an
// animation mode is dropped rather than handed to UI5.
const _readStored = (): AnimationMode | undefined => {
  const stored = readSetting(ANIMATION_MODE_STORAGE_KEY);
  return stored !== undefined && Object.values<string>(AnimationMode).includes(stored)
    ? (stored as AnimationMode)
    : undefined;
};

const _current = (): AnimationMode => {
  if (!_restored) {
    _restored = true;
    _animationMode = _readStored();
  }
  return _animationMode ?? (getUi5AnimationMode() as AnimationMode);
};

const _announce = (animationMode: AnimationMode): void => {
  _callbacks.forEach(f => {
    f(animationMode);
  });
  window.dispatchEvent(new CustomEvent("furo-animation-mode-changed", { detail: animationMode }));
};

/**
 * Returns the animation mode.
 *
 * Resolution order: the value last passed to {@link setAnimationMode}, then the one persisted under
 * `FuroAnimationMode` in `localStorage`, then the mode UI5 is running with — which is what `./init`
 * wrote into the page configuration, {@link DEFAULT_ANIMATION_MODE} unless the user chose otherwise.
 *
 * @param updateCallback - optional listener invoked with the new mode on every change.
 */
export const getAnimationMode = (updateCallback?: AnimationModeUpdateFunc): AnimationMode => {
  if (updateCallback) {
    _callbacks.push(updateCallback);
  }

  return _current();
};

/**
 * Sets the animation mode, persists it under `FuroAnimationMode` and applies it to UI5.
 *
 * Unlike the theme, this takes effect immediately and synchronously — UI5 reads the mode when a
 * component animates rather than re-rendering everything.
 *
 * @event {CustomEvent<AnimationMode>} furo-animation-mode-changed - Fired on `window` when it changed.
 */
export const setAnimationMode = (animationMode: AnimationMode): void => {
  _animationMode = animationMode;
  _restored = true;
  writeSetting(ANIMATION_MODE_STORAGE_KEY, animationMode);
  setUi5AnimationMode(animationMode);
  _announce(animationMode);
};

/**
 * Clears the session and persisted animation mode, returning to {@link DEFAULT_ANIMATION_MODE}.
 *
 * This also drops the memoized storage read, so the next resolve starts from scratch.
 *
 * @event {CustomEvent<AnimationMode>} furo-animation-mode-changed - Fired on `window` with the mode
 * now in effect.
 */
export const clearAnimationMode = (): void => {
  _animationMode = undefined;
  _restored = false;
  removeSetting(ANIMATION_MODE_STORAGE_KEY);
  setUi5AnimationMode(DEFAULT_ANIMATION_MODE);
  _announce(DEFAULT_ANIMATION_MODE);
};
