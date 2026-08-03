import { getAnimationMode as getUi5AnimationMode } from "@ui5/webcomponents-base/dist/config/AnimationMode.js";
import { afterAll, afterEach, assert, beforeAll, describe, it } from "vitest";

import {
  ANIMATION_MODE_STORAGE_KEY,
  DEFAULT_ANIMATION_MODE,
  clearAnimationMode,
  getAnimationMode,
  setAnimationMode,
} from "./animationMode";

import AnimationMode from "@/types/AnimationMode";

describe("settings/animationMode", () => {
  // The mode is global to the page; leaving UI5 on another one would affect later specs.
  let originalMode: AnimationMode;

  beforeAll(() => {
    originalMode = getUi5AnimationMode() as AnimationMode;
  });

  afterEach(() => {
    clearAnimationMode();
  });

  afterAll(async () => {
    clearAnimationMode();
    const { setAnimationMode: setUi5AnimationMode } = await import(
      "@ui5/webcomponents-base/dist/config/AnimationMode.js"
    );
    setUi5AnimationMode(originalMode);
    localStorage.removeItem(ANIMATION_MODE_STORAGE_KEY);
  });

  it("should return the mode UI5 is running with while nothing is stored", () => {
    assert.equal(getAnimationMode(), getUi5AnimationMode());
  });

  it("should apply the mode to UI5 and persist it", () => {
    setAnimationMode(AnimationMode.Basic);

    assert.equal(getAnimationMode(), AnimationMode.Basic);
    assert.equal(getUi5AnimationMode(), AnimationMode.Basic);
    assert.equal(localStorage.getItem(ANIMATION_MODE_STORAGE_KEY), "basic");
  });

  it("should return to the furo default on clear", () => {
    setAnimationMode(AnimationMode.Full);
    clearAnimationMode();

    assert.isNull(localStorage.getItem(ANIMATION_MODE_STORAGE_KEY));
    assert.equal(getUi5AnimationMode(), DEFAULT_ANIMATION_MODE);
    assert.equal(DEFAULT_ANIMATION_MODE, AnimationMode.None);
  });

  it("should prefer a persisted mode over UI5's", () => {
    // clearAnimationMode() in afterEach dropped the memoized read, so this is the page-load path.
    localStorage.setItem(ANIMATION_MODE_STORAGE_KEY, "minimal");
    assert.equal(getAnimationMode(), AnimationMode.Minimal);
  });

  it("should ignore a stored value that is not an animation mode", () => {
    localStorage.setItem(ANIMATION_MODE_STORAGE_KEY, "sideways");
    assert.equal(getAnimationMode(), getUi5AnimationMode());
  });

  it("should notify subscribers and fire furo-animation-mode-changed", () => {
    const seen: AnimationMode[] = [];
    getAnimationMode(mode => seen.push(mode));

    let eventDetail: AnimationMode | undefined;
    window.addEventListener("furo-animation-mode-changed", (e: Event) => {
      eventDetail = (e as CustomEvent<AnimationMode>).detail;
    }, { once: true });

    setAnimationMode(AnimationMode.Basic);

    assert.deepEqual(seen, [AnimationMode.Basic]);
    assert.equal(eventDetail, AnimationMode.Basic);
  });
});
