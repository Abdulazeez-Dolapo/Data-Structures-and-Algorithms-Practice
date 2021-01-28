type Nullable<Type> = Type | null

export class Node {
	left?: Nullable<Node>
	right?: Nullable<Node>
	value: number

	constructor(value) {
		this.left = null
		this.right = null
		this.value = value
	}
}

class BinarySearchTree {
	root: Nullable<Node>

	constructor() {
		this.root = null
	}

	insert(value: number) {
		const newNode = new Node(value)

		if (this.root === null) {
			this.root = newNode
			return this
		}

		let currentNode = this.root

		while (true) {
			if (currentNode.value > value) {
				// witch to left side of tree
				if (!currentNode.left) {
					currentNode.left = newNode
					return this
				}

				currentNode = currentNode.left
			} else {
				// Switch to right side of tree
				if (!currentNode.right) {
					currentNode.right = newNode
					return this
				}

				currentNode = currentNode.right
			}
		}
	}

	lookup(value: number): Node {
		if (!value || value === 0) {
			return null
		}

		if (!this.root) {
			return null
		}

		let currentNode = this.root

		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode
			}

			if (currentNode.value > value) {
				currentNode = currentNode.left
			} else {
				currentNode = currentNode.right
			}
		}

		return null
	}
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(445))
console.log(tree.lookup(20))

// console.log(JSON.stringify(traverse(tree.root)))

function traverse(node: Node) {
	const tree: Node = { value: node.value }

	tree.left = node.left === null ? null : traverse(node.left)
	tree.right = node.right === null ? null : traverse(node.right)

	return tree
}
