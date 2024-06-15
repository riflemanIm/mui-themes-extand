export default function getTheme(name?: string) {
  let theme = require("./mobimed");
  try {
    theme = require(`./${name}`);
  } catch (error) {
    console.log(" error getTheme", error);
  }

  return theme.default;
}
