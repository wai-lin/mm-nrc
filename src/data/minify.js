const fs = require('fs');
const path = require('path');

const NrcData = require('./NRC_Data.json');

fs.writeFileSync(
  path.resolve(__dirname, './NRC_Data.json'),
  JSON.stringify(NrcData, null, 0)
);
