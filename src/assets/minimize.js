const fs = require("fs");
const path = require("path");

const JsonRaw = require("./NRC_Data.json");

fs.writeFileSync(
  path.resolve(__dirname, "./NRC_Data.min.json"),
  JSON.stringify(JsonRaw, null, 0)
);
