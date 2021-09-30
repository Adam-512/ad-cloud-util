function chunk(arr = [], size = 1) {
	let _size = +size
	//size>=1
	//arr is array,length>0
	let isArr = Array.isArray(arr)
	let len = arr.length > 0

	let isNaN = Number.isNaN(_size)
	let isSize = +size > 0

	if (!isArr || !len || isNaN || !isSize) {
		return []
	}

	let index = 0,
		resIndex = 0,
		resArr = []

	let chunkLen = Math.floor(arr.length / _size) || 1
	while (resIndex < chunkLen) {
		resArr[resIndex] = arr.slice(index * size, size * (index + 1)) //0-3 3-6
		resIndex++
		index++
	}
	return resArr
}

console.log(chunk([1, 2, 3, 4, 5, 6], 3))
console.log(chunk([], -1))
