import NRCData from "../assets/NRC_Data.json";

export type NrcState = {
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
export type NrcTownship = {
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
export type NrcType = {
  id: string;
  name: {
    en: string;
    mm: string;
  };
};

/** get all nrc raw data */
export function getNrcData(): {
  nrcStates: NrcState[];
  nrcTownships: NrcTownship[];
  nrcTypes: NrcType[];
} {
  return NRCData;
}

/** get all nrc raw states */
export function getNrcStates(): NrcState[] {
  return NRCData.nrcStates;
}

/** get all nrc raw townships */
export function getNrcTownships(): NrcTownship[] {
  return NRCData.nrcTownships;
}

/** get all nrc raw types */
export function getNrcTypes(): NrcType[] {
  return NRCData.nrcTypes;
}

/** find single nrc state by it's id */
export function getNrcStateById(id: string): NrcState {
  return NRCData.nrcStates.find((state) => state.id === id) as NrcState;
}

/** find single nrc township by it's id */
export function getNrcTownshipById(id: string): NrcTownship {
  return NRCData.nrcTownships.find(
    (township) => township.id === id
  ) as NrcTownship;
}

/** find single nrc type by it's id */
export function getNrcTypeById(id: string): NrcType {
  return NRCData.nrcTypes.find((type) => type.id === id) as NrcType;
}

/** find all nrc townships with state id */
export function getNrcTownshipsByStateId(stateId: string): NrcTownship[] {
  return NRCData.nrcTownships.filter(
    (township) => township.stateId === stateId
  );
}
