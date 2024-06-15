import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider as ThemeProvider$1, createTheme } from '@mui/material/styles';

function getTheme(name) {
  var theme = require("./mobimed");
  try {
    theme = require("./" + name);
  } catch (error) {
    console.log(" error getTheme", error);
  }
  return theme["default"];
}

var makeCustomTheme = function makeCustomTheme(name) {
  var _getTheme = getTheme(name),
    palette = _getTheme.palette,
    typography = _getTheme.typography,
    componentsOverride = _getTheme.componentsOverride;
  var themeOptions = {
    palette: palette,
    typography: typography
  };
  var theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  return theme;
};
function ThemeProvider(_ref) {
  var children = _ref.children,
    name = _ref.name,
    theme = _ref.theme;
  var customTheme = useMemo(function () {
    return name || !theme ? makeCustomTheme(name) : theme;
  }, [name, theme]);
  return /*#__PURE__*/React.createElement(StyledEngineProvider, {
    injectFirst: true
  }, /*#__PURE__*/React.createElement(ThemeProvider$1, {
    theme: customTheme
  }, /*#__PURE__*/React.createElement(CssBaseline, null), children));
}

export default ThemeProvider;
//# sourceMappingURL=mui-themes-extand.esm.js.map
