import React from "react";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ThemeProvider, { makeCustomTheme } from "@/ThemeProvider";
import getTheme, { DEFAULT_THEME_NAME } from "@/getTheme";

describe("ThemeProvider", () => {
  it("creates a Material UI theme using registered configuration", () => {
    const baseConfig = getTheme(DEFAULT_THEME_NAME);
    const materialTheme = makeCustomTheme(DEFAULT_THEME_NAME);

    expect(materialTheme.palette.primary.main).toBe(
      baseConfig.palette.primary.main
    );
    expect(
      materialTheme.components?.MuiButton?.styleOverrides?.containedPrimary
    ).toBeDefined();
  });

  it("renders children inside the provider", () => {
    render(
      <ThemeProvider name={DEFAULT_THEME_NAME}>
        <button type="button">Apply</button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button", { name: "Apply" })).toBeInTheDocument();
  });
});
