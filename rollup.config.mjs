import babel from "rollup-plugin-babel";
//import resolve from "@rollup/plugin-node-resolve";
//import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2"; // For Typescript
//import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    namedExports: {
      "react-js": ["isValidElementType"],
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
      typescript({ useTsconfigDeclarationDir: true }),

      terser(),
    ],
  },
];
