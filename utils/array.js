export function createDynamicArray(number) {
  if (!isNaN(number)) {
    return Array.from(Array(number).keys());
  }
}
