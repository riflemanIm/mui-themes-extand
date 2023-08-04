import React from "react";
import { Theme } from "@mui/material/styles";
export default function ThemeProvider({ children, name, theme }: {
    children: React.ReactNode;
    name?: string;
    theme?: Theme;
}): React.JSX.Element;
