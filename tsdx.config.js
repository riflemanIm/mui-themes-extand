const copy = require("rollup-plugin-copy");
const bundleSize = require("rollup-plugin-bundle-size");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  rollup(config) {
    config.plugins.push(bundleSize());
    // copy decleration file over
    config.plugins.push(
      copy({ targets: [{ src: "src/index.d.ts", dest: "dist" }] })
    );
    config.plugins.push(
      postcss({
        modules: true
      })
    );

    return config;
  }
};
