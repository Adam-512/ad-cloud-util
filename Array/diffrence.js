/* 
    find all value not in targetValues
    arr {Array} source array
    targetArr {Array} array compare to
    comparator {Funtion} condition of pick value
 */
const Large_Array_Size = 200
function baseDifference(arr=[], targetArr=[], comparator) {
	if (!arr.length) {
		return []
	}
	let includesFunc
	let result = []
	let isCommon = true

	// use Array.indexOf to compare
	if (comparator) {
		isCommon = false
		includesFunc = arrayIncludeWith
	}
	// user Map.has to compare
	else if (arr.length > Large_Array_Size) {
		isCommon = false
		targetArr = new SetCache(arr)
		includesFunc = targetArr.has
	}

	for (let value of arr) {
		console.log(isCommon)
		// common differrence
		if (isCommon) {
			//loadash source code -- why use while loop here,but not Array.includes?
			if(!targetArr.includes(value))
				result.push(value)
		}
		//with comparator or big size compare
		else if (!includesFunc(targetArr, value, comparator)) {
			result.push(value)
		}
	}

	return result
}

function SetCache(arr) {
	this.map = new Map()
	for (let value of arr) {
		this.map.set(value, undefined)
	}
}
SetCache.prototype.has = function (key) {
	this.map.has(key)
}

function arrayIncludeWith(arr, target, comparator) {
	for (let value of arr) {
		if (comparator(value, target)) {
			return true
		}
	}
	return false
}

let res =  baseDifference([9],[1,2,3,4,5,6,7,8])
console.log(res)
