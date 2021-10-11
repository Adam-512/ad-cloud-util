export function baseFlatten(arr, depth, result = []) {
  if (arr.length === 0) {
    return []
  }
  for (const value of arr) {
    if (depth > 0 && Array.isArray(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, result)
      } else {
        result.push(...value)
      }
    } else {
      result.push(value)
    }
  }
  return result
}

//过滤数组元素
export function strictBaseFlatten(arr, depth, strict = false, predicate, result = []) {
  predicate = predicate || Array.isArray
  if (arr.length === 0) {
    return []
  }
  for (const value of arr) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, result)
      } else {
        result.push(...value)
      }
    }
    //limit push value
    else if (!strict) {
      result.push(value)
    }
  }
  return result
}
