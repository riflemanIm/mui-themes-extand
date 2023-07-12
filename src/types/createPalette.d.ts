import { Theme } from "@mui/material/styles";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}
declare module "@mui/material/styles" {
  interface PaletteColor {
    darker: string;
    lighter: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
  interface TypeText {
    boby2: string;
    subtitle2: string;
  }
  interface TypeBackground {
    paper: string;
    default: string;
    neutral: string;
    warning: string;
    error: string;
    info: string;
    infoGadient: string;
    success: string;
  }
  interface TypeAction {
    active: string;
    hover: string;
    selected: string;
    disabled: string;
    disabledBackground: string;
    focus: string;
    hoverOpacity: number;
    disabledOpacity: number;
    toggle1: string;
    toggle2: string;
    toggle3: string;
    toggle4: string;
  }
  interface TypeGradients {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    one: string;
    two: string;
  }

  // add inside palette
  export interface Palette {
    hero: React.CSSProperties["color"];
    primary: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    secondary: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    info: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    success: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    divider: string;
    grey: string[];
    gradients: TypeGradients;
    text: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      boby2: React.CSSProperties["color"];
      subtitle2: React.CSSProperties["color"];
      disabled: React.CSSProperties["color"];
    };
    background: {
      paper: React.CSSProperties["color"];
      default: React.CSSProperties["color"];
      neutral: React.CSSProperties["color"];
      warning: React.CSSProperties["color"];
      error: React.CSSProperties["color"];
      info: string;
      infoGadient: string;
      success: React.CSSProperties["color"];
    };
    action: TypeAction;
    sideBar: {
      color: React.CSSProperties["color"];
      colorLeft: React.CSSProperties["color"];
      colorHover: React.CSSProperties["color"];
      colorActive: React.CSSProperties["color"];
      bg: React.CSSProperties["color"];
    };
    baseButton: {
      bgColor: string;
      bgColorHover: string;
      shadow: string;
    };
    bgLight: {
      one: string;
      two: string;
      disabled: string;
    };
    shadows: {
      card: string;
      firstHover: string;
    };
  }

  export interface PaletteOptions {
    hero: React.CSSProperties["color"];
    primary: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    secondary: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    info: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    success: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    warning: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };
    error: {
      lighter: React.CSSProperties["color"];
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      contrastText: React.CSSProperties["color"];
      darker: React.CSSProperties["color"];
    };

    divider?: string;
    grey: string[];
    gradients?: TypeGradients;
    text: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      boby2: React.CSSProperties["color"];
      subtitle2: React.CSSProperties["color"];
      disabled: React.CSSProperties["color"];
    };
    background: {
      paper: React.CSSProperties["color"];
      default: React.CSSProperties["color"];
      neutral: React.CSSProperties["color"];
      warning: React.CSSProperties["color"];
      error: React.CSSProperties["color"];
      info: string;
      infoGadient: string;
      success: React.CSSProperties["color"];
    };
    action: TypeAction;

    sideBar: {
      color: React.CSSProperties["color"];
      colorLeft: React.CSSProperties["color"];
      colorHover: React.CSSProperties["color"];
      colorActive: React.CSSProperties["color"];
      bg: React.CSSProperties["color"];
    };
    baseButton: {
      bgColor: string;
      bgColorHover: string;
      shadow: string;
    };
    bgLight: {
      one: string;
      two: string;
      disabled: string;
    };
    shadows: {
      card: string;
      firstHover: string;
    };
  }
}
