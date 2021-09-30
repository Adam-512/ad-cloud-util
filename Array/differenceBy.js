/* 
  @param {Array} arr to check
  @param {...Array} arr to exclude
  @param {Function} a iteratee invoke per element
*/
function differenceBy(array,...values){
	let iteratee = Last(values)
	if(isArrayLikeObject(iteratee)){
		iteratee = undefined
	}
}