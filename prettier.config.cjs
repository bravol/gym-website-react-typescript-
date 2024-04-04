import { Module, createRequire } from "module";

Module.exports = {
  plugins: [createRequire("prettier-plugin-tailwindcss")],
};
