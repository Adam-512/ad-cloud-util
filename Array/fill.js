//填充数组内容
export function fill(arr, value, start, end) {
  if (!Array.isArray(arr)) {
    return arr
  }
  if (arr.length > 0) {
    if (start) {
      let lfArr = arr.slice(0, start)
      let fillArr = new Array(arr.length - start).fill(value)
      if (end) {
        let rtArr = arr.slice(end)
        fillArr = new Array(arr.length - (end - start)).fill(value)
        return lfArr.concat(fillArr).concat(rtArr)
      }
      return lfArr.concat(fillArr)
    }
    return new Array(arr.length).fill(value)
  }
}

console.log(fill([4, 6, 8, 6, 10], '*', 1, 3))
