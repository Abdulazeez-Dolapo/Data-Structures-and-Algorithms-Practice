const firstRecurringCharacter = array => {
	let checkedCharacters = {}

	for (let i = 0; i < array.length; i++) {
		const element = array[i]

		if (checkedCharacters[element]) {
			return element
		}

		checkedCharacters[element] = true
	}
}

console.log(firstRecurringCharacter([1, 2, 3, 2, 3, 4]))
