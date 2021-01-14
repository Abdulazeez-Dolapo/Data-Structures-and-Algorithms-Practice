type Nullable<Type> = Type | null
type Value = number | string

interface StackType {
	top: Nullable<Node>
	bottom: Nullable<Node>
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

class Stack {
	top: Nullable<Node>
	bottom: Nullable<Node>
	length: number

	constructor() {
		this.top = null
		this.bottom = null
		this.length = 0
	}

	peek(): Nullable<Node> {
		/*
		 * Notes: Lets you see the top node
		 */

		return this.top
	}

	push(value: Value): StackType {
		/*
		 * Notes: Adds an item to a stack
		 */

		const newNode = new Node(value)
		const currentTop = this.top
		this.top = newNode
		this.top.next = currentTop

		if (this.length === 0) {
			this.bottom = newNode
		}

		this.length++
		return this
	}

	pop(): StackType {
		/*
		 * Notes: Removes item from a stack
		 */

		if (this.length === 0) return undefined

		if (this.length === 1) {
			this.top = null
			this.bottom = null
			this.length = 0

			return this
		}

		const currentTop = this.top
		this.top = currentTop.next
		this.length--

		return this
	}

	isEmpty(): Boolean {
		/*
		 * Notes: Checks if stack is empty
		 */

		return this.top === null
	}
}

const myStack = new Stack()
console.log(myStack.isEmpty())
myStack.push("google")
myStack.push("apple")
myStack.push("netflix")
// myStack.push("facebook")
console.log(myStack.push("amazon"))
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.isEmpty())
