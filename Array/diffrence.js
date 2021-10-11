const Large_Size = 200

// 数组元素是简单类型
export function simpleDifference(arr, targetArr) {
  let result = []
  if (!arr.length) {
    return []
  }
  if (!targetArr.length) {
    return arr
  }

  if (targetArr.length > Large_Size) {
    let cache = new Map()
    targetArr.map((v) => cache.set(v))
    for (let value of arr) {
      if (!cache.has(value)) {
        result.push(value)
      }
    }
  } else {
    for (let value of arr) {
      if (!targetArr.includes(value)) {
        result.push(value)
      }
    }
  }

  return result
}

// console.log(simpleDifference([1, 2, 3], [3, 4]))

//数组元素是复杂类型，或者传入function来处理每个元素
export function differenceBy(arr, targetArr, iteretee) {
  let result = []
  let values = []
  let itera = iteretee
  let isCommon = true
  if (!arr.length) {
    return []
  }
  if (!targetArr.length) {
    return arr
  }

  if (iteretee) {
    //function或指定某个字段
    iteretee =
      typeof iteretee == 'function'
        ? iteretee
        : function (obj) {
            return obj[itera]
          }
    values = targetArr.map((v) => iteretee(v))
  }

  if (targetArr.length > Large_Size) {
    isCommon = false
    values = new Map()
    targetArr.map((v) => values.set(v))
  }

  for (let value of arr) {
    let computed = iteretee ? iteretee(value) : value
    if (isCommon) {
      if (!values.includes(computed)) {
        result.push(value)
      }
    } else {
      if (!values.has(computed)) {
        result.push(value)
      }
    }
  }

  return result
}

// console.log(differenceBy([1.2, 3.2], [4.2], Math.floor))
// console.log(
//   differenceBy(
//     [
//       { x: 2, y: 3 },
//       { x: 1, y: 6 },
//     ],
//     [{ y: 3 }],
//     'y'
//   )
// )
