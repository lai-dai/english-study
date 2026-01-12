/**
 * Kiểm tra xem giá trị có phải là mảng hay không
 * @param value
 * @returns
 */
export const isArray = <T>(value: unknown): value is Array<T> =>
  Array.isArray(value)

/**
 * Kiểm tra xem giá trị có phải là object (không phải null, không phải array) hay không
 * @param value
 * @returns
 */
export const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

/**
 * Kiểm tra xem giá trị có phải là function hay không
 * @param value
 * @returns
 */
export const isFunction = (value: unknown): value is Function =>
  typeof value === "function"

/**
 * Kiểm tra xem giá trị có phải là số hay không
 * @param value
 * @returns
 */
export function isNumeric(value: unknown): boolean {
  return (
    (typeof value === "number" && !isNaN(value)) ||
    (typeof value === "string" && value.trim() !== "" && !isNaN(Number(value)))
  )
}

/**
 * Kiểm tra xem giá trị có phải là số không NaN
 * @param value
 * @returns
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value)
}
