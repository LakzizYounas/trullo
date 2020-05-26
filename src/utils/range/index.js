/**
 * Function that takes in a start index and end index
 * then return a list of all integers from start to end
 *
 * @param {Number} start
 * @param {Number} end
 */
export default function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
/**
 * Usage exemple:
 * 
 * for (i of range(1, 5)) {
 *  console.log(i);
 * }
 *
 *
 * [...range(1, 5)]
 */