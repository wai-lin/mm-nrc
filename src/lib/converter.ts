import { pattern } from "./pattern";
import { splitNrc } from "./splitter";
import { getNrcStates, getNrcTownshipsByStateId, getNrcTypes } from "./nrc";

const nrcStates = getNrcStates();
const nrcTypes = getNrcTypes();

/**
 * convert english nrc to myanmar nrc
 *
 * ```js
 * const mmNrc = convertToMmNrc('12/TAMANA(N)112233')
 * console.log(mmNrc) // ၁၂/တမန(နိုင်)112233
 * ```
 */
export function convertToMmNrc(engNrc: string) {
  if (!pattern.en.test(engNrc)) throw new Error("Invalid english NRC format.");

  const { nrcNumber, nrcType, stateNo, townshipCode } = splitNrc(engNrc);

  const state = nrcStates.find((nState) => nState.number.en === stateNo);

  const stateMm = state ? state.number.mm : stateNo;
  const townshipMm =
    getNrcTownshipsByStateId(state?.id || "").find(
      (nTownship) => nTownship.short.en === townshipCode
    )?.short.mm || townshipCode;
  const typeMm =
    nrcTypes.find((nType) => nType.name.en === nrcType)?.name.mm || nrcType;

  return `${stateMm}/${townshipMm}(${typeMm})${nrcNumber}`;
}

/**
 * convert myanmar nrc to english nrc
 *
 * ```js
 * const mmNrc = convertToEnNrc('၁၂/တမန(နိုင်)112233')
 * console.log(mmNrc) // 12/TAMANA(N)112233
 * ```
 */
export function convertToEnNrc(mmNrc: string) {
  if (!pattern.mm.test(mmNrc)) throw new Error("Invalid myanmar NRC format.");

  const { nrcNumber, nrcType, stateNo, townshipCode } = splitNrc(mmNrc);

  const state = nrcStates.find((nState) => nState.number.mm === stateNo);

  const stateEn = state ? state.number.en : stateNo;
  const townshipEn =
    getNrcTownshipsByStateId(state?.id || "").find(
      (nTownship) => nTownship.short.mm === townshipCode
    )?.short.en || townshipCode;
  const typeEn =
    nrcTypes.find((nType) => nType.name.mm === nrcType)?.name.en || nrcType;

  return `${stateEn}/${townshipEn}(${typeEn})${nrcNumber}`;
}
