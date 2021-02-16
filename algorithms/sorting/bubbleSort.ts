/**
 * Bubble sort works by traversing through the array and comparing each element with the next one.
 * If next element is less than the current element, swap their positions.
 * keep traversing through the array until it is completely sorted.
 *
 * Time complexity => O(n^2)
 * Space complexity => O(1)
 */
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
