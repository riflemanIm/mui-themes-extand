import { describe, expect, it } from "vitest";

import getTheme, {
  DEFAULT_THEME_NAME,
  THEME_NAMES,
  THEME_REGISTRY,
  ThemeConfig,
  ThemeName,
} from "@/getTheme";

describe("getTheme", () => {
  it("returns the default theme when name is omitted", () => {
    const expected = THEME_REGISTRY[DEFAULT_THEME_NAME];
    expect(getTheme()).toBe(expected);
  });

  it("resolves registered theme names", () => {
    THEME_NAMES.forEach((themeName: ThemeName) => {
      const theme = getTheme(themeName);
      expect(theme).toBe(THEME_REGISTRY[themeName]);
    });
  });

  it("falls back to the default theme for unknown names", () => {
    const fallback = getTheme();
    expect(getTheme("unknown-theme")).toBe(fallback);
  });

  it("exposes palette, typography, and component overrides", () => {
    const themeConfig: ThemeConfig = getTheme(DEFAULT_THEME_NAME);
    expect(themeConfig.palette).toBeDefined();
    expect(themeConfig.typography).toBeDefined();
    expect(typeof themeConfig.componentsOverride).toBe("function");
  });
});
