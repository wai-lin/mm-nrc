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
export function splitNrc(nrc: string) {
  const [stateNo, townshipCode, nrcType, nrcNumber] = nrc
    .replace("/", ",")
    .replace("(", ",")
    .replace(")", ",")
    .split(",");
  return { stateNo, townshipCode, nrcType, nrcNumber };
}
