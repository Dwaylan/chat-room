// Bundling imports from src/index.js into one file
const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/chat.js", "./src/app.js", "./src/ui.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  watch: true,
};
