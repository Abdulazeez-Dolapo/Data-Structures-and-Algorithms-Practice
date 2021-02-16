const bubbleSort = (arrayToSort: number[]): number[] => {
	let sortedArray = [...arrayToSort]
	let maxLength = arrayToSort.length

	while (true) {
		if (maxLength > 0) {
			for (let i = 0; i < maxLength; i++) {
				const nextIndex = i + 1
				const firstElement = sortedArray[i]
				const secondElement = sortedArray[nextIndex]

				if (firstElement > secondElement) {
					sortedArray[i] = secondElement
					sortedArray[nextIndex] = firstElement
				}
			}

			maxLength--
		} else break
	}

	return sortedArray
}

const numbers = [1, 3, 4, 2, 6, 8, 5]

console.log(bubbleSort(numbers))
