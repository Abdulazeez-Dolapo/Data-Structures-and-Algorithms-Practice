type Nullable<Type> = Type | null
type Value = number | string

interface QueueType {
	first: Nullable<Node>
	last: Nullable<Node>
	length: number
}

export class Node {
	value: Value
	next: Nullable<Node>

	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Queue {
	first: Nullable<Node>
	last: Nullable<Node>
	length: number

	constructor() {
		this.first = null
		this.last = null
		this.length = 0
	}

	peek(): Nullable<Node> {
		/*
		 * Notes: Lets you see the first item in a queue
		 */

		return this.first
	}

	enqueue(value: Value): QueueType {
		/*
		 * Notes: Adds an item to a queue
		 */

		const newNode = new Node(value)

		if (this.length === 0) {
			this.first = newNode
			this.last = this.first
		} else {
			this.last.next = newNode
			this.last = newNode
		}

		this.length++
		return this
	}

	dequeue(): QueueType {
		/*
		 * Notes: Removes item from a queue
		 */

		if (this.length === 0) return undefined

		if (this.length === 1) {
			this.first = null
			this.last = null
			this.length = 0

			return this
		}

		const currentFirst = this.first
		this.first = currentFirst.next
		this.length--

		return this
	}

	isEmpty(): Boolean {
		/*
		 * Notes: Checks if queue is empty
		 */

		return this.first === null
	}
}

const myQueue = new Queue()
// console.log(myQueue.isEmpty())
myQueue.enqueue("google")
myQueue.enqueue("apple")
myQueue.enqueue("netflix")
myQueue.enqueue("facebook")
// console.log(myQueue.enqueue("amazon"))
console.log(myQueue.dequeue())
console.log(myQueue.peek())
// console.log(myQueue.isEmpty())
