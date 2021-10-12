//从前面删除数组元素个数
export function drop(arr, len) {
  if (!Array.isArray(arr) || Number.isNaN(+len) || len < 1) {
    return arr
  }

  new Array(len).map(() => arr.shift())
  return arr
}

// console.log(drop([1, 2, 3, 4, 5], 'a'))

//从后面删除数组元素个数
export function dropRight(arr, len) {
  if (!Array.isArray(arr) || Number.isNaN(+len) || len < 1) {
    return arr
  }
  new Array(len).map(() => arr.pop())
  return arr
}

// console.log(dropRight([1, 2, 3, 4, 5], 2))

//从后面删除版本二
export function dropRightV2(arr, len) {
  if (!Array.isArray(arr) || Number.isNaN(+len) || len < 1) {
    return arr
  }
  arr.length = arr.length - len
  return arr
}

console.log(dropRightV2([1, 2, 3, 4, 5], 1))
