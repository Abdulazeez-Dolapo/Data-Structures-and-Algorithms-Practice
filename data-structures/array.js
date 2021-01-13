class MyArray {
	constructor() {
		this.data = {}
		this.length = 0
	}

	// get
	get(index) {
		return this.data[index]
	}

	// push
	push(item) {
		this.data[this.length] = item
		this.length++
		return this.length
	}

	// pop
	pop() {
		const lastItem = this.data[this.length - 1]
		delete this.data[this.length - 1]
		this.length--
		return lastItem
	}

	// remove
	remove(index) {
		delete this.data[this.index]
		this.reorderItems(index)
		this.length--
	}

	// reorder items
	reorderItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length - 1]
	}

	// forEach
	forEach(callback) {
		for (let index = 0; index < this.length; index++) {
			callback(this.data[index], index)
		}
	}

	// map
	map(callback) {
		let newArray = []
		for (let index = 0; index < this.length; index++) {
			newArray[index] = callback(this.data[index], index, this.data)
		}

		return newArray
	}

	// filter
	filter(callback) {
		let newArray = []
		for (let index = 0; index < this.length; index++) {
			if (callback(this.data[index], index, this.data)) {
				newArray[newArray.length] = this.data[index]
			}
		}

		return newArray
	}
}

const array = new MyArray()

array.push(3)
array.push(4)
array.push(54)
array.push(23)
array.push(22)
array.push(58)

array.pop()

array.remove(2)

array.forEach((item, index) => {
	console.log({ item, index })
})

console.log(array.map(item => item * 2))

console.log(array.filter(item => item > 20))

console.log(array)
