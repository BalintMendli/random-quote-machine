export function getRandomElement(arr) {
  const n = Math.floor(arr.length * Math.random());
  return arr[n];
}
