import { jsx as Me, jsxs as Re } from "react/jsx-runtime";
import { useMemo as Ee } from "react";
import { alpha as c, CssBaseline as He } from "@mui/material";
import { alpha as e, StyledEngineProvider as We, ThemeProvider as Te, createTheme as ze } from "@mui/material/styles";
import r from "tinycolor2";
function i(o, a) {
  return `linear-gradient(to bottom, ${o}, ${a})`;
}
function n(o) {
  return `${o / 16}rem`;
}
const t = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  5008: c("#919EAB", 0.08),
  50012: c("#919EAB", 0.12),
  50016: c("#919EAB", 0.16),
  50024: c("#919EAB", 0.24),
  50032: c("#919EAB", 0.32),
  50048: c("#919EAB", 0.48),
  50056: c("#919EAB", 0.56),
  50080: c("#919EAB", 0.8)
}, me = 1.5, C = 7.5, h = 15, Be = 30, f = "#6157FF", wo = "#73D7F5", tr = "#F57069", er = "#FFEED6", nr = "#abb3ff", ir = "#f44336", Ie = "#6157FF", Po = {
  lighter: r(f).lighten(me).toHexString(),
  main: f,
  light: r(f).lighten(C).toHexString(),
  dark: r(f).darken(h).toHexString(),
  darker: r(f).darken(Be).toHexString(),
  contrastText: "#fff"
}, De = {
  lighter: "#D6E4FF",
  main: wo,
  light: r(wo).lighten(C).toHexString(),
  dark: r(wo).darken(h).toHexString(),
  darker: r(f).darken(Be).toHexString(),
  contrastText: "#ccc"
}, so = {
  lighter: "#D0F2FF",
  main: nr,
  light: r(nr).lighten(C).toHexString(),
  dark: r(nr).darken(h).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, wt = {
  lighter: "#E9FCD4",
  main: er,
  light: r(er).lighten(C).toHexString(),
  dark: r(er).darken(h).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Mt = {
  lighter: "#FFF7CD",
  main: tr,
  light: r(tr).lighten(C).toHexString(),
  dark: r(tr).darken(h).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Bt = {
  lighter: "#FFE7D9",
  main: ir,
  light: r(ir).lighten(C).toHexString(),
  dark: r(ir).darken(h).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Ue = {
  primary: i(Po.light, Po.main),
  info: i(so.light, so.main),
  success: i(wt.light, wt.main),
  warning: i(Mt.light, Mt.main),
  error: i(Bt.light, Bt.main),
  one: "#7385FF",
  two: "#584DFF"
}, Ne = {
  hero: Ie,
  primary: { ...Po },
  secondary: { ...De },
  info: { ...so },
  success: { ...wt },
  warning: { ...Mt },
  error: { ...Bt },
  grey: t,
  gradients: Ue,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "#F1F4FC",
    infoGadient: i(so.lighter, so.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#6157FF",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  appBar: {
    background: Po.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#6157FF",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #7385FF 3.01%, #584DFF 95.95%)",
    shadow: `0px 1px 4px ${r(wo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#F1F4FC"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Pe = "Avenir Next Cyr", Le = {
  fontFamily: Pe,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem",
    fontWeight: 500
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  // overline: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Ge(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Ye(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
const _e = typeof navigator < "u", d = _e && /AppleWebKit/i.test(navigator.userAgent);
function je(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": { borderBottom: "1px solid rgb(196 196 196)" },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": { backgroundColor: e(o.palette.grey[500], 0.16) },
          "&.Mui-focused": { backgroundColor: o.palette.action.focus },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": { backgroundColor: "#fff" },
          "& fieldset": { borderColor: o.palette.grey },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Ke(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.two,
          // boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.one,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function qe(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Je(o) {
  const a = e(o.palette.grey[900], 0.92), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Qe(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Ve(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function Xe(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Ze(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function on(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function rn(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function tn() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function en(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function nn() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function an(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ln() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function dn() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function cn(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function gn() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function sn(o) {
  return Object.assign(
    on(o),
    Ge(o),
    je(o),
    Ye(o),
    Ke(o),
    qe(o),
    Je(o),
    Qe(o),
    Ve(o),
    Xe(o),
    Ze(o),
    rn(o),
    tn(),
    en(o),
    nn(),
    an(o),
    ln(),
    dn(),
    cn(o),
    gn()
  );
}
const un = {
  palette: Ne,
  typography: Le,
  componentsOverride: sn
}, pn = 1.5, S = 7.5, v = 15, bn = 30, q = "#E61565", Mo = "#28B7C6", ar = "#FF9690", lr = "#F2D0B2", dr = "#FF9690", fn = "#E31363", cr = "#f44336", At = {
  lighter: r(q).lighten(pn).toHexString(),
  main: q,
  light: r(q).lighten(S).toHexString(),
  dark: r(q).darken(v).toHexString(),
  darker: r(q).darken(bn).toHexString(),
  contrastText: "#fff"
}, gr = {
  lighter: "#D6E4FF",
  main: Mo,
  light: r(Mo).lighten(S).toHexString(),
  dark: r(Mo).darken(v).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, uo = {
  lighter: "#D0F2FF",
  main: dr,
  light: r(dr).lighten(S).toHexString(),
  dark: r(dr).darken(v).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Ot = {
  lighter: "#E9FCD4",
  main: lr,
  light: r(lr).lighten(S).toHexString(),
  dark: r(lr).darken(v).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Rt = {
  lighter: "#FFF7CD",
  main: ar,
  light: r(ar).lighten(S).toHexString(),
  dark: r(ar).darken(v).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Et = {
  lighter: "#FFE7D9",
  main: cr,
  light: r(cr).lighten(S).toHexString(),
  dark: r(cr).darken(v).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, yn = {
  primary: i(At.light, At.main),
  info: i(uo.light, uo.main),
  success: i(Ot.light, Ot.main),
  warning: i(Rt.light, Rt.main),
  error: i(Et.light, Et.main),
  one: "#49545d",
  two: "#3F4A52"
}, Ae = {
  hero: fn,
  primary: { ...At },
  secondary: { ...gr },
  info: { ...uo },
  success: { ...Ot },
  warning: { ...Rt },
  error: { ...Et },
  grey: t,
  gradients: yn,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: i(uo.lighter, uo.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#E61565",
    toggle2: "#28B7C6",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: "#fff",
    iconColor: gr.main,
    color: gr.dark
  },
  sideBar: {
    color: "#fff",
    colorLeft: "#28B7C6",
    colorHover: "#3F4A52",
    colorActive: "#000",
    bg: "#28B7C6"
  },
  baseButton: {
    bgColor: "linear-gradient(180deg, #E31363 0%, #C2024C 100%)",
    shadow: `0px 1px 4px ${r(Mo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#E8F5F6",
    two: "#C1EFF4"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, kn = "Avenir Next Cyr", xn = {
  fontFamily: kn,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Cn(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function hn(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Sn(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.hero,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function vn(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function $n(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Fn(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function wn(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Mn(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function Bn(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function An(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function On(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          //background: `linear-gradient(177.31deg, ${theme.palette.gradients.one} 3.01%, ${theme.palette.gradients.two} 95.95%)`,
          background: Ae.appBar.background
        }
      }
    }
  };
}
function Rn(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: `${o.palette.secondary.main} !important`
          }
        }
      }
    }
  };
}
function En() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Hn(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Wn() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Tn(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function zn() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function mn() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function In(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Dn() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Un(o) {
  return Object.assign(
    On(),
    Cn(o),
    Sn(o),
    hn(o),
    vn(o),
    $n(o),
    Fn(o),
    wn(o),
    Mn(o),
    Bn(o),
    An(o),
    Rn(o),
    En(),
    Hn(o),
    Wn(),
    Tn(o),
    zn(),
    mn(),
    In(o),
    Dn()
  );
}
const Nn = {
  palette: Ae,
  typography: xn,
  componentsOverride: Un
}, Pn = 1.5, $ = 7.5, F = 15, Ln = 30, J = "#EA9D00", Bo = "#559BDC", sr = "#FF4D75", ur = "#34DFA2", pr = "#FF9690", br = "#FF4D75", Gn = "#004D8F", Lo = {
  lighter: r(J).lighten(Pn).toHexString(),
  main: J,
  light: r(J).lighten($).toHexString(),
  dark: r(J).darken(F).toHexString(),
  darker: r(J).darken(Ln).toHexString(),
  contrastText: "#fff"
}, Yn = {
  lighter: "#D6E4FF",
  main: Bo,
  light: r(Bo).lighten($).toHexString(),
  dark: r(Bo).darken(F).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, po = {
  lighter: "#D0F2FF",
  main: pr,
  light: r(pr).lighten($).toHexString(),
  dark: r(pr).darken(F).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Ht = {
  lighter: "#E9FCD4",
  main: ur,
  light: r(ur).lighten($).toHexString(),
  dark: r(ur).darken(F).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Wt = {
  lighter: "#FFF7CD",
  main: sr,
  light: r(sr).lighten($).toHexString(),
  dark: r(sr).darken(F).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Tt = {
  lighter: "#FFE7D9",
  main: br,
  light: r(br).lighten($).toHexString(),
  dark: r(br).darken(F).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, _n = {
  primary: i(Lo.light, Lo.main),
  info: i(po.light, po.main),
  success: i(Ht.light, Ht.main),
  warning: i(Wt.light, Wt.main),
  error: i(Tt.light, Tt.main),
  one: "#EDAA21",
  two: "#EB9D02"
}, jn = {
  hero: Gn,
  primary: { ...Lo },
  secondary: { ...Yn },
  info: { ...po },
  success: { ...Ht },
  warning: { ...Wt },
  error: { ...Tt },
  grey: t,
  gradients: _n,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: i(po.lighter, po.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#004D8F",
    toggle2: "#004D8F",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: Lo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#EDAA21",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #EDAA21 3.01%, #EB9D02 95.95%)",
    shadow: `0px 1px 4px ${r(Bo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#efefef",
    two: "#f3f3f3"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Kn = "Avenir Next Cyr", qn = {
  fontFamily: Kn,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Jn(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Qn(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Vn(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.hero,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Xn(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Zn(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function oi(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function ri(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function ti(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function ei(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function ni(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function ii(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function ai(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function li() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function di(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function ci() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function gi(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function si() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function ui() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function pi(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function bi() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function fi(o) {
  return Object.assign(
    ii(o),
    Jn(o),
    Vn(o),
    Qn(o),
    Xn(o),
    Zn(o),
    oi(o),
    ri(o),
    ti(o),
    ei(o),
    ni(o),
    ai(o),
    li(),
    di(o),
    ci(),
    gi(o),
    si(),
    ui(),
    pi(o),
    bi()
  );
}
const yi = {
  palette: jn,
  typography: qn,
  componentsOverride: fi
}, ki = 1.5, g = 7.5, w = 15, xi = 20, Q = "#0A6252", Ao = "#7C7D80", fr = "#EF7785", yr = "#4DAE00", kr = "#C2C4CB", xr = "#D76977", Cr = "#5A9388", Go = {
  lighter: r(Q).lighten(ki).toHexString(),
  main: Q,
  light: r(Q).lighten(g).toHexString(),
  dark: r(Q).darken(w).toHexString(),
  darker: r(Q).darken(xi).toHexString(),
  contrastText: "#fff"
}, Ci = {
  lighter: "#D6E4FF",
  main: Ao,
  light: r(Ao).lighten(g).toHexString(),
  dark: r(Ao).darken(w).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, zt = {
  lighter: "#F8FFFA",
  main: kr,
  light: r(kr).lighten(g).toHexString(),
  dark: r(kr).darken(w).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, mt = {
  lighter: "#E9FCD4",
  main: yr,
  light: r(yr).lighten(g).toHexString(),
  dark: r(yr).darken(w).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, It = {
  lighter: "#FFF7CD",
  main: fr,
  light: r(fr).lighten(g).toHexString(),
  dark: r(fr).darken(w).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Dt = {
  lighter: "#FFE7D9",
  main: xr,
  light: r(xr).lighten(g).toHexString(),
  dark: r(xr).darken(w).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, hi = {
  primary: i(Go.light, Go.main),
  info: i(zt.light, zt.main),
  success: i(mt.light, mt.main),
  warning: i(It.light, It.main),
  error: i(Dt.light, Dt.main),
  one: "#1F524A",
  two: "#005349"
}, Si = {
  hero: Cr,
  primary: { ...Go },
  secondary: { ...Ci },
  info: { ...zt },
  success: { ...mt },
  warning: { ...It },
  error: { ...Dt },
  grey: t,
  gradients: hi,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#F1CBC6",
    error: "#BBCAC7",
    info: "#EDF5F0",
    infoGadient: i("#D7F5DF", "#F8FFFA"),
    success: "#E3F8D2"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabledBackground: "#005349",
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: Cr,
    toggle2: r(Cr).lighten(g).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: Go.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#1F524A",
    colorHover: "#025047",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #1F524A 3.01%, #005349 95.95%)",
    shadow: `0px 1px 4px ${r(Ao).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#EDF5F0",
    two: "#EFF9F7"
  },
  shadows: {
    card: "0px 2px 35px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, vi = "Avenir Next Cyr", $i = {
  fontFamily: vi,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Fi(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function wi(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Mi(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: "#D6E8D9"
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Bi(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none",
            color: o.palette.primary.dark
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Ai(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Oi(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Ri(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Ei(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function Hi(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Wi(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Ti(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function zi(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.hero
          }
        }
      }
    }
  };
}
function mi() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Ii(o) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: o.palette.primary.main
        },
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Di() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Ui(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        icon: {
          fontSize: 28
        },
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          icon: {
            color: o.palette.warning.main
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          icon: {
            color: o.palette.error.main
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          icon: {
            color: o.palette.info.main
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          icon: {
            color: o.palette.success.dark
          }
        }
      }
    }
  };
}
function Ni() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Pi() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function Li(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Gi() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Yi(o) {
  return Object.assign(
    Ti(o),
    Fi(o),
    Mi(o),
    wi(o),
    Bi(o),
    Ai(o),
    Oi(o),
    Ri(o),
    Ei(o),
    Hi(o),
    Wi(o),
    zi(o),
    mi(),
    Ii(o),
    Di(),
    Ui(o),
    Ni(),
    Pi(),
    Li(o),
    Gi()
  );
}
const _i = {
  palette: Si,
  typography: $i,
  componentsOverride: Yi
}, ji = 1.5, M = 7.5, B = 15, Ki = 30, V = "#4576E6", Oo = "#73D7F5", hr = "#F57069", Sr = "#34DFA2", vr = "#FF9690", qi = "#4576E6", $r = "#f44336", Yo = {
  lighter: r(V).lighten(ji).toHexString(),
  main: V,
  light: r(V).lighten(M).toHexString(),
  dark: r(V).darken(B).toHexString(),
  darker: r(V).darken(Ki).toHexString(),
  contrastText: "#fff"
}, Ji = {
  lighter: "#D6E4FF",
  main: Oo,
  light: r(Oo).lighten(M).toHexString(),
  dark: r(Oo).darken(B).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, bo = {
  lighter: "#D0F2FF",
  main: vr,
  light: r(vr).lighten(M).toHexString(),
  dark: r(vr).darken(B).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Ut = {
  lighter: "#E9FCD4",
  main: Sr,
  light: r(Sr).lighten(M).toHexString(),
  dark: r(Sr).darken(B).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Nt = {
  lighter: "#FFF7CD",
  main: hr,
  light: r(hr).lighten(M).toHexString(),
  dark: r(hr).darken(B).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Pt = {
  lighter: "#FFE7D9",
  main: $r,
  light: r($r).lighten(M).toHexString(),
  dark: r($r).darken(B).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Qi = {
  primary: i(Yo.light, Yo.main),
  info: i(bo.light, bo.main),
  success: i(Ut.light, Ut.main),
  warning: i(Nt.light, Nt.main),
  error: i(Pt.light, Pt.main),
  one: "#4576E6",
  two: "#295BCE"
}, Vi = {
  hero: qi,
  primary: { ...Yo },
  secondary: { ...Ji },
  info: { ...bo },
  success: { ...Ut },
  warning: { ...Nt },
  error: { ...Pt },
  grey: t,
  gradients: Qi,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: i(bo.lighter, bo.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#4576E6",
    toggle3: "#F1F4FC",
    toggle4: "#828EFA"
  },
  appBar: {
    background: Yo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#6157FF",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #4576E6 3.01%, #295BCE 95.95%)",
    shadow: `0px 1px 4px ${r(Oo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1F4FC",
    two: "#efefef"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Xi = "Avenir Next Cyr", Zi = {
  fontFamily: Xi,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function oa(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function ra(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function ta(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.grey[500], 0.56)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.hero,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function ea(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function na(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function ia(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function aa(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function la(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function da(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function ca(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function ga(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function sa(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ua() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function pa(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function ba() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function fa(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ya() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function ka() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function xa(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Ca() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function ha(o) {
  return Object.assign(
    ga(o),
    oa(o),
    ta(o),
    ra(o),
    ea(o),
    na(o),
    ia(o),
    aa(o),
    la(o),
    da(o),
    ca(o),
    sa(o),
    ua(),
    pa(o),
    ba(),
    fa(o),
    ya(),
    ka(),
    xa(o),
    Ca()
  );
}
const Sa = {
  palette: Vi,
  typography: Zi,
  componentsOverride: ha
}, va = 1.5, A = 7.5, O = 15, $a = 30, X = "#6157FF", Ro = "#73D7F5", Fr = "#F57069", wr = "#34DFA2", Mr = "#abb3ff", Br = "#f44336", Fa = "#6157FF", _o = {
  lighter: r(X).lighten(va).toHexString(),
  main: X,
  light: r(X).lighten(A).toHexString(),
  dark: r(X).darken(O).toHexString(),
  darker: r(X).darken($a).toHexString(),
  contrastText: "#fff"
}, wa = {
  lighter: "#D6E4FF",
  main: Ro,
  light: r(Ro).lighten(A).toHexString(),
  dark: r(Ro).darken(O).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, fo = {
  lighter: "#D0F2FF",
  main: Mr,
  light: r(Mr).lighten(A).toHexString(),
  dark: r(Mr).darken(O).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Lt = {
  lighter: "#E9FCD4",
  main: wr,
  light: r(wr).lighten(A).toHexString(),
  dark: r(wr).darken(O).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Gt = {
  lighter: "#FFF7CD",
  main: Fr,
  light: r(Fr).lighten(A).toHexString(),
  dark: r(Fr).darken(O).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Yt = {
  lighter: "#FFE7D9",
  main: Br,
  light: r(Br).lighten(A).toHexString(),
  dark: r(Br).darken(O).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Ma = {
  primary: i(_o.light, _o.main),
  info: i(fo.light, fo.main),
  success: i(Lt.light, Lt.main),
  warning: i(Gt.light, Gt.main),
  error: i(Yt.light, Yt.main),
  one: "#7385FF",
  two: "#584DFF"
}, Ba = {
  hero: Fa,
  primary: { ..._o },
  secondary: { ...wa },
  info: { ...fo },
  success: { ...Lt },
  warning: { ...Gt },
  error: { ...Yt },
  grey: t,
  gradients: Ma,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: i(fo.lighter, fo.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#6157FF",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  appBar: {
    background: _o.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#6157FF",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #7385FF 3.01%, #584DFF 95.95%)",
    shadow: `0px 1px 4px ${r(Ro).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#F1F4FC"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Aa = "Avenir Next Cyr", Oa = {
  fontFamily: Aa,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Ra(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Ea(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Ha(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Wa(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Ta(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function za(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function ma(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Ia(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function Da(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Ua(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Na(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Pa(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function La() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Ga(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Ya() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function _a(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ja() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Ka() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function qa(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Ja() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Qa(o) {
  return Object.assign(
    Na(o),
    Ra(o),
    Ha(o),
    Ea(o),
    Wa(o),
    Ta(o),
    za(o),
    ma(o),
    Ia(o),
    Da(o),
    Ua(o),
    Pa(o),
    La(),
    Ga(o),
    Ya(),
    _a(o),
    ja(),
    Ka(),
    qa(o),
    Ja()
  );
}
const Va = {
  palette: Ba,
  typography: Oa,
  componentsOverride: Qa
}, Xa = 1.5, R = 7.5, E = 15, Za = 30, Z = "#49A65C", Eo = "#58ca70", Ar = "#FA847E", Or = "#4DAE00", Rr = "#FECB07", Er = "#FF9690", ol = "#F57069", y = {
  lighter: r(Z).lighten(Xa).toHexString(),
  main: Z,
  light: r(Z).lighten(R).toHexString(),
  dark: r(Z).darken(E).toHexString(),
  darker: r(Z).darken(Za).toHexString(),
  contrastText: "#fff"
}, rl = {
  lighter: "#D6E4FF",
  main: Eo,
  light: r(Eo).lighten(R).toHexString(),
  dark: r(Eo).darken(E).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, yo = {
  lighter: "#FCEDF2",
  main: Rr,
  light: r(Rr).lighten(R).toHexString(),
  dark: r(Rr).darken(E).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, _t = {
  lighter: "#E9FCD4",
  main: Or,
  light: r(Or).lighten(R).toHexString(),
  dark: r(Or).darken(E).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, jt = {
  lighter: "#FFF7CD",
  main: Ar,
  light: r(Ar).lighten(R).toHexString(),
  dark: r(Ar).darken(E).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Kt = {
  lighter: "#FFE7D9",
  main: Er,
  light: r(Er).lighten(R).toHexString(),
  dark: r(Er).darken(E).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, tl = {
  primary: i(y.light, y.main),
  info: i(yo.light, yo.main),
  success: i(_t.light, _t.main),
  warning: i(jt.light, jt.main),
  error: i(Kt.light, Kt.main),
  one: "#44A357",
  two: "#28933E"
}, el = {
  hero: ol,
  primary: { ...y },
  secondary: { ...rl },
  info: { ...yo },
  success: { ..._t },
  warning: { ...jt },
  error: { ...Kt },
  grey: t,
  gradients: tl,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[100],
    warning: "#ECECEC",
    error: "#edd1d1",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: i(yo.lighter, yo.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: y.main,
    toggle2: y.dark,
    toggle3: "#EDFCFA",
    toggle4: "#fff"
  },
  appBar: {
    background: y.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#445A68",
    colorActive: "#000",
    bg: "#FFF"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #44A357 3.01%, #28933E 95.95%)",
    shadow: `0px 1px 4px ${r(Eo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F4F4F4",
    two: "#F1FCF7"
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, nl = "Avenir Next Cyr", il = {
  fontFamily: nl,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function al(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function ll(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function dl(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function cl(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function gl(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function sl(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function ul(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function pl(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function bl(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function fl(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function yl(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(139.78deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function kl(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function xl() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Cl(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function hl() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Sl(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function vl() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function $l() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function Fl(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function wl() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Ml(o) {
  return Object.assign(
    yl(o),
    al(o),
    dl(o),
    ll(o),
    cl(o),
    gl(o),
    sl(o),
    ul(o),
    pl(o),
    bl(o),
    fl(o),
    kl(o),
    xl(),
    Cl(o),
    hl(),
    Sl(o),
    vl(),
    $l(),
    Fl(o),
    wl()
  );
}
const Bl = {
  palette: el,
  typography: il,
  componentsOverride: Ml
}, Al = 1.5, H = 7.5, W = 15, Ol = 30, oo = "#DB4141", Ho = "#F7BFBC", Hr = "#F57069", Wr = "#FFC9AB", Tr = "#F2D0B2", zr = "#802121", Rl = "#B00C2F", k = {
  lighter: r(oo).lighten(Al).toHexString(),
  main: oo,
  light: r(oo).lighten(H).toHexString(),
  dark: r(oo).darken(W).toHexString(),
  darker: r(oo).darken(Ol).toHexString(),
  contrastText: "#fff"
}, El = {
  lighter: "#D6E4FF",
  main: Ho,
  light: r(Ho).lighten(H).toHexString(),
  dark: r(Ho).darken(W).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, ko = {
  lighter: "#FCEDF2",
  main: Tr,
  light: r(Tr).lighten(H).toHexString(),
  dark: r(Tr).darken(W).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, qt = {
  lighter: "#E9FCD4",
  main: Wr,
  light: r(Wr).lighten(H).toHexString(),
  dark: r(Wr).darken(W).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Jt = {
  lighter: "#FFF7CD",
  main: Hr,
  light: r(Hr).lighten(H).toHexString(),
  dark: r(Hr).darken(W).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Qt = {
  lighter: "#FFE7D9",
  main: zr,
  light: r(zr).lighten(H).toHexString(),
  dark: r(zr).darken(W).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Hl = {
  primary: i(k.light, k.main),
  info: i(ko.light, ko.main),
  success: i(qt.light, qt.main),
  warning: i(Jt.light, Jt.main),
  error: i(Qt.light, Qt.main),
  one: "#EB323F",
  two: "#981127"
}, Wl = {
  hero: Rl,
  primary: { ...k },
  secondary: { ...El },
  info: { ...ko },
  success: { ...qt },
  warning: { ...Jt },
  error: { ...Qt },
  grey: t,
  gradients: Hl,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: i(ko.lighter, ko.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: k.main,
    toggle2: k.light,
    toggle3: "#FCEDF2",
    toggle4: "#fff"
  },
  appBar: {
    background: k.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#DB4141",
    colorLeft: "#DB4141",
    colorHover: "#802121",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #EB323F 3.01%, #981127 95.95%)",
    shadow: `0px 1px 4px ${r(Ho).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F4F4F4",
    two: "#FFEEEE"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Tl = "Glober SemiBold", zl = {
  fontFamily: Tl,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function ml(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Il(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Dl(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.primary.main, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Ul(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Nl(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Pl(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Ll(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Gl(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }

        #root: {
          width: 100%;
          height: 100%;
        }

        img: {
          display: block;
          maxWidth: 100%;
        }

        @font-face {
          font-family: 'Glober SemiBold';
          src: url(/fonts/Glober/GloberSemiBoldFree.eot);
          src: url(/fonts/Glober/GloberSemiBoldFree.eot?#iefix) format('embedded-opentype'),
              url(/fonts/Glober/GloberSemiBoldFree.woff2) format('woff2'),
              url(/fonts/Glober/GloberSemiBoldFree.woff) format('woff'),
              url(/fonts/Glober/GloberSemiBoldFree.ttf) format('truetype');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
      }
      

      `
    }
  };
}
function Yl(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function _l(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function jl(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Kl(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ql() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Jl(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Ql() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Vl(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Xl() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Zl() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function od(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function rd() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function td(o) {
  return Object.assign(
    jl(o),
    ml(o),
    Dl(o),
    Il(o),
    Ul(o),
    Nl(o),
    Pl(o),
    Ll(o),
    Gl(o),
    Yl(o),
    _l(o),
    Kl(o),
    ql(),
    Jl(o),
    Ql(),
    Vl(o),
    Xl(),
    Zl(),
    od(o),
    rd()
  );
}
const ed = {
  palette: Wl,
  typography: zl,
  componentsOverride: td
}, nd = 1.5, T = 7.5, z = 15, id = 30, ro = "#1B719E", Wo = "#A6CCBE", mr = "#3AAEEC", Ir = "#1B719E", Dr = "#F2D0B2", Ur = "#FF9690", ad = "#2188bf", x = {
  lighter: r(ro).lighten(nd).toHexString(),
  main: ro,
  light: r(ro).lighten(T).toHexString(),
  dark: r(ro).darken(z).toHexString(),
  darker: r(ro).darken(id).toHexString(),
  contrastText: "#fff"
}, ld = {
  lighter: "#D6E4FF",
  main: Wo,
  light: r(Wo).lighten(T).toHexString(),
  dark: r(Wo).darken(z).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, xo = {
  lighter: "#FCEDF2",
  main: Dr,
  light: r(Dr).lighten(T).toHexString(),
  dark: r(Dr).darken(z).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, Vt = {
  lighter: "#E9FCD4",
  main: Ir,
  light: r(Ir).lighten(T).toHexString(),
  dark: r(Ir).darken(z).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Xt = {
  lighter: "#FFF7CD",
  main: mr,
  light: r(mr).lighten(T).toHexString(),
  dark: r(mr).darken(z).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, Zt = {
  lighter: "#FFE7D9",
  main: Ur,
  light: r(Ur).lighten(T).toHexString(),
  dark: r(Ur).darken(z).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, dd = {
  primary: i(x.light, x.main),
  info: i(xo.light, xo.main),
  success: i(Vt.light, Vt.main),
  warning: i(Xt.light, Xt.main),
  error: i(Zt.light, Zt.main),
  one: "#2AB6CA",
  two: "#28909B"
}, cd = {
  hero: ad,
  primary: { ...x },
  secondary: { ...ld },
  info: { ...xo },
  success: { ...Vt },
  warning: { ...Xt },
  error: { ...Zt },
  grey: t,
  gradients: dd,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[100],
    warning: "#ECECEC",
    error: "#edd1d1",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: i(xo.lighter, xo.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: x.main,
    toggle2: x.dark,
    toggle3: "#EDFCFA",
    toggle4: "#fff"
  },
  appBar: {
    background: x.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#2AB6CA",
    colorHover: "#802121",
    colorActive: "#000",
    bg: "#FFF"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #2AB6CA 3.01%, #28909B 95.95%)",
    shadow: `0px 1px 4px ${r(Wo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FBFC",
    two: "#F1FCF7"
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, gd = "Avenir Next Cyr", sd = {
  fontFamily: gd,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function ud(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function pd(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function bd(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.16)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.primary.main, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function fd(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function yd(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function kd(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function xd(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Cd(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function hd(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Sd(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function vd(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(180deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function $d(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Fd() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function wd(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Md() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Bd(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Ad() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Od() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function Rd(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Ed() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Hd(o) {
  return Object.assign(
    vd(o),
    ud(o),
    bd(o),
    pd(o),
    fd(o),
    yd(o),
    kd(o),
    xd(o),
    Cd(o),
    hd(o),
    Sd(o),
    $d(o),
    Fd(),
    wd(o),
    Md(),
    Bd(o),
    Ad(),
    Od(),
    Rd(o),
    Ed()
  );
}
const Wd = {
  palette: cd,
  typography: sd,
  componentsOverride: Hd
}, Td = 1.5, s = 7.5, m = 15, zd = 30, to = "#2873AA", To = "#5F7D8E", Nr = "#FF352A", Pr = "#4DAE00", Lr = "#C2C4CB", Gr = "#E20B00", Yr = "#5F7D8E", jo = {
  lighter: r(to).lighten(Td).toHexString(),
  main: to,
  light: r(to).lighten(s).toHexString(),
  dark: r(to).darken(m).toHexString(),
  darker: r(to).darken(zd).toHexString(),
  contrastText: "#fff"
}, md = {
  lighter: "#D6E4FF",
  main: To,
  light: r(To).lighten(s).toHexString(),
  dark: r(To).darken(m).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, Co = {
  lighter: "#FCEDF2",
  main: Lr,
  light: r(Lr).lighten(s).toHexString(),
  dark: r(Lr).darken(m).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, oe = {
  lighter: "#E9FCD4",
  main: Pr,
  light: r(Pr).lighten(s).toHexString(),
  dark: r(Pr).darken(m).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, re = {
  lighter: "#FFF7CD",
  main: Nr,
  light: r(Nr).lighten(s).toHexString(),
  dark: r(Nr).darken(m).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, te = {
  lighter: "#FFE7D9",
  main: Gr,
  light: r(Gr).lighten(s).toHexString(),
  dark: r(Gr).darken(m).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Id = {
  primary: i(jo.light, jo.main),
  info: i(Co.light, Co.main),
  success: i(oe.light, oe.main),
  warning: i(re.light, re.main),
  error: i(te.light, te.main),
  one: "#A9341E",
  two: "#7A232E"
}, Dd = {
  hero: Yr,
  primary: { ...jo },
  secondary: { ...md },
  info: { ...Co },
  success: { ...oe },
  warning: { ...re },
  error: { ...te },
  grey: t,
  gradients: Id,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: i(Co.lighter, Co.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: "#E7CBC7",
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: Yr,
    toggle2: r(Yr).lighten(s).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: jo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#B4193C",
    colorHover: "#E20B00",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #A9341E 3.01%, #7A232E 95.95%)",
    shadow: `0px 1px 4px ${r(To).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#FFEEEE",
    two: "#F5F5F5"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Ud = "Avenir Next Cyr", Nd = {
  fontFamily: Ud,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Pd(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Ld(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Gd(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Yd(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function _d(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function jd(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Kd(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function qd(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function Jd(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Qd(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Vd(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Xd(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.hero
          }
        }
      }
    }
  };
}
function Zd() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function oc(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function rc() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function tc(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ec() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function nc() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function ic(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function ac() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function lc(o) {
  return Object.assign(
    Vd(o),
    Pd(o),
    Gd(o),
    Ld(o),
    Yd(o),
    _d(o),
    jd(o),
    Kd(o),
    qd(o),
    Jd(o),
    Qd(o),
    Xd(o),
    Zd(),
    oc(o),
    rc(),
    tc(o),
    ec(),
    nc(),
    ic(o),
    ac()
  );
}
const dc = {
  palette: Dd,
  typography: Nd,
  componentsOverride: lc
}, cc = 1.5, I = 7.5, D = 15, gc = 30, eo = "#AA9161", zo = "#D0C8B5", _r = "#F57069", jr = "#E3F8D2", Kr = "#B5A788", qr = "#F57069", sc = "#6D0C8B5", Ko = {
  lighter: r(eo).lighten(cc).toHexString(),
  main: eo,
  light: r(eo).lighten(I).toHexString(),
  dark: r(eo).darken(D).toHexString(),
  darker: r(eo).darken(gc).toHexString(),
  contrastText: "#fff"
}, uc = {
  lighter: "#D6E4FF",
  main: zo,
  light: r(zo).lighten(I).toHexString(),
  dark: r(zo).darken(D).toHexString(),
  contrastText: "#A2916A",
  darker: "#827657"
}, ho = {
  lighter: "#D0F2FF",
  main: Kr,
  light: r(Kr).lighten(I).toHexString(),
  dark: r(Kr).darken(D).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, ee = {
  lighter: "#E9FCD4",
  main: jr,
  light: r(jr).lighten(I).toHexString(),
  dark: r(jr).darken(D).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, ne = {
  lighter: "#FFF7CD",
  main: _r,
  light: r(_r).lighten(I).toHexString(),
  dark: r(_r).darken(D).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, ie = {
  lighter: "#FFE7D9",
  main: qr,
  light: r(qr).lighten(I).toHexString(),
  dark: r(qr).darken(D).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, pc = {
  primary: i(Ko.light, Ko.main),
  info: i(ho.light, ho.main),
  success: i(ee.light, ee.main),
  warning: i(ne.light, ne.main),
  error: i(ie.light, ie.main),
  one: "#B5A788",
  two: "#AA9161"
}, bc = {
  hero: sc,
  primary: { ...Ko },
  secondary: { ...uc },
  info: { ...ho },
  success: { ...ee },
  warning: { ...ne },
  error: { ...ie },
  grey: t,
  gradients: pc,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: t[100],
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "#FFEED6",
    infoGadient: i(ho.lighter, ho.light),
    success: "#FFE7CE"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#A2916A",
    toggle2: "#F57069",
    toggle3: "#F2F2F1",
    toggle4: "#fff"
  },
  appBar: {
    background: Ko.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#828383",
    colorLeft: "#F57069",
    colorHover: "#AA9161",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #B5A788 3.01%, #AA9161 95.95%)",
    shadow: `0px 1px 4px ${r(zo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F6F4F0",
    two: "#F2F2F1"
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, fc = "Roboto", yc = {
  fontFamily: fc,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  // overline: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function kc(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function xc(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Cc(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function hc(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.info.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.info.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Sc(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function vc(o) {
  const a = e(o.palette.grey[900], 0.6), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function $c(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Fc(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
      `
    }
  };
}
function wc(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Mc(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Bc(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Ac(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Oc() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Rc(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Ec() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Hc(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Wc() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Tc() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function zc(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function mc() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Ic(o) {
  return Object.assign(
    Bc(o),
    kc(o),
    Cc(o),
    xc(o),
    hc(o),
    Sc(o),
    vc(o),
    $c(o),
    Fc(o),
    wc(o),
    Mc(o),
    Ac(o),
    Oc(),
    Rc(o),
    Ec(),
    Hc(o),
    Wc(),
    Tc(),
    zc(o),
    mc()
  );
}
const Dc = {
  palette: bc,
  typography: yc,
  componentsOverride: Ic
}, Uc = 1.5, u = 7.5, U = 15, Nc = 30, no = "#AC729C", mo = "#C8316C", Jr = "#FF4D75", Qr = "#FFE7CE", Vr = "#D9DEEC", Xr = "#D41442", Zr = "#BD8AAD", qo = {
  lighter: r(no).lighten(Uc).toHexString(),
  main: no,
  light: r(no).lighten(u).toHexString(),
  dark: r(no).darken(U).toHexString(),
  darker: r(no).darken(Nc).toHexString(),
  contrastText: "#fff"
}, Pc = {
  lighter: "#D6E4FF",
  main: mo,
  light: r(mo).lighten(u).toHexString(),
  dark: r(mo).darken(U).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, So = {
  lighter: "#F8F1FC",
  main: Vr,
  light: r(Vr).lighten(u).toHexString(),
  dark: r(Vr).darken(U).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, ae = {
  lighter: "#E9FCD4",
  main: Qr,
  light: r(Qr).lighten(u).toHexString(),
  dark: r(Qr).darken(U).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, le = {
  lighter: "#FFF7CD",
  main: Jr,
  light: r(Jr).lighten(u).toHexString(),
  dark: r(Jr).darken(U).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, de = {
  lighter: "#FFE7D9",
  main: Xr,
  light: r(Xr).lighten(u).toHexString(),
  dark: r(Xr).darken(U).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Lc = {
  primary: i(qo.light, qo.main),
  info: i(So.light, So.main),
  success: i(ae.light, ae.main),
  warning: i(le.light, le.main),
  error: i(de.light, de.main),
  one: "#AC729C",
  two: "#734464"
}, Gc = {
  hero: Zr,
  primary: { ...qo },
  secondary: { ...Pc },
  info: { ...So },
  success: { ...ae },
  warning: { ...le },
  error: { ...de },
  grey: t,
  gradients: Lc,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#ECECEC",
    error: "#ECECEC",
    info: "#F8F1FC",
    infoGadient: i(So.light, So.main),
    success: "#FFEED6"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabledBackground: "#85CCCA",
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: Zr,
    toggle2: r(Zr).lighten(u).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: qo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#414D4C",
    colorLeft: "#AC729C",
    colorHover: "#744164",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #AC729C 3.01%, #734464 95.95%)",
    shadow: `0px 1px 4px ${r(mo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F9F1FC",
    two: "#FEF0F5"
  },
  shadows: {
    card: "0px 2px 35px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Yc = "Avenir Next Cyr", _c = {
  fontFamily: Yc,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function jc(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Kc(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function qc(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Jc(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Qc(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Vc(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Xc(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Zc(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function og(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function rg(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function tg(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function eg(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.hero
          }
        }
      }
    }
  };
}
function ng() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function ig(o) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: o.palette.primary.main
        },
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function ag() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function lg(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function dg() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function cg() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function gg(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function sg() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function ug(o) {
  return Object.assign(
    tg(o),
    jc(o),
    qc(o),
    Kc(o),
    Jc(o),
    Qc(o),
    Vc(o),
    Xc(o),
    Zc(o),
    og(o),
    rg(o),
    eg(o),
    ng(),
    ig(o),
    ag(),
    lg(o),
    dg(),
    cg(),
    gg(o),
    sg()
  );
}
const pg = {
  palette: Gc,
  typography: _c,
  componentsOverride: ug
}, bg = 1.5, p = 7.5, N = 15, fg = 30, io = "#204568", Io = "#4A6F93", ot = "#C76277", rt = "#5CAA7F", tt = "#BCC3D2", et = "#C76277", nt = "#426A90", Jo = {
  lighter: r(io).lighten(bg).toHexString(),
  main: io,
  light: r(io).lighten(p).toHexString(),
  dark: r(io).darken(N).toHexString(),
  darker: r(io).darken(fg).toHexString(),
  contrastText: "#fff"
}, it = {
  lighter: "#F6F4F0",
  main: Io,
  light: r(Io).lighten(p).toHexString(),
  dark: r(Io).darken(N).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, ce = {
  lighter: "#F6F4F0",
  main: tt,
  light: r(tt).lighten(p).toHexString(),
  dark: r(tt).darken(N).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, ge = {
  lighter: "#F6F4F0",
  main: rt,
  light: r(rt).lighten(p).toHexString(),
  dark: r(rt).darken(N).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, se = {
  lighter: "#FEF1F0",
  main: ot,
  light: r(ot).lighten(p).toHexString(),
  dark: r(ot).darken(N).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, ue = {
  lighter: "#FEF1F0",
  main: et,
  light: r(et).lighten(p).toHexString(),
  dark: r(et).darken(N).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, yg = {
  primary: i(Jo.light, Jo.main),
  info: i(ce.light, ce.main),
  success: i(ge.light, ge.main),
  warning: i(se.light, se.main),
  error: i(ue.light, ue.main),
  one: "#073D5F",
  two: "#022D47"
}, kg = {
  hero: nt,
  primary: { ...Jo },
  secondary: { ...it },
  info: { ...ce },
  success: { ...ge },
  warning: { ...se },
  error: { ...ue },
  grey: t,
  gradients: yg,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#EDF7FC",
    infoGadient: i(it.light, it.lighter),
    success: "#D9EFE2"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabledBackground: "#F7F7F8",
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: nt,
    toggle2: r(nt).lighten(p).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: Jo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#939FAE",
    colorLeft: "#426A90",
    colorHover: "#4A6F93",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #073D5F 3.01%, #022D47 95.95%)",
    shadow: `0px 1px 4px ${r(Io).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#E8F2F5",
    two: "#FEF1F0"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, xg = "Avenir Next Cyr", Cg = {
  fontFamily: xg,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function hg(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Sg(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function vg(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.primary.light, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.main,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function $g(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.secondary.main,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Fg(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function wg(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Mg(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Bg(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function Ag(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Og(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Rg(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Eg(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.hero
          }
        }
      }
    }
  };
}
function Hg() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Wg(o) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: o.palette.primary.main
        },
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Tg() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function zg(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function mg() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Ig() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function Dg(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Ug() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function Ng(o) {
  return Object.assign(
    Rg(o),
    hg(o),
    vg(o),
    Sg(o),
    $g(o),
    Fg(o),
    wg(o),
    Mg(o),
    Bg(o),
    Ag(o),
    Og(o),
    Eg(o),
    Hg(),
    Wg(o),
    Tg(),
    zg(o),
    mg(),
    Ig(),
    Dg(o),
    Ug()
  );
}
const Pg = {
  palette: kg,
  typography: Cg,
  componentsOverride: Ng
}, Lg = 1.5, P = 7.5, L = 15, Gg = 30, ao = "#D81440", Do = "#BE697C", at = "#F57069", lt = "#34DFA2", dt = "#FFEED6", ct = "#f44336", Yg = "#D81440", Qo = {
  lighter: r(ao).lighten(Lg).toHexString(),
  main: ao,
  light: r(ao).lighten(P).toHexString(),
  dark: r(ao).darken(L).toHexString(),
  darker: r(ao).darken(Gg).toHexString(),
  contrastText: "#fff"
}, _g = {
  lighter: "#FCF1F1",
  main: Do,
  light: r(Do).lighten(P).toHexString(),
  dark: r(Do).darken(L).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, vo = {
  lighter: "#ECECEC",
  main: dt,
  light: r(dt).lighten(P).toHexString(),
  dark: r(dt).darken(L).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, pe = {
  lighter: "##FFEED6",
  main: lt,
  light: r(lt).lighten(P).toHexString(),
  dark: r(lt).darken(L).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, be = {
  lighter: "#E3F8D2",
  main: at,
  light: r(at).lighten(P).toHexString(),
  dark: r(at).darken(L).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, fe = {
  lighter: "#FFE7D9",
  main: ct,
  light: r(ct).lighten(P).toHexString(),
  dark: r(ct).darken(L).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, jg = {
  primary: i(Qo.light, Qo.main),
  info: i(vo.light, vo.main),
  success: i(pe.light, pe.main),
  warning: i(be.light, be.main),
  error: i(fe.light, fe.main),
  one: "#D81440",
  two: "#C41139"
}, Kg = {
  hero: Yg,
  primary: { ...Qo },
  secondary: { ..._g },
  info: { ...vo },
  success: { ...pe },
  warning: { ...be },
  error: { ...fe },
  grey: t,
  gradients: jg,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#F8E5E3",
    error: "##F5D7D7",
    info: "#FCF1F1",
    infoGadient: i(vo.lighter, vo.light),
    success: "#E3F8D2"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#BE697C",
    toggle2: "#D81440",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: Qo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#808080",
    colorLeft: "#808080",
    colorHover: "#D81440",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #D81440 3.01%, #C41139 95.95%)",
    shadow: `0px 1px 4px ${r(Do).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#FCF1F1",
    two: "#FEF1F0"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, qg = "Avenir Next Cyr", Jg = {
  fontFamily: qg,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  // overline: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Qg(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Vg(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Xg(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.dark,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Zg(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.secondary.main,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function os(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function rs(o) {
  const a = e(o.palette.grey[900], 0.6), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function ts(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function es(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function ns(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function is(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function as(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function ls(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function ds() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function cs(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function gs() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function ss(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function us() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function ps() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function bs(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function fs() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function ys(o) {
  return Object.assign(
    as(o),
    Qg(o),
    Xg(o),
    Vg(o),
    Zg(o),
    os(o),
    rs(o),
    ts(o),
    es(o),
    ns(o),
    is(o),
    ls(o),
    ds(),
    cs(o),
    gs(),
    ss(o),
    us(),
    ps(),
    bs(o),
    fs()
  );
}
const ks = {
  palette: Kg,
  typography: Jg,
  componentsOverride: ys
}, xs = 1.5, G = 7.5, Y = 15, Cs = 30, lo = "#0E2F76", Uo = "#5D9ED1", gt = "#FF9690", st = "#4DAE00", ut = "#398CB0", pt = "#FF4D75", hs = "#0E2F76", Vo = {
  lighter: r(lo).lighten(xs).toHexString(),
  main: lo,
  light: r(lo).lighten(G).toHexString(),
  dark: r(lo).darken(Y).toHexString(),
  darker: r(lo).darken(Cs).toHexString(),
  contrastText: "#fff"
}, Ss = {
  lighter: "#5D9ED1",
  main: Uo,
  light: r(Uo).lighten(G).toHexString(),
  dark: r(Uo).darken(Y).toHexString(),
  contrastText: "#D0F2FF",
  darker: "#827657"
}, $o = {
  lighter: "#D0F2FF",
  main: ut,
  light: r(ut).lighten(G).toHexString(),
  dark: r(ut).darken(Y).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, ye = {
  lighter: "#E9FCD4",
  main: st,
  light: r(st).lighten(G).toHexString(),
  dark: r(st).darken(Y).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, ke = {
  lighter: "#FFF7CD",
  main: gt,
  light: r(gt).lighten(G).toHexString(),
  dark: r(gt).darken(Y).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, xe = {
  lighter: "#FFE7D9",
  main: pt,
  light: r(pt).lighten(G).toHexString(),
  dark: r(pt).darken(Y).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, vs = {
  primary: i(Vo.light, Vo.main),
  info: i($o.light, $o.main),
  success: i(ye.light, ye.main),
  warning: i(ke.light, ke.main),
  error: i(xe.light, xe.main),
  one: "#B5A788",
  two: "#AA9161"
}, $s = {
  hero: hs,
  primary: { ...Vo },
  secondary: { ...Ss },
  info: { ...$o },
  success: { ...ye },
  warning: { ...ke },
  error: { ...xe },
  grey: t,
  gradients: vs,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#F7F7F8",
    error: "#D9DEEC",
    info: "#F1F4FC",
    infoGadient: i($o.lighter, $o.light),
    success: "#FFEED6"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#5D9ED1",
    toggle2: "#5F79AE",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: Vo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#0B2660",
    colorHover: "#5D9ED1",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: " linear-gradient(139.78deg, #0E2F76 3.01%, #0B2660 95.95%)",
    shadow: `0px 1px 4px ${r(Uo).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1F4FC",
    two: "#F1FCF9"
  },
  shadows: {
    card: "0px 8px 24px 0px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Fs = "Avenir Next Cyr", ws = {
  fontFamily: Fs,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  // overline: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Ms(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Bs(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function As(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.main,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Os(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.secondary.main,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.info.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.info.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function Rs(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Es(o) {
  const a = e(o.palette.grey[900], 0.6), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Hs(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function Ws(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
      `
    }
  };
}
function Ts(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function zs(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function ms(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `background: linear-gradient(139.78deg, ${o.palette.primary.main} 3.01%, #0B2660 95.95%)`
        }
      }
    }
  };
}
function Is(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Ds() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Us(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Ns() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Ps(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Ls() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function Gs() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function Ys(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function _s() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: (
              //'linear-gradient(120deg,transparent,rgba(145, 158, 171, 0.5),transparent) '
              "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%)"
            )
          }
        }
      }
    }
  };
}
function js(o) {
  return Object.assign(
    ms(o),
    Ms(o),
    As(o),
    Bs(o),
    Os(o),
    Rs(o),
    Es(o),
    Hs(o),
    Ws(o),
    Ts(o),
    zs(o),
    Is(o),
    Ds(),
    Us(o),
    Ns(),
    Ps(o),
    Ls(),
    Gs(),
    Ys(o),
    _s()
  );
}
const Ks = {
  palette: $s,
  typography: ws,
  componentsOverride: js
}, qs = 1.5, b = 7.5, _ = 15, Js = 30, co = "#204568", No = "#4A6F93", bt = "#C76277", ft = "#5CAA7F", yt = "#BCC3D2", kt = "#C76277", xt = "#426A90", Xo = {
  lighter: r(co).lighten(qs).toHexString(),
  main: co,
  light: r(co).lighten(b).toHexString(),
  dark: r(co).darken(_).toHexString(),
  darker: r(co).darken(Js).toHexString(),
  contrastText: "#fff"
}, Ct = {
  lighter: "#F6F4F0",
  main: No,
  light: r(No).lighten(b).toHexString(),
  dark: r(No).darken(_).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, Ce = {
  lighter: "#F6F4F0",
  main: yt,
  light: r(yt).lighten(b).toHexString(),
  dark: r(yt).darken(_).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, he = {
  lighter: "#F6F4F0",
  main: ft,
  light: r(ft).lighten(b).toHexString(),
  dark: r(ft).darken(_).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Se = {
  lighter: "#FEF1F0",
  main: bt,
  light: r(bt).lighten(b).toHexString(),
  dark: r(bt).darken(_).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, ve = {
  lighter: "#FEF1F0",
  main: kt,
  light: r(kt).lighten(b).toHexString(),
  dark: r(kt).darken(_).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Qs = {
  primary: i(Xo.light, Xo.main),
  info: i(Ce.light, Ce.main),
  success: i(he.light, he.main),
  warning: i(Se.light, Se.main),
  error: i(ve.light, ve.main),
  one: "#073D5F",
  two: "#022D47"
}, Vs = {
  hero: xt,
  primary: { ...Xo },
  secondary: { ...Ct },
  info: { ...Ce },
  success: { ...he },
  warning: { ...Se },
  error: { ...ve },
  grey: t,
  gradients: Qs,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#EDF7FC",
    infoGadient: i(Ct.light, Ct.lighter),
    success: "#D9EFE2"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabledBackground: "#F7F7F8",
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: xt,
    toggle2: r(xt).lighten(b).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: Xo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#939FAE",
    colorLeft: "#426A90",
    colorHover: "#4A6F93",
    colorActive: "#000000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #073D5F 3.01%, #022D47 95.95%)",
    shadow: `0px 1px 4px ${r(No).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#E8F2F5",
    two: "#FEF1F0"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Xs = "Avenir Next Cyr", Zs = {
  fontFamily: Xs,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function ou(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function ru(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function tu(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(o.palette.primary.light, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.main,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function eu(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0,
            background: "transparent"
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.secondary.main,
          background: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
function nu(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function iu(o) {
  const a = e(o.palette.grey[900], 0.3), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function au(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function lu(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function du(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function cu(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function gu(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${o.palette.gradients.one} 3.01%, ${o.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function su(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.hero
          }
        }
      }
    }
  };
}
function uu() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function pu(o) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: o.palette.primary.main
        },
        root: {
          color: o.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function bu() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function fu(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function yu() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function ku() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function xu(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Cu() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function hu(o) {
  return Object.assign(
    gu(o),
    ou(o),
    tu(o),
    ru(o),
    eu(o),
    nu(o),
    iu(o),
    au(o),
    lu(o),
    du(o),
    cu(o),
    su(o),
    uu(),
    pu(o),
    bu(),
    fu(o),
    yu(),
    ku(),
    xu(o),
    Cu()
  );
}
const Su = {
  palette: Vs,
  typography: Zs,
  componentsOverride: hu
}, j = 7.5, K = 15, Oe = 30, go = "#FF7009", ht = "#434343", St = "#FF0D00", vt = "#FFEED6", $t = "#DBB091", Ft = "#C8316C", vu = "#FF7009", Zo = {
  lighter: "#FFDEC8",
  main: go,
  light: r(go).lighten(j).toHexString(),
  dark: r(go).darken(K).toHexString(),
  darker: r(go).darken(Oe).toHexString(),
  contrastText: "#fff"
}, $u = {
  lighter: "#D6E4FF",
  main: ht,
  light: r(ht).lighten(j).toHexString(),
  dark: r(ht).darken(K).toHexString(),
  darker: r(go).darken(Oe).toHexString(),
  contrastText: "#ccc"
}, Fo = {
  lighter: "#D0F2FF",
  main: $t,
  light: r($t).lighten(j).toHexString(),
  dark: r($t).darken(K).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, $e = {
  lighter: "#E9FCD4",
  main: vt,
  light: r(vt).lighten(j).toHexString(),
  dark: r(vt).darken(K).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Fe = {
  lighter: "#FFF7CD",
  main: St,
  light: r(St).lighten(j).toHexString(),
  dark: r(St).darken(K).toHexString(),
  darker: "#7A4F01",
  contrastText: t[800]
}, we = {
  lighter: "#FFE7D9",
  main: Ft,
  light: r(Ft).lighten(j).toHexString(),
  dark: r(Ft).darken(K).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Fu = {
  primary: i(Zo.light, Zo.main),
  info: i(Fo.light, Fo.main),
  success: i($e.light, $e.main),
  warning: i(Fe.light, Fe.main),
  error: i(we.light, we.main),
  one: "#FF7009",
  two: "#E66305"
}, wu = {
  hero: vu,
  primary: { ...Zo },
  secondary: { ...$u },
  info: { ...Fo },
  success: { ...$e },
  warning: { ...Fe },
  error: { ...we },
  grey: t,
  gradients: Fu,
  divider: t[50024],
  text: {
    primary: t[800],
    secondary: t[600],
    boby2: t[600],
    subtitle2: t[50080],
    disabled: t[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: t[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#FFF0E6",
    infoGadient: i(Fo.lighter, Fo.light),
    success: "#FCF3ED"
  },
  action: {
    active: t[600],
    hover: t[5008],
    selected: t[50016],
    disabled: t[50080],
    disabledBackground: t[50024],
    focus: t[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#FC8737",
    toggle2: "#FF7009",
    toggle3: "#EDEDED",
    toggle4: "#fff"
  },
  appBar: {
    background: Zo.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#848281",
    colorLeft: "#848281",
    colorHover: "#FF7009",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #FF7009 3.01%, #E66305 95.95%);",
    shadow: "0px 4px 15px 0px rgba(35, 40, 48, 0.08)"
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#FFF0E6"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Mu = "Avenir Next Cyr", Bu = {
  fontFamily: Mu,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: n(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: n(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: n(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: n(12)
  },
  // overline: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: n(14)
    //    textTransform: 'capitalize',
  }
};
function Au(o) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: o.palette.shadows.card,
          borderRadius: o.spacing(1)
        }
      }
    }
  };
}
function Ou(o) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: o.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Ru(o) {
  return {
    ...d && {
      MuiTextField: {
        defaultProps: {
          slotProps: {
            inputLabel: { shrink: !0 }
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: e(o.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(o.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: o.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: o.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(o.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: o.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: o.palette.primary.lighter
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(o.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: o.palette.primary.main,
            // root border color
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderWidth: 2
          }
        }
      }
    }
  };
}
function Eu(o) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0
          },
          "&.Mui-disabled": {
            background: `${o.palette.baseButton.bgColor} !important`,
            opacity: o.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: o.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: o.palette.baseButton.bgColor,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: o.palette.hero,
          background: o.palette.bgLight.two,
          // boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: o.palette.bgLight.one,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: o.palette.primary.main,
          backgroundColor: o.palette.bgLight.one,
          boxShadow: o.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: o.palette.bgLight.two,
            color: o.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: o.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: o.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: o.palette.primary.dark,
          backgroundColor: o.palette.success.light,
          "&:hover": {
            color: o.palette.primary.darker,
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: o.palette.success.main,
          "&:hover": {
            backgroundColor: o.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: o.palette.warning.main,
          "&:hover": {
            backgroundColor: o.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: o.palette.info.main,
          "&:hover": {
            backgroundColor: o.palette.info.light,
            boxShadow: "none"
          }
        },
        textPrimary: {
          "&:hover": {
            background: "transparent",
            color: o.palette.primary.dark
          }
        }
      }
    }
  };
}
function Hu(o) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: o.palette.grey[800]
        },
        arrow: {
          color: o.palette.grey[800]
        }
      }
    }
  };
}
function Wu(o) {
  const a = e(o.palette.grey[900], 0.92), l = e(o.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `-webkit-linear-gradient(75deg, ${a} 0%, ${l} 100%)`,
            `linear-gradient(75deg, ${a} 0%, ${l} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Tu(o) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: o.spacing(2)
        },
        gutterBottom: {
          marginBottom: o.spacing(2)
        },
        body2: {
          color: o.palette.text.boby2
        },
        h3: {
          color: o.palette.text.primary
        },
        h4: {
          color: o.palette.text.primary
        },
        h5: {
          color: o.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: o.palette.text.subtitle2
        }
      }
    }
  };
}
function zu(o) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${o.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}
function mu(o) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: o.palette.shadows.card
        }
      }
    }
  };
}
function Iu(o) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${o.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: o.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: o.palette.action.toggle2,
          background: o.palette.action.toggle3,
          boxShadow: o.palette.shadows.card,
          "&:hover": {
            color: o.palette.action.toggle4,
            background: `${o.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: o.palette.action.toggle4,
            backgroundColor: o.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Du(o) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(139.78deg, #FF7009 3.01%, #E66305 95.95%)"
        }
      }
    }
  };
}
function Uu(o) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Nu() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          backgroundColor: "transparent"
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}
function Pu(o) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: o.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Lu() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
        }
      }
    }
  };
}
function Gu(o) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${o.spacing(2)} ${o.spacing(2)} ${o.spacing(1.5)}`,
          borderRadius: o.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: o.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: o.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${o.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: o.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${o.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: o.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${o.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: o.palette.background.success,
          "& .MuiAlert-icon": {
            color: o.palette.primary.main
          }
        }
      }
    }
  };
}
function Yu() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    }
  };
}
function _u() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: "#fff",
          fontWeight: 500
        }
      }
    }
  };
}
function ju(o) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: o.palette.primary.light,
          "&.Mui-selected": {
            color: o.palette.text.primary
          }
        }
      }
    }
  };
}
function Ku() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          "&::after": {
            background: "linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) "
          }
        }
      }
    }
  };
}
function qu(o) {
  return Object.assign(
    Du(),
    Au(o),
    Ru(o),
    Ou(o),
    Eu(o),
    Hu(o),
    Wu(o),
    Tu(o),
    zu(o),
    mu(o),
    Iu(o),
    Uu(o),
    Nu(),
    Pu(o),
    Lu(),
    Gu(o),
    Yu(),
    _u(),
    ju(o),
    Ku()
  );
}
const Ju = {
  palette: wu,
  typography: Bu,
  componentsOverride: qu
};
function Qu(o) {
  return o === "drAnna" ? Nn : o === "gms" ? yi : o === "medincenter" ? _i : o === "medswiss" ? Sa : o === "mediadoc" ? Va : o === "minfin" ? Bl : o === "pimu" ? ed : o === "ncn" ? Wd : o === "sibgmu" ? dc : o === "mositalmed" ? Dc : o === "skyfert" ? pg : o === "white_fang" ? Pg : o === "kalinchenko" ? ks : o === "celt" ? Ks : o === "vetcenter" ? Su : o === "sm" ? Ju : un;
}
const Vu = (o) => {
  const { palette: a, typography: l, componentsOverride: or } = Qu(o), rr = ze({ palette: a, typography: l });
  return rr.components = or(rr), rr;
};
function np({
  children: o,
  name: a,
  theme: l
}) {
  const or = Ee(
    () => a || !l ? Vu(a) : l,
    [a, l]
  );
  return /* @__PURE__ */ Me(We, { injectFirst: !0, children: /* @__PURE__ */ Re(Te, { theme: or, children: [
    /* @__PURE__ */ Me(He, {}),
    o
  ] }) });
}
export {
  np as default
};
//# sourceMappingURL=index.es.map
