const boxes1 = [1, 2, 3, 45, 5]
const boxes2 = [42, 45, 55, 45, 50]

const logAllPairs = array => {
	array.forEach(arr => {
		array.forEach(ar => {
			console.log(arr, ar)
		})
	})
}

const confirmPairs = (arr1, arr2) => {
	let arr1Object = {}
	arr1.forEach(item => {
		arr1Object[item] = true
	})

	for (let i = 0; i < arr2.length; i++) {
		const element = arr2[i]
		if (arr1Object[element]) {
			return true
		}
	}

	return false
}

console.log(confirmPairs(boxes1, boxes2))

// logAllPairs(boxes)
