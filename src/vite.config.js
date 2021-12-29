const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "mm-nrc",
      fileName: (format) => `mm-nrc.${format}.js`,
    },
  },
});
