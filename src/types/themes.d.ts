import { Color } from "@mui/material";
import { PaletteColorOptions, Theme } from "@mui/material/styles";
import { Typography } from "@mui/material/styles/createTypography";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line
  interface DefaultTheme extends Theme {}
}
declare module "@mui/material/styles" {
  interface PaletteColor {
    lighter: string;
    main: string;
    light: string;
    dark: string;
    contrastText: string;
    darker: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
  interface TypeText {
    primary: string;
    secondary: string;
    boby2: string;
    subtitle2: string;
    disabled: string;
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

  interface PaletteColorExt {
    lighter: string;
    main: string;
    light: string;
    dark: string;
    contrastText: string;
    darker: string;
  }

  // add inside palette
  export interface Palette {
    hero: string;
    primary: PaletteColor;
    secondary: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    divider: string;
    grey: Color;
    gradients: TypeGradients;
    text: TypeText;
    background: TypeBackground;
    action: TypeAction;
    appBar: AppBarColors;
    sideBar: {
      color: string;
      colorLeft: string;
      colorHover: string;
      colorActive: string;
      bg: string;
    };
    baseButton: {
      bgColor: string;
      shadow: string;
    };
    bgLight: {
      one: string;
      two: string;
    };
    shadows: {
      card: string;
      firstHover: string;
    };
  }

  interface AppBarColors {
    background: string;
    iconColor: string;
    color: string;
  }

  export interface PaletteOptions {
    hero: string;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    error?: PaletteColorOptions;

    divider?: string;
    grey?: Partial<Color>;
    gradients?: TypeGradients;
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
    action?: Partial<TypeAction>;

    appBar: AppBarColors;
    sideBar: {
      color: string;
      colorLeft: string;
      colorHover: string;
      colorActive: string;
      bg: string;
    };
    baseButton: {
      bgColor: string;
      shadow: string;
    };
    bgLight: {
      one: string;
      two: string;
    };
    shadows: {
      card: string;
      firstHover: string;
    };
  }
}

declare module "@mui/material/styles" {
  // fix the type error when referencing the Theme object in your styled component
  export interface Theme {
    palette: Palette;
    typography: Typography;
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    palette?: PaletteOptions;
  }
}
