export function isArrayLike(value) {
  return value !== null && isLength(value.length) && typeof value !== 'function'
}

export function isObjectLike(value) {
  return typeof value === 'object' && value !== null
}

export function isArrayLikeObject(value) {
  return isArrayLike(value) && isObjectLike(value)
}

//check length property
// des: positive integer
function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 == 0
}

//typeof
//null undefined boolean number string function
console.log(isArrayLikeObject('x'))
