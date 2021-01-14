type Nullable<Type> = Type | null
type NextType = Nullable<number> | ListType

interface ListType {
	value: number
	next: NextType | LinkedListNode
}

interface LinkedListType {
	head: ListType
	tail: ListType
	length: number
}

class LinkedListNode {
	value: number
	next: NextType

	constructor(value: number) {
		this.value = value
		this.next = null
	}
}

class SinglyLinkedList {
	head: ListType
	tail: ListType
	length: number

	constructor(value: number) {
		this.head = {
			value,
			next: null,
		}

		this.tail = this.head
		this.length = 1
	}

	append(value: number): LinkedListType {
		const newNode = new LinkedListNode(value)

		this.tail.next = newNode
		this.tail = newNode
		this.length++

		return this
	}

	prepend(value: number): LinkedListType {
		/** 
		 	Notes:
		 	* next was initially set to null in newNode because of
				JavaScript's copying of objects by reference instead of value.
				It's not fully clear to me how it affects this use case at this time
				so I'll have to look into it later.
		**/
		const newNode = new LinkedListNode(value)

		newNode.next = this.head
		this.head = newNode
		this.length++

		return this
	}

	printList() {
		const array = []
		let currentNode = this.head
		while (currentNode !== null) {
			array.push(currentNode.value)
			currentNode = currentNode.next
		}

		return array
	}

	traverseToIndex(index: number): ListType {
		// Check for params
		let counter = 0
		let currentNode = this.head
		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}

		return currentNode
	}

	insert(index: number, value: number): number[] {
		if (index >= this.length) {
			this.append(value)
			return this.printList()
		}

		const newNode = new LinkedListNode(value)

		// LeaderNode means the node directly before the index or insertion point.
		// nextNode means the node directly after the insertion point.
		const leaderNode = this.traverseToIndex(index - 1)
		const nextNode = leaderNode.next

		leaderNode.next = newNode
		newNode.next = nextNode
		this.length++

		return this.printList()
	}

	remove(index: number): number[] {
		if (index < 0) {
			return undefined
		}

		if (this.length === 1) {
			this.head = {
				value: null,
				next: null,
			}
			this.head = this.tail
			this.length = 0

			return this.printList()
		}

		if (index === 0) {
			const nodeToDelete = this.traverseToIndex(0)
			this.head = nodeToDelete.next

			this.length--
			return this.printList()
		}

		// If input index equals or is greater than the index of the last item on the list
		if (index >= this.length - 1) {
			const nodeBeforeDelete = this.traverseToIndex(this.length - 2)
			nodeBeforeDelete.next = null

			this.length--
			return this.printList()
		}

		const nodeBeforeDelete = this.traverseToIndex(index - 1)
		const nodeToDelete = nodeBeforeDelete.next

		nodeBeforeDelete.next = nodeToDelete.next

		this.length--
		return this.printList()
	}

	reverse() {
		if (this.length === 1) {
			return this.head
		}

		let first = this.head //first = 10
		this.tail = first
		let second = first //first = 10 second = 10

		while (second) {
			const temp = second.next // temp = 5
			second.next = first //
			first = second
			second = temp
		}

		this.head.next = null
		this.head = first

		return this.printList()
	}
}

const myLinkedList = new SinglyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(9)
// myLinkedList.append(19)
// myLinkedList.prepend(2)
// console.log(myLinkedList.insert(3, 30))
// console.log(myLinkedList.remove(1))
console.log(myLinkedList.printList())
console.log(myLinkedList.reverse())
