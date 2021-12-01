# Myanmar National Registration Card JSON Data

### Installation

```sh
npm install mm-nrc
# OR
yarn add mm-nrc
```

### Example

[![Edit mm-nrc_example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mm-nrc-example-kx4wl?fontsize=14&hidenavigation=1&theme=dark&view=editor)

### Documentation

#### ! Important

There are two `OUKAMA` data in this json data. You can filter out the one you need when getting the township values. Otherwise there will be two `OUKAMA` in your application.

```json
{
  "id": "KZFQuHHRo7fanPlq",
  "code": "SHWEPAUKKAN",
  "short": {
    "en": "OUKAMA",
    "mm": "ဥကမ"
  },
  "name": {
    "en": "SHWE PAUK KAN",
    "mm": "ရွှေပေါက်ကံ"
  },
  "stateId": "Zvxm3m8cAwCeDgz1",
  "stateCode": "12"
}

{
  "id": "oAIpEryyl6pOobUS",
  "code": "NORTHOKKALAPA",
  "short": {
    "en": "OUKAMA",
    "mm": "ဥကမ"
  },
  "name": {
    "en": "NORTH OKKALAPA",
    "mm": "မြောက်ဥက္ကလာ"
  },
  "stateId": "Zvxm3m8cAwCeDgz1",
  "stateCode": "12"
}
```

##### Functions

```ts
/** get all nrc raw data */
function getNrcData(): {
  nrcStates: NrcState[];
  nrcTownships: NrcTownship[];
  nrcTypes: NrcType[];
};

/** get all nrc raw states */
function getNrcStates(): NrcState[];

/** get all nrc raw townships */
function getNrcTownships(): NrcTownship[];

/** get all nrc raw types */
function getNrcTypes(): NrcType[];

/** find single nrc state by it's id */
function getNrcStateById(id: string): NrcState;

/** find single nrc township by it's id */
function getNrcTownshipById(id: string): NrcTownship;

/** find single nrc type by it's id */
function getNrcTypeById(id: string): NrcType;

/** find all nrc townships with state id */
function getNrcTownshipsByStateId(stateId: string): NrcTownship[];
```

##### Types

```ts
type NrcState = {
  id: string;
  code: string;
  number: {
    en: string;
    mm: string;
  };
  name: {
    en: string;
    mm: string;
  };
};

type NrcTownship = {
  id: string;
  code: string;
  short: {
    en: string;
    mm: string;
  };
  name: {
    en: string;
    mm: string;
  };
  stateId: string;
  stateCode: string;
};

type NrcType = {
  id: string;
  name: {
    en: string;
    mm: string;
  };
};
```
