const copy = require("rollup-plugin-copy");
const bundleSize = require("rollup-plugin-bundle-size");
// let static_files = require("rollup-plugin-static-files");
// const url = require("rollup-plugin-url");

module.exports = {
  rollup(config) {
    config.plugins.push(bundleSize());
    // copy decleration file over
    config.plugins.push(
      copy({ targets: [{ src: "src/index.d.ts", dest: "dist" }] })
    );
    // config.plugins.push(
    //   static_files({
    //     include: ["./fonts"]
    //   })
    // );
    // config.plugins.push(
    //   url({
    //     incude: ["**/*.ttf", "**/*.eot", "**/*.woff", "**/*.woff2"],
    //     limit: 0
    //   })
    // );
    return config;
  }
};
