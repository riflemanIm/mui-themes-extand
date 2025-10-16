import React from "react";
import { Theme } from "@mui/material/styles";
import { ThemeName } from "./getTheme";
export declare const makeCustomTheme: (name?: ThemeName) => Theme;
export default function ThemeProvider({ children, name, theme, }: {
    children: React.ReactNode;
    name?: ThemeName;
    theme?: Theme;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemeProvider.d.ts.map