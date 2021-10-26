const fs = require('fs');
const path = require('path');
const nanoid = require('nanoid');

const newId = () => nanoid.nanoid(16);

const States = require('./States.original.json');
const Townships = require('./Townships.original.json');
const Types = require('./Types.original.json');

const NRCStates = States.map((state) => ({
  id: newId(),
  code: state.stateCode,
  number: {
    en: state.statePrefix_EN,
    mm: state.statePrefix_MM,
  },
  name: {
    en: state.stateName_EN,
    mm: state.stateName_MM,
  },
}));

const NRCTownships = Townships.map((township) => ({
  id: newId(),
  code: township.townShipCode,
  short: {
    en: township.NRC_EN,
    mm: township.NRC_MM,
  },
  name: {
    en: township.townShip_EN,
    mm: township.townShip_MM,
  },
  stateId: NRCStates.find((state) => state.number.en === township.stateID)?.id,
  stateCode: township.stateID,
})).sort((a, b) => Number(a.stateCode) - Number(b.stateCode));

const NRCTypes = Types.map((type) => ({
  id: newId(),
  name: {
    en: type.en,
    mm: type.mm,
  },
}));

fs.writeFileSync(
  path.resolve(__dirname, 'NRC_Data.json'),
  JSON.stringify({
    nrcTypes: NRCTypes,
    nrcStates: NRCStates,
    nrcTownships: NRCTownships,
  })
);
