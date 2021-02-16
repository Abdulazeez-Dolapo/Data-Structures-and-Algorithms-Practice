/**
 * Selection sort works by iterate through array and moving the smallest number to the beginning of the array.
 * Iterate through again and move the next smallest number to the second index.
 * Keep iterating until array is fully sorted.
 *
 * Time complexity => O(n^2)
 * Space complexity => O(1)
 */

const selectionSort = (arrayToSort: number[]): number[] => {
	let sortedArray = [...arrayToSort]
	let maxIndex = arrayToSort.length
	// index to insert the next lowest number in the array
	let nextInsertionIndex = 0

	while (true) {
		if (nextInsertionIndex < maxIndex) {
			// current smallest number
			let smallestNumber = sortedArray[nextInsertionIndex]
			// index of current smallest number
			let smallestNumberIndex = nextInsertionIndex

			for (let i = nextInsertionIndex; i < maxIndex; i++) {
				const element = sortedArray[i]
				// If element is lower than current smallest number, smallest number becomes element.
				if (element < smallestNumber) {
					smallestNumber = element
					smallestNumberIndex = i
				}
			}

			// remove smallest number from the sorted array
			sortedArray.splice(smallestNumberIndex, 1)
			// Insert smallest number into its right index
			sortedArray.splice(nextInsertionIndex, 0, smallestNumber)

			nextInsertionIndex++
		} else break
	}

	return sortedArray
}

// const numbers = [1, 3, 4, 2, 6, 8, 5]

// console.log(selectionSort(numbers))
