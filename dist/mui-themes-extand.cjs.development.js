'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var material = require('@mui/material');
var styles = require('@mui/material/styles');

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
  var theme = styles.createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  return theme;
};
function ThemeProvider(_ref) {
  var children = _ref.children,
    name = _ref.name,
    theme = _ref.theme;
  var customTheme = React.useMemo(function () {
    return name || !theme ? makeCustomTheme(name) : theme;
  }, [name, theme]);
  return /*#__PURE__*/React__default.createElement(styles.StyledEngineProvider, {
    injectFirst: true
  }, /*#__PURE__*/React__default.createElement(styles.ThemeProvider, {
    theme: customTheme
  }, /*#__PURE__*/React__default.createElement(material.CssBaseline, null), children));
}

exports.default = ThemeProvider;
//# sourceMappingURL=mui-themes-extand.cjs.development.js.map
