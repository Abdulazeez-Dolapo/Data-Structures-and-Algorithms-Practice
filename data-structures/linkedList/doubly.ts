class LinkedListNode {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = new LinkedListNode(value)
		this.tail = this.head
		this.length = 1
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

	traverseToIndex(index) {
		let indexedNode = this.head
		let counter = 0

		while (counter < index) {
			indexedNode = indexedNode.next
			counter++
		}

		return indexedNode
	}

	append(value) {
		const newNode = new LinkedListNode(value)

		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode

		this.length++

		return this.printList()
	}

	prepend(value) {
		const newNode = new LinkedListNode(value)

		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++

		return this.printList()
	}

	insert(index, value) {
		if (index >= this.length) {
			this.append(value)
			return this.printList()
		}

		const newNode = new LinkedListNode(value)

		const nodeBeforeInsertionPoint = this.traverseToIndex(index - 1)

		const nodeAfterInsertionPoint = nodeBeforeInsertionPoint.next

		newNode.prev = nodeBeforeInsertionPoint
		newNode.next = nodeAfterInsertionPoint

		nodeBeforeInsertionPoint.next = newNode

		nodeAfterInsertionPoint.prev = newNode

		this.length++
		return this.printList()
	}

	remove(index) {
		/**
      Notes:
        * Do input validations
          I didn't do it here because I've already done it on the singly file
    **/

		const nodeBeforeDelete = this.traverseToIndex(index - 1)
		const nodeToDelete = nodeBeforeDelete.next
		const nodeAfterDelete = nodeToDelete.next

		nodeBeforeDelete.next = nodeAfterDelete
		nodeAfterDelete.prev = nodeBeforeDelete

		this.length--

		return this.printList()
	}
}

const myLinkedList = new DoublyLinkedList(3)
myLinkedList.append(4)
myLinkedList.prepend(9)
console.log(myLinkedList.append(5))
console.log(myLinkedList.insert(3, 40))
console.log(myLinkedList.remove(3))
console.log(myLinkedList)
