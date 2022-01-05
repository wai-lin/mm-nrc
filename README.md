# Myanmar National Registration Card JSON Data and Utils Helpers

### Installation

```sh
npm install mm-nrc
# OR
yarn add mm-nrc
```

### Documentation

- [Website](https://wai-lin.gitbook.io/mm-nrc/)

#### ! Important

States has `NAY PYI TAW` as `9*` which is not needed in NRC. You may use it as you needed.

```json
{
  "id": "sH0ybsmxNuxmeOT_",
  "code": "NAYPYITAW",
  "number": { "en": "9*", "mm": "၉*" },
  "name": { "en": "NAYPYITAW", "mm": "နေပြည်တော်" }
}
```

When using the library as NRC input, you also need to include NayPyiTaw townships as Mandalay townships.

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

#### Helpers

````ts
/**
 * convert english nrc to myanmar nrc
 *
 * ```js
 * const mmNrc = convertToMmNrc('12/TAMANA(N)112233')
 * console.log(mmNrc) // ၁၂/တမန(နိုင်)112233
 * ```
 */
function convertToMmNrc(engNrc: string): string;

/**
 * convert myanmar nrc to english nrc
 *
 * ```js
 * const mmNrc = convertToEnNrc('၁၂/တမန(နိုင်)112233')
 * console.log(mmNrc) // 12/TAMANA(N)112233
 * ```
 */
function convertToEnNrc(mmNrc: string): string;

/** regex to check if the Nrc is correct pattern */
const pattern = {
  en: /\d{1,2}\/[A-Z]{6,6}\((N|E|P|T|R|S)\)\d{5,6}/,
  mm: /[၀-၉]{1,2}\/[က-အ]{3,3}\((နိုင်|ဧည့်|ပြု|သာသနာ|ယာယီ|စ)\)([၀-၉]{5,6}|[0-9]{5,6})/,
};

/**
 * destructure the provided nrc string
 *
 * ```js
 * const { nrcNumber, nrcType, stateNo, townshipCode } = splitNrc('12/TAMANA(N)112233')
 * console.log({
 *  nrcNumber, // 112233
 *  nrcType, // N
 *  stateNo, // 12
 *  townshipCode, // TAMANA
 * })
 * ```
 */
function splitNrc(nrc: string): {
  stateNo: string;
  townshipCode: string;
  nrcType: string;
  nrcNumber: string;
};
````
