//[1,2,3,4,5,6,7,8,9,10]  chunkLen = 4
export function chunk(arr, size) {
  if (!Array.isArray(arr) || arr.length == 0 || Number.isNaN(+size)) {
    return []
  }

  let chunkLen = Math.ceil(arr.length / size)
  let chunkIndex = 0
  let index = 0
  let result = []
  while (chunkIndex < chunkLen) {
    result[chunkIndex++] = arr.slice(index, (index += size)) //0-3 3-6
  }
  return result
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
