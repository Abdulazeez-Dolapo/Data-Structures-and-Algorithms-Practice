class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}

	_hash(key) {
		let hash = 0

		for (let index = 0; index < key.length; index++) {
			hash = (hash + key.charCodeAt(index) * index) % this.data.length
		}

		return hash
	}

	set(key, value) {
		let address = this._hash(key)

		if (!this.data[address]) {
			this.data[address] = []
		}

		this.data[address].push([key, value])
		return this.data
	}

	get(key) {
		let address = this._hash(key)
		const currentBucket = this.data[address]

		if (currentBucket) {
			for (let index = 0; index < currentBucket.length; index++) {
				if (currentBucket[index][0] === key) {
					return currentBucket[index][1]
				}
			}
		}

		return undefined // This line is kinda redundant since Functions explicitly return undefined if there are no return statements
	}

	keys() {
		const currentData = this.data
		// initialize array to store keys
		const allKeys = []
		// Check if data is empty
		if (!currentData.length) {
			return allKeys
		}
		// loop through entire data to get all buckets
		for (let index = 0; index < currentData.length; index++) {
			// if item at current index is undefined or null, move to the next index
			if (!currentData[index]) continue
			// check if bucket has nested arrays in it
			if (currentData[index]) {
				// if yes, loop through the array and push keys
				for (let j = 0; j < currentData[index].length; j++) {
					allKeys.push(currentData[index][j][0])
				}
			} else {
				// if no, push key to array
				allKeys.push(currentData[index][0])
			}
		}

		return allKeys
	}

	/**
		Tutor's solution below.
		Didn't work in some test cases.
      Mine worked in all cases I threw at it but is also more expensive to run

      Time complexity for mine is O(n). I'll look into optimizing it better
		Time complexity for tutor's is O(1)
		
		I'm not really sure about my assessment of the space complexity values
		It's something I have not fully understood yet

      Space complexity is basically the same, O(1)
      But that'll likely mean I have to remove my currentData variable
   **/

	/**
		keys() {
			const currentData = this.data
			const allKeys = []
			for (let index = 0; index < currentData.length; index++) {
				if (currentData[index]) {
					allKeys.push(currentData[index][0][0])
				}
			}

			return allKeys
		}
	 **/
}

const myHashTable = new HashTable(3)

myHashTable.set("grapes", 10000)
myHashTable.set("apple", 54)
myHashTable.set("oranges", 4)
myHashTable.set("pineapple", 4)

console.log(myHashTable.get("oranges"))

console.log(myHashTable.get("apple"))

console.log(myHashTable.keys())

console.log(myHashTable.data)
