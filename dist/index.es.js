import { jsx as Fe, jsxs as Se } from "react/jsx-runtime";
import { useMemo as Me } from "react";
import { alpha as y, CssBaseline as Ae } from "@mui/material";
import { alpha as e, StyledEngineProvider as Oe, ThemeProvider as Be, createTheme as we } from "@mui/material/styles";
import t from "tinycolor2";
function l(r, i) {
  return `linear-gradient(to bottom, ${r}, ${i})`;
}
function a(r) {
  return `${r / 16}rem`;
}
const o = {
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
  5008: y("#919EAB", 0.08),
  50012: y("#919EAB", 0.12),
  50016: y("#919EAB", 0.16),
  50024: y("#919EAB", 0.24),
  50032: y("#919EAB", 0.32),
  50048: y("#919EAB", 0.48),
  50056: y("#919EAB", 0.56),
  50080: y("#919EAB", 0.8)
}, f = 1.5, n = 7.5, d = 15, s = 30, $ = "#0E2F76", or = "#5D9ED1", Tr = "#FF9690", Dr = "#4DAE00", Ir = "#398CB0", Ur = "#FF4D75", Ee = "#0E2F76", vr = {
  lighter: t($).lighten(f).toHexString(),
  main: $,
  light: t($).lighten(n).toHexString(),
  dark: t($).darken(d).toHexString(),
  darker: t($).darken(s).toHexString(),
  contrastText: "#fff"
}, Re = {
  lighter: "#5D9ED1",
  main: or,
  light: t(or).lighten(n).toHexString(),
  dark: t(or).darken(d).toHexString(),
  contrastText: "#D0F2FF",
  darker: "#827657"
}, N = {
  lighter: "#D0F2FF",
  main: Ir,
  light: t(Ir).lighten(n).toHexString(),
  dark: t(Ir).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, fo = {
  lighter: "#E9FCD4",
  main: Dr,
  light: t(Dr).lighten(n).toHexString(),
  dark: t(Dr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, bo = {
  lighter: "#FFF7CD",
  main: Tr,
  light: t(Tr).lighten(n).toHexString(),
  dark: t(Tr).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, yo = {
  lighter: "#FFE7D9",
  main: Ur,
  light: t(Ur).lighten(n).toHexString(),
  dark: t(Ur).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, He = {
  primary: l(vr.light, vr.main),
  info: l(N.light, N.main),
  success: l(fo.light, fo.main),
  warning: l(bo.light, bo.main),
  error: l(yo.light, yo.main),
  one: "#B5A788",
  two: "#AA9161"
}, me = {
  hero: Ee,
  primary: { ...vr },
  secondary: { ...Re },
  info: { ...N },
  success: { ...fo },
  warning: { ...bo },
  error: { ...yo },
  grey: o,
  gradients: He,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#F7F7F8",
    error: "#D9DEEC",
    info: "#F1F4FC",
    infoGadient: l(N.lighter, N.light),
    success: "#FFEED6"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#5D9ED1",
    toggle2: "#5F79AE",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: vr.main,
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
    shadow: `0px 1px 4px ${t(or).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1F4FC",
    two: "#F1FCF9"
  },
  shadows: {
    card: "0px 8px 24px 0px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, We = "Avenir Next Cyr", ze = {
  fontFamily: We,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
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
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Te(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function De(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
const u = typeof navigator < "u" && (() => {
  const r = navigator.userAgent, i = /iP(hone|ad|od)/i.test(r), g = /^((?!chrome|crios|android|fxios|edg).)*safari/i.test(r);
  return i || g;
})();
function Ie(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.main,
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
function p(r) {
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
            background: `${r.palette.baseButton.bgColor} !important`,
            opacity: r.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: r.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: r.palette.baseButton.bgColor,
          boxShadow: r.palette.baseButton.shadow,
          "&:hover": {
            background: r.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: r.palette.hero,
          background: r.palette.bgLight.one,
          boxShadow: r.palette.baseButton.shadow,
          "&:hover": {
            background: r.palette.bgLight.two,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: r.palette.primary.main,
          backgroundColor: r.palette.bgLight.one,
          boxShadow: r.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: r.palette.bgLight.two,
            color: r.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: r.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: r.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: r.palette.primary.dark,
          backgroundColor: r.palette.success.light,
          "&:hover": {
            color: r.palette.primary.darker,
            backgroundColor: r.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: r.palette.success.main,
          "&:hover": {
            backgroundColor: r.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: r.palette.warning.main,
          "&:hover": {
            backgroundColor: r.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: r.palette.info.main,
          "&:hover": {
            backgroundColor: r.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}
const b = (r) => typeof r == "object" && r !== null ? r : {};
function Ue(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.secondary.main,
    background: r.palette.bgLight.one,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.two,
      boxShadow: "none"
    }
  }, c.outlinedInfo = {
    ...b(c.outlinedInfo),
    color: r.palette.info.main,
    backgroundColor: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: r.palette.info.dark
    }
  }, i;
}
function Ne(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Pe(r) {
  const i = e(r.palette.grey[900], 0.6), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Le(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Ge(r) {
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
          background-color:${r.palette.background.default};
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
function Ye(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function _e(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function je(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `background: linear-gradient(139.78deg, ${r.palette.primary.main} 3.01%, #0B2660 95.95%)`
        }
      }
    }
  };
}
function Ke(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function qe() {
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
function Je(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Qe() {
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
function Ve(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Xe() {
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
function Ze() {
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
function rn(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function tn() {
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
function on(r) {
  return Object.assign(
    je(r),
    Te(r),
    Ie(r),
    De(r),
    Ue(r),
    Ne(r),
    Pe(r),
    Le(r),
    Ge(r),
    Ye(r),
    _e(r),
    Ke(r),
    qe(),
    Je(r),
    Qe(),
    Ve(r),
    Xe(),
    Ze(),
    rn(r),
    tn()
  );
}
const en = {
  palette: me,
  typography: ze,
  componentsOverride: on
}, S = "#E61565", er = "#28B7C6", Nr = "#FF9690", Pr = "#F2D0B2", Lr = "#FF9690", nn = "#E31363", Gr = "#f44336", xo = {
  lighter: t(S).lighten(f).toHexString(),
  main: S,
  light: t(S).lighten(n).toHexString(),
  dark: t(S).darken(d).toHexString(),
  darker: t(S).darken(s).toHexString(),
  contrastText: "#fff"
}, Yr = {
  lighter: "#D6E4FF",
  main: er,
  light: t(er).lighten(n).toHexString(),
  dark: t(er).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, P = {
  lighter: "#D0F2FF",
  main: Lr,
  light: t(Lr).lighten(n).toHexString(),
  dark: t(Lr).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, ko = {
  lighter: "#E9FCD4",
  main: Pr,
  light: t(Pr).lighten(n).toHexString(),
  dark: t(Pr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, ho = {
  lighter: "#FFF7CD",
  main: Nr,
  light: t(Nr).lighten(n).toHexString(),
  dark: t(Nr).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, vo = {
  lighter: "#FFE7D9",
  main: Gr,
  light: t(Gr).lighten(n).toHexString(),
  dark: t(Gr).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, an = {
  primary: l(xo.light, xo.main),
  info: l(P.light, P.main),
  success: l(ko.light, ko.main),
  warning: l(ho.light, ho.main),
  error: l(vo.light, vo.main),
  one: "#49545d",
  two: "#3F4A52"
}, $e = {
  hero: nn,
  primary: { ...xo },
  secondary: { ...Yr },
  info: { ...P },
  success: { ...ko },
  warning: { ...ho },
  error: { ...vo },
  grey: o,
  gradients: an,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: l(P.lighter, P.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#E61565",
    toggle2: "#28B7C6",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: "#fff",
    iconColor: Yr.main,
    color: Yr.dark
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
    shadow: `0px 1px 4px ${t(er).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#E8F5F6",
    two: "#C1EFF4"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, ln = "Avenir Next Cyr", dn = {
  fontFamily: ln,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function gn(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function cn(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function sn(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.hero,
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
function un(r) {
  return p(r);
}
function pn(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function fn(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function bn(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function yn(r) {
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
          background-color:${r.palette.background.default};
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
function xn(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function kn(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function hn(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          //background: `linear-gradient(177.31deg, ${theme.palette.gradients.one} 3.01%, ${theme.palette.gradients.two} 95.95%)`,
          background: $e.appBar.background
        }
      }
    }
  };
}
function vn(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: `${r.palette.secondary.main} !important`
          }
        }
      }
    }
  };
}
function Cn() {
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
function Fn(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function $n() {
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
function Sn(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Mn() {
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
function An() {
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
function On(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Bn() {
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
function wn(r) {
  return Object.assign(
    hn(),
    gn(r),
    sn(r),
    cn(r),
    un(r),
    pn(r),
    fn(r),
    bn(r),
    yn(r),
    xn(r),
    kn(r),
    vn(r),
    Cn(),
    Fn(r),
    $n(),
    Sn(r),
    Mn(),
    An(),
    On(r),
    Bn()
  );
}
const En = {
  palette: $e,
  typography: dn,
  componentsOverride: wn
}, M = "#EA9D00", nr = "#559BDC", _r = "#FF4D75", jr = "#34DFA2", Kr = "#FF9690", qr = "#FF4D75", Rn = "#004D8F", Cr = {
  lighter: t(M).lighten(f).toHexString(),
  main: M,
  light: t(M).lighten(n).toHexString(),
  dark: t(M).darken(d).toHexString(),
  darker: t(M).darken(s).toHexString(),
  contrastText: "#fff"
}, Hn = {
  lighter: "#D6E4FF",
  main: nr,
  light: t(nr).lighten(n).toHexString(),
  dark: t(nr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, L = {
  lighter: "#D0F2FF",
  main: Kr,
  light: t(Kr).lighten(n).toHexString(),
  dark: t(Kr).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Co = {
  lighter: "#E9FCD4",
  main: jr,
  light: t(jr).lighten(n).toHexString(),
  dark: t(jr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Fo = {
  lighter: "#FFF7CD",
  main: _r,
  light: t(_r).lighten(n).toHexString(),
  dark: t(_r).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, $o = {
  lighter: "#FFE7D9",
  main: qr,
  light: t(qr).lighten(n).toHexString(),
  dark: t(qr).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, mn = {
  primary: l(Cr.light, Cr.main),
  info: l(L.light, L.main),
  success: l(Co.light, Co.main),
  warning: l(Fo.light, Fo.main),
  error: l($o.light, $o.main),
  one: "#EDAA21",
  two: "#EB9D02"
}, Wn = {
  hero: Rn,
  primary: { ...Cr },
  secondary: { ...Hn },
  info: { ...L },
  success: { ...Co },
  warning: { ...Fo },
  error: { ...$o },
  grey: o,
  gradients: mn,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: l(L.lighter, L.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#004D8F",
    toggle2: "#004D8F",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: Cr.main,
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
    shadow: `0px 1px 4px ${t(nr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#efefef",
    two: "#f3f3f3"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, zn = "Avenir Next Cyr", Tn = {
  fontFamily: zn,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Dn(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function In(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Un(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.hero,
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
function Nn(r) {
  return p(r);
}
function Pn(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Ln(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Gn(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Yn(r) {
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
          background-color:${r.palette.background.default};
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
function _n(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function jn(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Kn(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function qn(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Jn() {
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
function Qn(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Vn() {
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
function Xn(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Zn() {
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
function ri() {
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
function ti(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function oi() {
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
function ei(r) {
  return Object.assign(
    Kn(r),
    Dn(r),
    Un(r),
    In(r),
    Nn(r),
    Pn(r),
    Ln(r),
    Gn(r),
    Yn(r),
    _n(r),
    jn(r),
    qn(r),
    Jn(),
    Qn(r),
    Vn(),
    Xn(r),
    Zn(),
    ri(),
    ti(r),
    oi()
  );
}
const ni = {
  palette: Wn,
  typography: Tn,
  componentsOverride: ei
}, A = "#D81440", ir = "#BE697C", Jr = "#F57069", Qr = "#34DFA2", Vr = "#FFEED6", Xr = "#f44336", ii = "#D81440", Fr = {
  lighter: t(A).lighten(f).toHexString(),
  main: A,
  light: t(A).lighten(n).toHexString(),
  dark: t(A).darken(d).toHexString(),
  darker: t(A).darken(s).toHexString(),
  contrastText: "#fff"
}, ai = {
  lighter: "#FCF1F1",
  main: ir,
  light: t(ir).lighten(n).toHexString(),
  dark: t(ir).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, G = {
  lighter: "#ECECEC",
  main: Vr,
  light: t(Vr).lighten(n).toHexString(),
  dark: t(Vr).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, So = {
  lighter: "##FFEED6",
  main: Qr,
  light: t(Qr).lighten(n).toHexString(),
  dark: t(Qr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Mo = {
  lighter: "#E3F8D2",
  main: Jr,
  light: t(Jr).lighten(n).toHexString(),
  dark: t(Jr).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, Ao = {
  lighter: "#FFE7D9",
  main: Xr,
  light: t(Xr).lighten(n).toHexString(),
  dark: t(Xr).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, li = {
  primary: l(Fr.light, Fr.main),
  info: l(G.light, G.main),
  success: l(So.light, So.main),
  warning: l(Mo.light, Mo.main),
  error: l(Ao.light, Ao.main),
  one: "#D81440",
  two: "#C41139"
}, di = {
  hero: ii,
  primary: { ...Fr },
  secondary: { ...ai },
  info: { ...G },
  success: { ...So },
  warning: { ...Mo },
  error: { ...Ao },
  grey: o,
  gradients: li,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#F8E5E3",
    error: "##F5D7D7",
    info: "#FCF1F1",
    infoGadient: l(G.lighter, G.light),
    success: "#E3F8D2"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#BE697C",
    toggle2: "#D81440",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  appBar: {
    background: Fr.main,
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
    shadow: `0px 1px 4px ${t(ir).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#FCF1F1",
    two: "#FEF1F0"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, gi = "Avenir Next Cyr", ci = {
  fontFamily: gi,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
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
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function si(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function ui(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function pi(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function fi(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.secondary.main,
    background: r.palette.bgLight.one,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.two,
      boxShadow: "none"
    }
  }, i;
}
function bi(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function yi(r) {
  const i = e(r.palette.grey[900], 0.6), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function xi(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function ki(r) {
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
          background-color:${r.palette.background.default};
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
function hi(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function vi(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Ci(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Fi(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function $i() {
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
function Si(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Mi() {
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
function Ai(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Oi() {
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
function Bi() {
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
function wi(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Ei() {
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
function Ri(r) {
  return Object.assign(
    Ci(r),
    si(r),
    pi(r),
    ui(r),
    fi(r),
    bi(r),
    yi(r),
    xi(r),
    ki(r),
    hi(r),
    vi(r),
    Fi(r),
    $i(),
    Si(r),
    Mi(),
    Ai(r),
    Oi(),
    Bi(),
    wi(r),
    Ei()
  );
}
const Hi = {
  palette: di,
  typography: ci,
  componentsOverride: Ri
}, O = "#6157FF", ar = "#73D7F5", Zr = "#F57069", rt = "#34DFA2", tt = "#abb3ff", ot = "#f44336", mi = "#6157FF", $r = {
  lighter: t(O).lighten(f).toHexString(),
  main: O,
  light: t(O).lighten(n).toHexString(),
  dark: t(O).darken(d).toHexString(),
  darker: t(O).darken(s).toHexString(),
  contrastText: "#fff"
}, Wi = {
  lighter: "#D6E4FF",
  main: ar,
  light: t(ar).lighten(n).toHexString(),
  dark: t(ar).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, Y = {
  lighter: "#D0F2FF",
  main: tt,
  light: t(tt).lighten(n).toHexString(),
  dark: t(tt).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Oo = {
  lighter: "#E9FCD4",
  main: rt,
  light: t(rt).lighten(n).toHexString(),
  dark: t(rt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Bo = {
  lighter: "#FFF7CD",
  main: Zr,
  light: t(Zr).lighten(n).toHexString(),
  dark: t(Zr).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, wo = {
  lighter: "#FFE7D9",
  main: ot,
  light: t(ot).lighten(n).toHexString(),
  dark: t(ot).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, zi = {
  primary: l($r.light, $r.main),
  info: l(Y.light, Y.main),
  success: l(Oo.light, Oo.main),
  warning: l(Bo.light, Bo.main),
  error: l(wo.light, wo.main),
  one: "#7385FF",
  two: "#584DFF"
}, Ti = {
  hero: mi,
  primary: { ...$r },
  secondary: { ...Wi },
  info: { ...Y },
  success: { ...Oo },
  warning: { ...Bo },
  error: { ...wo },
  grey: o,
  gradients: zi,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: l(Y.lighter, Y.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#6157FF",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  appBar: {
    background: $r.main,
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
    shadow: `0px 1px 4px ${t(ar).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#F1F4FC"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Di = "Avenir Next Cyr", Ii = {
  fontFamily: Di,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Ui(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function Ni(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Pi(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function Li(r) {
  return p(r);
}
function Gi(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Yi(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function _i(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function ji(r) {
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
          background-color:${r.palette.background.default};
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
function Ki(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function qi(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Ji(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Qi(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Vi() {
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
function Xi(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Zi() {
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
function ra(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function ta() {
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
function oa() {
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
function ea(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function na() {
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
function ia(r) {
  return Object.assign(
    Ji(r),
    Ui(r),
    Pi(r),
    Ni(r),
    Li(r),
    Gi(r),
    Yi(r),
    _i(r),
    ji(r),
    Ki(r),
    qi(r),
    Qi(r),
    Vi(),
    Xi(r),
    Zi(),
    ra(r),
    ta(),
    oa(),
    ea(r),
    na()
  );
}
const aa = {
  palette: Ti,
  typography: Ii,
  componentsOverride: ia
}, la = 20, B = "#0A6252", lr = "#7C7D80", et = "#EF7785", nt = "#4DAE00", it = "#C2C4CB", at = "#D76977", lt = "#5A9388", Sr = {
  lighter: t(B).lighten(f).toHexString(),
  main: B,
  light: t(B).lighten(n).toHexString(),
  dark: t(B).darken(d).toHexString(),
  darker: t(B).darken(la).toHexString(),
  contrastText: "#fff"
}, da = {
  lighter: "#D6E4FF",
  main: lr,
  light: t(lr).lighten(n).toHexString(),
  dark: t(lr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, Eo = {
  lighter: "#F8FFFA",
  main: it,
  light: t(it).lighten(n).toHexString(),
  dark: t(it).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, Ro = {
  lighter: "#E9FCD4",
  main: nt,
  light: t(nt).lighten(n).toHexString(),
  dark: t(nt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Ho = {
  lighter: "#FFF7CD",
  main: et,
  light: t(et).lighten(n).toHexString(),
  dark: t(et).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, mo = {
  lighter: "#FFE7D9",
  main: at,
  light: t(at).lighten(n).toHexString(),
  dark: t(at).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, ga = {
  primary: l(Sr.light, Sr.main),
  info: l(Eo.light, Eo.main),
  success: l(Ro.light, Ro.main),
  warning: l(Ho.light, Ho.main),
  error: l(mo.light, mo.main),
  one: "#1F524A",
  two: "#005349"
}, ca = {
  hero: lt,
  primary: { ...Sr },
  secondary: { ...da },
  info: { ...Eo },
  success: { ...Ro },
  warning: { ...Ho },
  error: { ...mo },
  grey: o,
  gradients: ga,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#F1CBC6",
    error: "#BBCAC7",
    info: "#EDF5F0",
    infoGadient: l("#D7F5DF", "#F8FFFA"),
    success: "#E3F8D2"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabledBackground: "#005349",
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: lt,
    toggle2: t(lt).lighten(n).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: Sr.main,
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
    shadow: `0px 1px 4px ${t(lr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#EDF5F0",
    two: "#EFF9F7"
  },
  shadows: {
    card: "0px 2px 35px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, sa = "Avenir Next Cyr", ua = {
  fontFamily: sa,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function pa(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function fa(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function ba(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: "#D6E8D9"
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function ya(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.hero,
    background: r.palette.bgLight.one,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.two,
      boxShadow: "none",
      color: r.palette.primary.dark
    }
  }, i;
}
function xa(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function ka(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function ha(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function va(r) {
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
          background-color:${r.palette.background.default};
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
function Ca(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Fa(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function $a(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Sa(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.hero
          }
        }
      }
    }
  };
}
function Ma() {
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
function Aa(r) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: r.palette.primary.main
        },
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Oa() {
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
function Ba(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        icon: {
          fontSize: 28
        },
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          icon: {
            color: r.palette.warning.main
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          icon: {
            color: r.palette.error.main
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          icon: {
            color: r.palette.info.main
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          icon: {
            color: r.palette.success.dark
          }
        }
      }
    }
  };
}
function wa() {
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
function Ea() {
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
function Ra(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Ha() {
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
function ma(r) {
  return Object.assign(
    $a(r),
    pa(r),
    ba(r),
    fa(r),
    ya(r),
    xa(r),
    ka(r),
    ha(r),
    va(r),
    Ca(r),
    Fa(r),
    Sa(r),
    Ma(),
    Aa(r),
    Oa(),
    Ba(r),
    wa(),
    Ea(),
    Ra(r),
    Ha()
  );
}
const Wa = {
  palette: ca,
  typography: ua,
  componentsOverride: ma
}, w = "#1F3E9A", dr = "#a4aecb", dt = "#F57069", gt = "#34DFA2", ct = "#FF9690", za = "#1F3E9A", st = "#f44336", Mr = {
  lighter: t(w).lighten(f).toHexString(),
  main: w,
  light: t(w).lighten(n).toHexString(),
  dark: t(w).darken(d).toHexString(),
  darker: t(w).darken(s).toHexString(),
  contrastText: "#fff"
}, Ta = {
  lighter: "#D6E4FF",
  main: dr,
  light: t(dr).lighten(n).toHexString(),
  dark: t(dr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, _ = {
  lighter: "#D0F2FF",
  main: ct,
  light: t(ct).lighten(n).toHexString(),
  dark: t(ct).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Wo = {
  lighter: "#E9FCD4",
  main: gt,
  light: t(gt).lighten(n).toHexString(),
  dark: t(gt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, zo = {
  lighter: "#FFF7CD",
  main: dt,
  light: t(dt).lighten(n).toHexString(),
  dark: t(dt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, To = {
  lighter: "#FFE7D9",
  main: st,
  light: t(st).lighten(n).toHexString(),
  dark: t(st).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Da = {
  primary: l(Mr.light, Mr.main),
  info: l(_.light, _.main),
  success: l(Wo.light, Wo.main),
  warning: l(zo.light, zo.main),
  error: l(To.light, To.main),
  one: "#366CE3",
  two: "#584CFF"
}, Ia = {
  hero: za,
  primary: { ...Mr },
  secondary: { ...Ta },
  info: { ..._ },
  success: { ...Wo },
  warning: { ...zo },
  error: { ...To },
  grey: o,
  gradients: Da,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: l(_.lighter, _.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#1F3E9A",
    toggle2: "#1F3E9A",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  appBar: {
    background: Mr.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#1F3E9A",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #366CE3 3.01%, #584CFF 95.95%)",
    shadow: `0px 1px 4px ${t(dr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#f3f3f3",
    two: "rgba(241, 244, 252, 0.6)"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Ua = "Avenir Next Cyr", Na = {
  fontFamily: Ua,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Pa(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function La(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Ga(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.hero,
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
function Ya(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.outlinedPrimary = {
    ...b(c.outlinedPrimary),
    color: r.palette.primary.main,
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      color: r.palette.primary.light
    }
  }, i;
}
function _a(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function ja(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Ka(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function qa(r) {
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
          background-color:${r.palette.background.default};
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
function Ja(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Qa(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Va(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Xa(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Za() {
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
function rl(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function tl() {
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
function ol(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function el() {
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
function nl() {
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
function il(r) {
  return Object.assign(
    Va(r),
    Pa(r),
    Ga(r),
    La(r),
    Ya(r),
    _a(r),
    ja(r),
    Ka(r),
    qa(r),
    Ja(r),
    Qa(r),
    Xa(r),
    Za(),
    rl(r),
    tl(),
    ol(r),
    el(),
    nl()
  );
}
const al = {
  palette: Ia,
  typography: Na,
  componentsOverride: il
}, E = "#4576E6", gr = "#73D7F5", ut = "#F57069", pt = "#34DFA2", ft = "#FF9690", ll = "#4576E6", bt = "#f44336", Ar = {
  lighter: t(E).lighten(f).toHexString(),
  main: E,
  light: t(E).lighten(n).toHexString(),
  dark: t(E).darken(d).toHexString(),
  darker: t(E).darken(s).toHexString(),
  contrastText: "#fff"
}, dl = {
  lighter: "#D6E4FF",
  main: gr,
  light: t(gr).lighten(n).toHexString(),
  dark: t(gr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
}, j = {
  lighter: "#D0F2FF",
  main: ft,
  light: t(ft).lighten(n).toHexString(),
  dark: t(ft).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Do = {
  lighter: "#E9FCD4",
  main: pt,
  light: t(pt).lighten(n).toHexString(),
  dark: t(pt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Io = {
  lighter: "#FFF7CD",
  main: ut,
  light: t(ut).lighten(n).toHexString(),
  dark: t(ut).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, Uo = {
  lighter: "#FFE7D9",
  main: bt,
  light: t(bt).lighten(n).toHexString(),
  dark: t(bt).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, gl = {
  primary: l(Ar.light, Ar.main),
  info: l(j.light, j.main),
  success: l(Do.light, Do.main),
  warning: l(Io.light, Io.main),
  error: l(Uo.light, Uo.main),
  one: "#4576E6",
  two: "#295BCE"
}, cl = {
  hero: ll,
  primary: { ...Ar },
  secondary: { ...dl },
  info: { ...j },
  success: { ...Do },
  warning: { ...Io },
  error: { ...Uo },
  grey: o,
  gradients: gl,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: l(j.lighter, j.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#4576E6",
    toggle3: "#F1F4FC",
    toggle4: "#828EFA"
  },
  appBar: {
    background: Ar.main,
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
    shadow: `0px 1px 4px ${t(gr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1F4FC",
    two: "#efefef"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, sl = "Avenir Next Cyr", ul = {
  fontFamily: sl,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function pl(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function fl(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function bl(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.grey[500], 0.56)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.hero,
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
function yl(r) {
  return p(r);
}
function xl(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function kl(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function hl(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function vl(r) {
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
          background-color:${r.palette.background.default};
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
function Cl(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Fl(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function $l(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Sl(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Ml() {
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
function Al(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Ol() {
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
function Bl(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function wl() {
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
function El() {
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
function Rl(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Hl() {
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
function ml(r) {
  return Object.assign(
    $l(r),
    pl(r),
    bl(r),
    fl(r),
    yl(r),
    xl(r),
    kl(r),
    hl(r),
    vl(r),
    Cl(r),
    Fl(r),
    Sl(r),
    Ml(),
    Al(r),
    Ol(),
    Bl(r),
    wl(),
    El(),
    Rl(r),
    Hl()
  );
}
const Wl = {
  palette: cl,
  typography: ul,
  componentsOverride: ml
}, R = "#49A65C", cr = "#58ca70", yt = "#FA847E", xt = "#4DAE00", kt = "#FECB07", ht = "#FF9690", zl = "#F57069", v = {
  lighter: t(R).lighten(f).toHexString(),
  main: R,
  light: t(R).lighten(n).toHexString(),
  dark: t(R).darken(d).toHexString(),
  darker: t(R).darken(s).toHexString(),
  contrastText: "#fff"
}, Tl = {
  lighter: "#D6E4FF",
  main: cr,
  light: t(cr).lighten(n).toHexString(),
  dark: t(cr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, K = {
  lighter: "#FCEDF2",
  main: kt,
  light: t(kt).lighten(n).toHexString(),
  dark: t(kt).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, No = {
  lighter: "#E9FCD4",
  main: xt,
  light: t(xt).lighten(n).toHexString(),
  dark: t(xt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Po = {
  lighter: "#FFF7CD",
  main: yt,
  light: t(yt).lighten(n).toHexString(),
  dark: t(yt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, Lo = {
  lighter: "#FFE7D9",
  main: ht,
  light: t(ht).lighten(n).toHexString(),
  dark: t(ht).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Dl = {
  primary: l(v.light, v.main),
  info: l(K.light, K.main),
  success: l(No.light, No.main),
  warning: l(Po.light, Po.main),
  error: l(Lo.light, Lo.main),
  one: "#44A357",
  two: "#28933E"
}, Il = {
  hero: zl,
  primary: { ...v },
  secondary: { ...Tl },
  info: { ...K },
  success: { ...No },
  warning: { ...Po },
  error: { ...Lo },
  grey: o,
  gradients: Dl,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[100],
    warning: "#ECECEC",
    error: "#edd1d1",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: l(K.lighter, K.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: v.main,
    toggle2: v.dark,
    toggle3: "#EDFCFA",
    toggle4: "#fff"
  },
  appBar: {
    background: v.main,
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
    shadow: `0px 1px 4px ${t(cr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F4F4F4",
    two: "#F1FCF7"
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Ul = "Avenir Next Cyr", Nl = {
  fontFamily: Ul,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Pl(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function Ll(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Gl(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function Yl(r) {
  return p(r);
}
function _l(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function jl(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Kl(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function ql(r) {
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
          background-color:${r.palette.background.default};
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
function Jl(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Ql(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Vl(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(139.78deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Xl(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Zl() {
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
function rd(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function td() {
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
function od(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function ed() {
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
function nd() {
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
function id(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function ad() {
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
function ld(r) {
  return Object.assign(
    Vl(r),
    Pl(r),
    Gl(r),
    Ll(r),
    Yl(r),
    _l(r),
    jl(r),
    Kl(r),
    ql(r),
    Jl(r),
    Ql(r),
    Xl(r),
    Zl(),
    rd(r),
    td(),
    od(r),
    ed(),
    nd(),
    id(r),
    ad()
  );
}
const dd = {
  palette: Il,
  typography: Nl,
  componentsOverride: ld
}, k = "#6157FF", sr = "#73D7F5", vt = "#F57069", Ct = "#FFEED6", Ft = "#abb3ff", $t = "#f44336", gd = "#6157FF", Or = {
  lighter: t(k).lighten(f).toHexString(),
  main: k,
  light: t(k).lighten(n).toHexString(),
  dark: t(k).darken(d).toHexString(),
  darker: t(k).darken(s).toHexString(),
  contrastText: "#fff"
}, cd = {
  lighter: "#D6E4FF",
  main: sr,
  light: t(sr).lighten(n).toHexString(),
  dark: t(sr).darken(d).toHexString(),
  darker: t(k).darken(s).toHexString(),
  contrastText: "#ccc"
}, q = {
  lighter: "#D0F2FF",
  main: Ft,
  light: t(Ft).lighten(n).toHexString(),
  dark: t(Ft).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, Go = {
  lighter: "#E9FCD4",
  main: Ct,
  light: t(Ct).lighten(n).toHexString(),
  dark: t(Ct).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Yo = {
  lighter: "#FFF7CD",
  main: vt,
  light: t(vt).lighten(n).toHexString(),
  dark: t(vt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, _o = {
  lighter: "#FFE7D9",
  main: $t,
  light: t($t).lighten(n).toHexString(),
  dark: t($t).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, sd = {
  primary: l(Or.light, Or.main),
  info: l(q.light, q.main),
  success: l(Go.light, Go.main),
  warning: l(Yo.light, Yo.main),
  error: l(_o.light, _o.main),
  one: "#7385FF",
  two: "#584DFF"
}, ud = {
  hero: gd,
  primary: { ...Or },
  secondary: { ...cd },
  info: { ...q },
  success: { ...Go },
  warning: { ...Yo },
  error: { ..._o },
  grey: o,
  gradients: sd,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "#F1F4FC",
    infoGadient: l(q.lighter, q.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#6157FF",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  appBar: {
    background: Or.main,
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
    shadow: `0px 1px 4px ${t(sr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#F1F4FC"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, pd = "Avenir Next Cyr", fd = {
  fontFamily: pd,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
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
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function bd(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function yd(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function xd(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": { backgroundColor: e(r.palette.grey[500], 0.16) },
          "&.Mui-focused": { backgroundColor: r.palette.action.focus },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": { backgroundColor: "#fff" },
          "& fieldset": { borderColor: r.palette.grey },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function kd(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  }, x = b(c.root);
  return c.root = {
    ...x,
    "&:hover": {
      ...b(x["&:hover"]),
      border: 0
    }
  }, c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.hero,
    background: r.palette.bgLight.two,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.one,
      boxShadow: "none"
    }
  }, i;
}
function hd(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function vd(r) {
  const i = e(r.palette.grey[900], 0.92), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Cd(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Fd(r) {
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
          background-color:${r.palette.background.default};
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
function $d(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Sd(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Md(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Ad(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Od() {
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
function Bd(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function wd() {
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
function Ed(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Rd() {
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
function Hd() {
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
function md(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Wd() {
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
function zd(r) {
  return Object.assign(
    Md(r),
    bd(r),
    xd(r),
    yd(r),
    kd(r),
    hd(r),
    vd(r),
    Cd(r),
    Fd(r),
    $d(r),
    Sd(r),
    Ad(r),
    Od(),
    Bd(r),
    wd(),
    Ed(r),
    Rd(),
    Hd(),
    md(r),
    Wd()
  );
}
const Td = {
  palette: ud,
  typography: fd,
  componentsOverride: zd
}, H = "#AA9161", ur = "#D0C8B5", St = "#F57069", Mt = "#E3F8D2", At = "#B5A788", Ot = "#F57069", Dd = "#6D0C8B5", Br = {
  lighter: t(H).lighten(f).toHexString(),
  main: H,
  light: t(H).lighten(n).toHexString(),
  dark: t(H).darken(d).toHexString(),
  darker: t(H).darken(s).toHexString(),
  contrastText: "#fff"
}, Id = {
  lighter: "#D6E4FF",
  main: ur,
  light: t(ur).lighten(n).toHexString(),
  dark: t(ur).darken(d).toHexString(),
  contrastText: "#A2916A",
  darker: "#827657"
}, J = {
  lighter: "#D0F2FF",
  main: At,
  light: t(At).lighten(n).toHexString(),
  dark: t(At).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, jo = {
  lighter: "#E9FCD4",
  main: Mt,
  light: t(Mt).lighten(n).toHexString(),
  dark: t(Mt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Ko = {
  lighter: "#FFF7CD",
  main: St,
  light: t(St).lighten(n).toHexString(),
  dark: t(St).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, qo = {
  lighter: "#FFE7D9",
  main: Ot,
  light: t(Ot).lighten(n).toHexString(),
  dark: t(Ot).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Ud = {
  primary: l(Br.light, Br.main),
  info: l(J.light, J.main),
  success: l(jo.light, jo.main),
  warning: l(Ko.light, Ko.main),
  error: l(qo.light, qo.main),
  one: "#B5A788",
  two: "#AA9161"
}, Nd = {
  hero: Dd,
  primary: { ...Br },
  secondary: { ...Id },
  info: { ...J },
  success: { ...jo },
  warning: { ...Ko },
  error: { ...qo },
  grey: o,
  gradients: Ud,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "#FFEED6",
    infoGadient: l(J.lighter, J.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#A2916A",
    toggle2: "#F57069",
    toggle3: "#F2F2F1",
    toggle4: "#fff"
  },
  appBar: {
    background: Br.main,
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
    shadow: `0px 1px 4px ${t(ur).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F6F4F0",
    two: "#F2F2F1"
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Pd = "Roboto", Ld = {
  fontFamily: Pd,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
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
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Gd(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function Yd(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function _d(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function jd(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.outlinedInfo = {
    ...b(c.outlinedInfo),
    color: r.palette.info.main,
    backgroundColor: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: r.palette.info.dark
    }
  }, i;
}
function Kd(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function qd(r) {
  const i = e(r.palette.grey[900], 0.6), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Jd(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Qd(r) {
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
          background-color:${r.palette.background.default};
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
function Vd(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Xd(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Zd(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function rg(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function tg() {
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
function og(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function eg() {
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
function ng(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function ig() {
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
function ag() {
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
function lg(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function dg() {
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
function gg(r) {
  return Object.assign(
    Zd(r),
    Gd(r),
    _d(r),
    Yd(r),
    jd(r),
    Kd(r),
    qd(r),
    Jd(r),
    Qd(r),
    Vd(r),
    Xd(r),
    rg(r),
    tg(),
    og(r),
    eg(),
    ng(r),
    ig(),
    ag(),
    lg(r),
    dg()
  );
}
const cg = {
  palette: Nd,
  typography: Ld,
  componentsOverride: gg
}, m = "#1B719E", pr = "#A6CCBE", Bt = "#3AAEEC", wt = "#1B719E", Et = "#F2D0B2", Rt = "#FF9690", sg = "#2188bf", C = {
  lighter: t(m).lighten(f).toHexString(),
  main: m,
  light: t(m).lighten(n).toHexString(),
  dark: t(m).darken(d).toHexString(),
  darker: t(m).darken(s).toHexString(),
  contrastText: "#fff"
}, ug = {
  lighter: "#D6E4FF",
  main: pr,
  light: t(pr).lighten(n).toHexString(),
  dark: t(pr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, Q = {
  lighter: "#FCEDF2",
  main: Et,
  light: t(Et).lighten(n).toHexString(),
  dark: t(Et).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, Jo = {
  lighter: "#E9FCD4",
  main: wt,
  light: t(wt).lighten(n).toHexString(),
  dark: t(wt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Qo = {
  lighter: "#FFF7CD",
  main: Bt,
  light: t(Bt).lighten(n).toHexString(),
  dark: t(Bt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, Vo = {
  lighter: "#FFE7D9",
  main: Rt,
  light: t(Rt).lighten(n).toHexString(),
  dark: t(Rt).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, pg = {
  primary: l(C.light, C.main),
  info: l(Q.light, Q.main),
  success: l(Jo.light, Jo.main),
  warning: l(Qo.light, Qo.main),
  error: l(Vo.light, Vo.main),
  one: "#2AB6CA",
  two: "#28909B"
}, fg = {
  hero: sg,
  primary: { ...C },
  secondary: { ...ug },
  info: { ...Q },
  success: { ...Jo },
  warning: { ...Qo },
  error: { ...Vo },
  grey: o,
  gradients: pg,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[100],
    warning: "#ECECEC",
    error: "#edd1d1",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: l(Q.lighter, Q.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: C.main,
    toggle2: C.dark,
    toggle3: "#EDFCFA",
    toggle4: "#fff"
  },
  appBar: {
    background: C.main,
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
    shadow: `0px 1px 4px ${t(pr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FBFC",
    two: "#F1FCF7"
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, bg = "Avenir Next Cyr", yg = {
  fontFamily: bg,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function xg(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function kg(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function hg(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.16)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.primary.main, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function vg(r) {
  return p(r);
}
function Cg(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Fg(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function $g(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Sg(r) {
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
          background-color:${r.palette.background.default};
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
function Mg(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Ag(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Og(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(180deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Bg(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function wg() {
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
function Eg(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Rg() {
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
function Hg(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
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
function Wg() {
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
function zg(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Tg() {
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
function Dg(r) {
  return Object.assign(
    Og(r),
    xg(r),
    hg(r),
    kg(r),
    vg(r),
    Cg(r),
    Fg(r),
    $g(r),
    Sg(r),
    Mg(r),
    Ag(r),
    Bg(r),
    wg(),
    Eg(r),
    Rg(),
    Hg(r),
    mg(),
    Wg(),
    zg(r),
    Tg()
  );
}
const Ig = {
  palette: fg,
  typography: yg,
  componentsOverride: Dg
}, W = "#DB4141", fr = "#F7BFBC", Ht = "#F57069", mt = "#FFC9AB", Wt = "#F2D0B2", zt = "#802121", Ug = "#B00C2F", F = {
  lighter: t(W).lighten(f).toHexString(),
  main: W,
  light: t(W).lighten(n).toHexString(),
  dark: t(W).darken(d).toHexString(),
  darker: t(W).darken(s).toHexString(),
  contrastText: "#fff"
}, Ng = {
  lighter: "#D6E4FF",
  main: fr,
  light: t(fr).lighten(n).toHexString(),
  dark: t(fr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, V = {
  lighter: "#FCEDF2",
  main: Wt,
  light: t(Wt).lighten(n).toHexString(),
  dark: t(Wt).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, Xo = {
  lighter: "#E9FCD4",
  main: mt,
  light: t(mt).lighten(n).toHexString(),
  dark: t(mt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, Zo = {
  lighter: "#FFF7CD",
  main: Ht,
  light: t(Ht).lighten(n).toHexString(),
  dark: t(Ht).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, re = {
  lighter: "#FFE7D9",
  main: zt,
  light: t(zt).lighten(n).toHexString(),
  dark: t(zt).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Pg = {
  primary: l(F.light, F.main),
  info: l(V.light, V.main),
  success: l(Xo.light, Xo.main),
  warning: l(Zo.light, Zo.main),
  error: l(re.light, re.main),
  one: "#EB323F",
  two: "#981127"
}, Lg = {
  hero: Ug,
  primary: { ...F },
  secondary: { ...Ng },
  info: { ...V },
  success: { ...Xo },
  warning: { ...Zo },
  error: { ...re },
  grey: o,
  gradients: Pg,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: l(V.lighter, V.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: F.main,
    toggle2: F.light,
    toggle3: "#FCEDF2",
    toggle4: "#fff"
  },
  appBar: {
    background: F.main,
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
    shadow: `0px 1px 4px ${t(fr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F4F4F4",
    two: "#FFEEEE"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Gg = "Glober SemiBold", Yg = {
  fontFamily: Gg,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function _g(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function jg(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Kg(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.primary.main, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function qg(r) {
  return p(r);
}
function Jg(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Qg(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Vg(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Xg(r) {
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
          background-color:${r.palette.background.default};
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
function Zg(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function rc(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function tc(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function oc(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function ec() {
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
function nc(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function ic() {
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
function ac(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function lc() {
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
function dc() {
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
function gc(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function cc() {
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
function sc(r) {
  return Object.assign(
    tc(r),
    _g(r),
    Kg(r),
    jg(r),
    qg(r),
    Jg(r),
    Qg(r),
    Vg(r),
    Xg(r),
    Zg(r),
    rc(r),
    oc(r),
    ec(),
    nc(r),
    ic(),
    ac(r),
    lc(),
    dc(),
    gc(r),
    cc()
  );
}
const uc = {
  palette: Lg,
  typography: Yg,
  componentsOverride: sc
}, z = "#2873AA", br = "#5F7D8E", Tt = "#FF352A", Dt = "#4DAE00", It = "#C2C4CB", Ut = "#E20B00", Nt = "#5F7D8E", wr = {
  lighter: t(z).lighten(f).toHexString(),
  main: z,
  light: t(z).lighten(n).toHexString(),
  dark: t(z).darken(d).toHexString(),
  darker: t(z).darken(s).toHexString(),
  contrastText: "#fff"
}, pc = {
  lighter: "#D6E4FF",
  main: br,
  light: t(br).lighten(n).toHexString(),
  dark: t(br).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, X = {
  lighter: "#FCEDF2",
  main: It,
  light: t(It).lighten(n).toHexString(),
  dark: t(It).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, te = {
  lighter: "#E9FCD4",
  main: Dt,
  light: t(Dt).lighten(n).toHexString(),
  dark: t(Dt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, oe = {
  lighter: "#FFF7CD",
  main: Tt,
  light: t(Tt).lighten(n).toHexString(),
  dark: t(Tt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, ee = {
  lighter: "#FFE7D9",
  main: Ut,
  light: t(Ut).lighten(n).toHexString(),
  dark: t(Ut).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, fc = {
  primary: l(wr.light, wr.main),
  info: l(X.light, X.main),
  success: l(te.light, te.main),
  warning: l(oe.light, oe.main),
  error: l(ee.light, ee.main),
  one: "#A9341E",
  two: "#7A232E"
}, bc = {
  hero: Nt,
  primary: { ...wr },
  secondary: { ...pc },
  info: { ...X },
  success: { ...te },
  warning: { ...oe },
  error: { ...ee },
  grey: o,
  gradients: fc,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: o[100],
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(174 33 3, 0.4)",
    infoGadient: l(X.lighter, X.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: "#E7CBC7",
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: Nt,
    toggle2: t(Nt).lighten(n).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: wr.main,
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
    shadow: `0px 1px 4px ${t(br).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#FFEEEE",
    two: "#F5F5F5"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, yc = "Avenir Next Cyr", xc = {
  fontFamily: yc,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function kc(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function hc(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function vc(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function Cc(r) {
  return p(r);
}
function Fc(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function $c(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Sc(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Mc(r) {
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
          background-color:${r.palette.background.default};
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
function Ac(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Oc(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function Bc(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function wc(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.hero
          }
        }
      }
    }
  };
}
function Ec() {
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
function Rc(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function Hc() {
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
function mc(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
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
function zc() {
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
function Tc(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Dc() {
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
function Ic(r) {
  return Object.assign(
    Bc(r),
    kc(r),
    vc(r),
    hc(r),
    Cc(r),
    Fc(r),
    $c(r),
    Sc(r),
    Mc(r),
    Ac(r),
    Oc(r),
    wc(r),
    Ec(),
    Rc(r),
    Hc(),
    mc(r),
    Wc(),
    zc(),
    Tc(r),
    Dc()
  );
}
const Uc = {
  palette: bc,
  typography: xc,
  componentsOverride: Ic
}, T = "#AC729C", yr = "#C8316C", Pt = "#FF4D75", Lt = "#FFE7CE", Gt = "#D9DEEC", Yt = "#D41442", _t = "#BD8AAD", Er = {
  lighter: t(T).lighten(f).toHexString(),
  main: T,
  light: t(T).lighten(n).toHexString(),
  dark: t(T).darken(d).toHexString(),
  darker: t(T).darken(s).toHexString(),
  contrastText: "#fff"
}, Nc = {
  lighter: "#D6E4FF",
  main: yr,
  light: t(yr).lighten(n).toHexString(),
  dark: t(yr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, Z = {
  lighter: "#F8F1FC",
  main: Gt,
  light: t(Gt).lighten(n).toHexString(),
  dark: t(Gt).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, ne = {
  lighter: "#E9FCD4",
  main: Lt,
  light: t(Lt).lighten(n).toHexString(),
  dark: t(Lt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, ie = {
  lighter: "#FFF7CD",
  main: Pt,
  light: t(Pt).lighten(n).toHexString(),
  dark: t(Pt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, ae = {
  lighter: "#FFE7D9",
  main: Yt,
  light: t(Yt).lighten(n).toHexString(),
  dark: t(Yt).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Pc = {
  primary: l(Er.light, Er.main),
  info: l(Z.light, Z.main),
  success: l(ne.light, ne.main),
  warning: l(ie.light, ie.main),
  error: l(ae.light, ae.main),
  one: "#AC729C",
  two: "#734464"
}, Lc = {
  hero: _t,
  primary: { ...Er },
  secondary: { ...Nc },
  info: { ...Z },
  success: { ...ne },
  warning: { ...ie },
  error: { ...ae },
  grey: o,
  gradients: Pc,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#ECECEC",
    error: "#ECECEC",
    info: "#F8F1FC",
    infoGadient: l(Z.light, Z.main),
    success: "#FFEED6"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabledBackground: "#85CCCA",
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: _t,
    toggle2: t(_t).lighten(n).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: Er.main,
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
    shadow: `0px 1px 4px ${t(yr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F9F1FC",
    two: "#FEF0F5"
  },
  shadows: {
    card: "0px 2px 35px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Gc = "Avenir Next Cyr", Yc = {
  fontFamily: Gc,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function _c(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function jc(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Kc(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function qc(r) {
  return p(r);
}
function Jc(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Qc(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Vc(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Xc(r) {
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
          background-color:${r.palette.background.default};
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
function Zc(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function rs(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function ts(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function os(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.hero
          }
        }
      }
    }
  };
}
function es() {
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
function ns(r) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: r.palette.primary.main
        },
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function is() {
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
function as(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function ls() {
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
function ds() {
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
function gs(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function cs() {
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
function ss(r) {
  return Object.assign(
    ts(r),
    _c(r),
    Kc(r),
    jc(r),
    qc(r),
    Jc(r),
    Qc(r),
    Vc(r),
    Xc(r),
    Zc(r),
    rs(r),
    os(r),
    es(),
    ns(r),
    is(),
    as(r),
    ls(),
    ds(),
    gs(r),
    cs()
  );
}
const us = {
  palette: Lc,
  typography: Yc,
  componentsOverride: ss
}, U = "#FF7009", jt = "#434343", Kt = "#FF0D00", qt = "#FFEED6", Jt = "#DBB091", Qt = "#C8316C", ps = "#FF7009", Rr = {
  lighter: "#FFDEC8",
  main: U,
  light: t(U).lighten(n).toHexString(),
  dark: t(U).darken(d).toHexString(),
  darker: t(U).darken(s).toHexString(),
  contrastText: "#fff"
}, fs = {
  lighter: "#D6E4FF",
  main: jt,
  light: t(jt).lighten(n).toHexString(),
  dark: t(jt).darken(d).toHexString(),
  darker: t(U).darken(s).toHexString(),
  contrastText: "#ccc"
}, rr = {
  lighter: "#D0F2FF",
  main: Jt,
  light: t(Jt).lighten(n).toHexString(),
  dark: t(Jt).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, le = {
  lighter: "#E9FCD4",
  main: qt,
  light: t(qt).lighten(n).toHexString(),
  dark: t(qt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, de = {
  lighter: "#FFF7CD",
  main: Kt,
  light: t(Kt).lighten(n).toHexString(),
  dark: t(Kt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, ge = {
  lighter: "#FFE7D9",
  main: Qt,
  light: t(Qt).lighten(n).toHexString(),
  dark: t(Qt).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, bs = {
  primary: l(Rr.light, Rr.main),
  info: l(rr.light, rr.main),
  success: l(le.light, le.main),
  warning: l(de.light, de.main),
  error: l(ge.light, ge.main),
  one: "#FF7009",
  two: "#E66305"
}, ys = {
  hero: ps,
  primary: { ...Rr },
  secondary: { ...fs },
  info: { ...rr },
  success: { ...le },
  warning: { ...de },
  error: { ...ge },
  grey: o,
  gradients: bs,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#FFF0E6",
    infoGadient: l(rr.lighter, rr.light),
    success: "#FCF3ED"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#FC8737",
    toggle2: "#FF7009",
    toggle3: "#EDEDED",
    toggle4: "#fff"
  },
  appBar: {
    background: Rr.main,
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
}, xs = "Avenir Next Cyr", ks = {
  fontFamily: xs,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
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
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function hs(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function vs(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Cs(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.primary.lighter
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.main,
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
function Fs(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  }, x = b(c.root);
  return c.root = {
    ...x,
    "&:hover": {
      ...b(x["&:hover"]),
      border: 0
    }
  }, c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.hero,
    background: r.palette.bgLight.two,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.one,
      boxShadow: "none"
    }
  }, c.textPrimary = {
    ...b(c.textPrimary),
    "&:hover": {
      background: "transparent",
      color: r.palette.primary.dark
    }
  }, i;
}
function $s(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Ss(r) {
  const i = e(r.palette.grey[900], 0.92), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Ms(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function As(r) {
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
          background-color:${r.palette.background.default};
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
function Os(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Bs(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function ws(r) {
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
function Es(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function Rs() {
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
function Hs(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function ms() {
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
function Ws(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function zs() {
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
function Ts() {
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
function Ds(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Is() {
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
function Us(r) {
  return Object.assign(
    ws(),
    hs(r),
    Cs(r),
    vs(r),
    Fs(r),
    $s(r),
    Ss(r),
    Ms(r),
    As(r),
    Os(r),
    Bs(r),
    Es(r),
    Rs(),
    Hs(r),
    ms(),
    Ws(r),
    zs(),
    Ts(),
    Ds(r),
    Is()
  );
}
const Ns = {
  palette: ys,
  typography: ks,
  componentsOverride: Us
}, h = "#6157FF", xr = "#73D7F5", Vt = "#F57069", Xt = "#FFEED6", Zt = "#abb3ff", ro = "#f44336", Ps = "#6157FF", Hr = {
  lighter: t(h).lighten(f).toHexString(),
  main: h,
  light: t(h).lighten(n).toHexString(),
  dark: t(h).darken(d).toHexString(),
  darker: t(h).darken(s).toHexString(),
  contrastText: "#fff"
}, Ls = {
  lighter: "#D6E4FF",
  main: xr,
  light: t(xr).lighten(n).toHexString(),
  dark: t(xr).darken(d).toHexString(),
  darker: t(h).darken(s).toHexString(),
  contrastText: "#ccc"
}, tr = {
  lighter: "#D0F2FF",
  main: Zt,
  light: t(Zt).lighten(n).toHexString(),
  dark: t(Zt).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
}, ce = {
  lighter: "#E9FCD4",
  main: Xt,
  light: t(Xt).lighten(n).toHexString(),
  dark: t(Xt).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, se = {
  lighter: "#FFF7CD",
  main: Vt,
  light: t(Vt).lighten(n).toHexString(),
  dark: t(Vt).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, ue = {
  lighter: "#FFE7D9",
  main: ro,
  light: t(ro).lighten(n).toHexString(),
  dark: t(ro).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Gs = {
  primary: l(Hr.light, Hr.main),
  info: l(tr.light, tr.main),
  success: l(ce.light, ce.main),
  warning: l(se.light, se.main),
  error: l(ue.light, ue.main),
  one: "#7385FF",
  two: "#584DFF"
}, Ys = {
  hero: Ps,
  primary: { ...Hr },
  secondary: { ...Ls },
  info: { ...tr },
  success: { ...ce },
  warning: { ...se },
  error: { ...ue },
  grey: o,
  gradients: Gs,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: l(tr.lighter, tr.light),
    success: "#FFE7CE"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabled: o[50080],
    disabledBackground: o[50024],
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#6157FF",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  appBar: {
    background: Hr.main,
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
    shadow: `0px 1px 4px ${t(xr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#F1F4FC"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, _s = "Avenir Next Cyr", js = {
  fontFamily: _s,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
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
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function Ks(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function qs(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Js(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: r.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.dark,
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
function Qs(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.hero,
    background: r.palette.bgLight.two,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.one,
      boxShadow: "none"
    }
  }, i;
}
function Vs(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Xs(r) {
  const i = e(r.palette.grey[900], 0.6), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Zs(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function ru(r) {
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
          background-color:${r.palette.background.default};
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
function tu(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function ou(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function eu(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function nu(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function iu() {
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
function au(r) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: r.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function lu() {
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
function du(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function gu() {
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
function cu() {
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
function su(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function uu() {
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
function pu(r) {
  return Object.assign(
    eu(r),
    Ks(r),
    Js(r),
    qs(r),
    Qs(r),
    Vs(r),
    Xs(r),
    Zs(r),
    ru(r),
    tu(r),
    ou(r),
    nu(r),
    iu(),
    au(r),
    lu(),
    du(r),
    gu(),
    cu(),
    su(r),
    uu()
  );
}
const fu = {
  palette: Ys,
  typography: js,
  componentsOverride: pu
}, D = "#204568", kr = "#4A6F93", to = "#C76277", oo = "#5CAA7F", eo = "#BCC3D2", no = "#C76277", io = "#426A90", mr = {
  lighter: t(D).lighten(f).toHexString(),
  main: D,
  light: t(D).lighten(n).toHexString(),
  dark: t(D).darken(d).toHexString(),
  darker: t(D).darken(s).toHexString(),
  contrastText: "#fff"
}, ao = {
  lighter: "#F6F4F0",
  main: kr,
  light: t(kr).lighten(n).toHexString(),
  dark: t(kr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, pe = {
  lighter: "#F6F4F0",
  main: eo,
  light: t(eo).lighten(n).toHexString(),
  dark: t(eo).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, fe = {
  lighter: "#F6F4F0",
  main: oo,
  light: t(oo).lighten(n).toHexString(),
  dark: t(oo).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, be = {
  lighter: "#FEF1F0",
  main: to,
  light: t(to).lighten(n).toHexString(),
  dark: t(to).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, ye = {
  lighter: "#FEF1F0",
  main: no,
  light: t(no).lighten(n).toHexString(),
  dark: t(no).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, bu = {
  primary: l(mr.light, mr.main),
  info: l(pe.light, pe.main),
  success: l(fe.light, fe.main),
  warning: l(be.light, be.main),
  error: l(ye.light, ye.main),
  one: "#073D5F",
  two: "#022D47"
}, yu = {
  hero: io,
  primary: { ...mr },
  secondary: { ...ao },
  info: { ...pe },
  success: { ...fe },
  warning: { ...be },
  error: { ...ye },
  grey: o,
  gradients: bu,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#EDF7FC",
    infoGadient: l(ao.light, ao.lighter),
    success: "#D9EFE2"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabledBackground: "#F7F7F8",
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: io,
    toggle2: t(io).lighten(n).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: mr.main,
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
    shadow: `0px 1px 4px ${t(kr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#E8F2F5",
    two: "#FEF1F0"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, xu = "Avenir Next Cyr", ku = {
  fontFamily: xu,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function hu(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function vu(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Cu(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.primary.light, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.main,
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
function Fu(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.secondary.main,
    background: r.palette.bgLight.one,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.two,
      boxShadow: "none"
    }
  }, i;
}
function $u(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Su(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Mu(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Au(r) {
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
          background-color:${r.palette.background.default};
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
function Ou(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function Bu(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function wu(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function Eu(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.hero
          }
        }
      }
    }
  };
}
function Ru() {
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
function Hu(r) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: r.palette.primary.main
        },
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function mu() {
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
function Wu(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function zu() {
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
function Tu() {
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
function Du(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function Iu() {
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
function Uu(r) {
  return Object.assign(
    wu(r),
    hu(r),
    Cu(r),
    vu(r),
    Fu(r),
    $u(r),
    Su(r),
    Mu(r),
    Au(r),
    Ou(r),
    Bu(r),
    Eu(r),
    Ru(),
    Hu(r),
    mu(),
    Wu(r),
    zu(),
    Tu(),
    Du(r),
    Iu()
  );
}
const Nu = {
  palette: yu,
  typography: ku,
  componentsOverride: Uu
}, I = "#204568", hr = "#4A6F93", lo = "#C76277", go = "#5CAA7F", co = "#BCC3D2", so = "#C76277", uo = "#426A90", Wr = {
  lighter: t(I).lighten(f).toHexString(),
  main: I,
  light: t(I).lighten(n).toHexString(),
  dark: t(I).darken(d).toHexString(),
  darker: t(I).darken(s).toHexString(),
  contrastText: "#fff"
}, po = {
  lighter: "#F6F4F0",
  main: hr,
  light: t(hr).lighten(n).toHexString(),
  dark: t(hr).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780"
}, xe = {
  lighter: "#F6F4F0",
  main: co,
  light: t(co).lighten(n).toHexString(),
  dark: t(co).darken(d).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC"
}, ke = {
  lighter: "#F6F4F0",
  main: go,
  light: t(go).lighten(n).toHexString(),
  dark: t(go).darken(d).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
}, he = {
  lighter: "#FEF1F0",
  main: lo,
  light: t(lo).lighten(n).toHexString(),
  dark: t(lo).darken(d).toHexString(),
  darker: "#7A4F01",
  contrastText: o[800]
}, ve = {
  lighter: "#FEF1F0",
  main: so,
  light: t(so).lighten(n).toHexString(),
  dark: t(so).darken(d).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
}, Pu = {
  primary: l(Wr.light, Wr.main),
  info: l(xe.light, xe.main),
  success: l(ke.light, ke.main),
  warning: l(he.light, he.main),
  error: l(ve.light, ve.main),
  one: "#073D5F",
  two: "#022D47"
}, Lu = {
  hero: uo,
  primary: { ...Wr },
  secondary: { ...po },
  info: { ...xe },
  success: { ...ke },
  warning: { ...he },
  error: { ...ve },
  grey: o,
  gradients: Pu,
  divider: o[50024],
  text: {
    primary: o[800],
    secondary: o[600],
    boby2: o[600],
    subtitle2: o[50080],
    disabled: o[400]
  },
  background: {
    paper: "#fff",
    default: "#fff",
    neutral: o[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#EDF7FC",
    infoGadient: l(po.light, po.lighter),
    success: "#D9EFE2"
  },
  action: {
    active: o[600],
    hover: o[5008],
    selected: o[50016],
    disabledBackground: "#F7F7F8",
    focus: o[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: uo,
    toggle2: t(uo).lighten(n).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff"
  },
  appBar: {
    background: Wr.main,
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
    shadow: `0px 1px 4px ${t(hr).setAlpha(0.3).toRgbString()}`
  },
  bgLight: {
    one: "#E8F2F5",
    two: "#FEF1F0"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
}, Gu = "Avenir Next Cyr", Yu = {
  fontFamily: Gu,
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
    fontSize: a(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: a(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: a(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: a(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: a(14)
    //    textTransform: 'capitalize',
  }
};
function _u(r) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: r.palette.shadows.card,
          borderRadius: r.spacing(1)
        }
      }
    }
  };
}
function ju(r) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: r.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}
function Ku(r) {
  return {
    ...u && {
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
          backgroundColor: e(r.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: e(r.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: r.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: r.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: e(r.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: r.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: e(r.palette.primary.light, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: e(r.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: r.palette.primary.main,
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
function qu(r) {
  const i = p(r), g = i.MuiButton, c = g.styleOverrides = {
    ...g.styleOverrides ?? {}
  };
  return c.containedSecondary = {
    ...b(c.containedSecondary),
    color: r.palette.secondary.main,
    background: r.palette.bgLight.one,
    boxShadow: r.palette.baseButton.shadow,
    "&:hover": {
      background: r.palette.bgLight.two,
      boxShadow: "none"
    }
  }, i;
}
function Ju(r) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: r.palette.grey[800]
        },
        arrow: {
          color: r.palette.grey[800]
        }
      }
    }
  };
}
function Qu(r) {
  const i = e(r.palette.grey[900], 0.3), g = e(r.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: [
            "rgb(22,28,36)",
            `-moz-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `-webkit-linear-gradient(75deg, ${i} 0%, ${g} 100%)`,
            `linear-gradient(75deg, ${i} 0%, ${g} 100%)`
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}
function Vu(r) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: r.spacing(2)
        },
        gutterBottom: {
          marginBottom: r.spacing(2)
        },
        body2: {
          color: r.palette.text.boby2
        },
        h3: {
          color: r.palette.text.primary
        },
        h4: {
          color: r.palette.text.primary
        },
        h5: {
          color: r.palette.text.primary
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: r.palette.text.subtitle2
        }
      }
    }
  };
}
function Xu(r) {
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
          background-color:${r.palette.background.default};
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
function Zu(r) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: r.palette.shadows.card
        }
      }
    }
  };
}
function r0(r) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: `1px solid ${r.palette.action.toggle1}`,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: r.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: r.palette.action.toggle2,
          background: r.palette.action.toggle3,
          boxShadow: r.palette.shadows.card,
          "&:hover": {
            color: r.palette.action.toggle4,
            background: `${r.palette.action.toggle2} !important`
          },
          "&.Mui-selected": {
            color: r.palette.action.toggle4,
            backgroundColor: r.palette.action.toggle1
          }
        }
      }
    }
  };
}
function t0(r) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(177.31deg, ${r.palette.gradients.one} 3.01%, ${r.palette.gradients.two} 95.95%)`
        }
      }
    }
  };
}
function o0(r) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: r.palette.hero
          }
        }
      }
    }
  };
}
function e0() {
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
function n0(r) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: r.palette.primary.main
        },
        root: {
          color: r.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}
function i0() {
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
function a0(r) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${r.spacing(2)} ${r.spacing(2)} ${r.spacing(1.5)}`,
          borderRadius: r.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: r.spacing(4.5)
          }
        },
        standardWarning: {
          backgroundColor: r.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${r.palette.warning.main} !important`
          }
        },
        standardError: {
          backgroundColor: r.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${r.palette.error.main} !important`
          }
        },
        standardInfo: {
          backgroundColor: r.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${r.palette.info.main} !important`
          }
        },
        standardSuccess: {
          backgroundColor: r.palette.background.success,
          "& .MuiAlert-icon": {
            color: r.palette.primary.main
          }
        }
      }
    }
  };
}
function l0() {
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
function d0() {
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
function g0(r) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: r.palette.primary.light,
          "&.Mui-selected": {
            color: r.palette.text.primary
          }
        }
      }
    }
  };
}
function c0() {
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
function s0(r) {
  return Object.assign(
    t0(r),
    _u(r),
    Ku(r),
    ju(r),
    qu(r),
    Ju(r),
    Qu(r),
    Vu(r),
    Xu(r),
    Zu(r),
    r0(r),
    o0(r),
    e0(),
    n0(r),
    i0(),
    a0(r),
    l0(),
    d0(),
    g0(r),
    c0()
  );
}
const u0 = {
  palette: Lu,
  typography: Yu,
  componentsOverride: s0
}, Ce = {
  mobimed: Td,
  drAnna: En,
  gms: ni,
  medincenter: Wa,
  medswiss: Wl,
  mediadoc: aa,
  minfin: dd,
  pimu: uc,
  ncn: Ig,
  sibgmu: Uc,
  mositalmed: cg,
  skyfert: us,
  white_fang: u0,
  kalinchenko: Hi,
  celt: en,
  vetcenter: Nu,
  sm: Ns,
  medincenter_old: al,
  test: fu
}, p0 = "mobimed";
function f0(r) {
  return Object.hasOwn(Ce, r);
}
const b0 = Ce[p0];
function y0(r) {
  return r && f0(r) ? Ce[r] : b0;
}
const x0 = (r) => {
  const { palette: i, typography: g, componentsOverride: c } = y0(r), zr = we({ palette: i, typography: g });
  return zr.components = c(zr), zr;
};
function $0({
  children: r,
  name: i,
  theme: g
}) {
  const c = Me(
    () => i || !g ? x0(i) : g,
    [i, g]
  );
  return /* @__PURE__ */ Fe(Oe, { injectFirst: !0, children: /* @__PURE__ */ Se(Be, { theme: c, children: [
    /* @__PURE__ */ Fe(Ae, {}),
    r
  ] }) });
}
export {
  $0 as default,
  x0 as makeCustomTheme
};
//# sourceMappingURL=index.es.js.map
