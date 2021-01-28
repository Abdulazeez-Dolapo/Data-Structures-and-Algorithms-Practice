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

	remove(value: number) {
		if (!this.root) {
			return false
		}

		let currentNode = this.root
		let parentNode: Node = null

		while (currentNode) {
			if (currentNode.value > value) {
				parentNode = currentNode
				currentNode = currentNode.left
			} else if (currentNode.value < value) {
				parentNode = currentNode
				currentNode = currentNode.right
			} else if (currentNode.value === value) {
				// We have a match

				// Option 1: No right Child
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left
					} else {
						// if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left
						}

						// if parent < current value, make current left child a right child of parent
						if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left
						}
					}
				}

				// Option 2: Right child which doesn't have a left child
				else if (currentNode.left === null) {
					if (parentNode === null) {
						this.root = currentNode.left
					} else {
						currentNode.right.left = currentNode.left

						// if parent > current value, make right child of the left a parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right
						}

						// if parent < current value, make right child a right child of the parent
						else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right
						}
					}
				}

				// Option 3: Right child that has a left child
				else if (currentNode.left === null) {
					// find the right child's left most child
					let leftMost = currentNode.right.left
					let leftMostParent = currentNode.right

					while (leftMost.left !== null) {
						leftMostParent = leftMost
						leftMost = leftMost.left
					}

					// Parent's left subtree is now leftmost's right subtree
					leftMostParent.left = leftMost.right
					leftMost.left = currentNode.left
					leftMost.right = currentNode.right

					if (parentNode === null) {
						this.root = leftMost
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftMost
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftMost
						}
					}
				}

				return true
			}
		}
	}
}

const tree = new BinarySearchTree()

function traverse(node: Node) {
	const tree: Node = { value: node.value }

	tree.left = node.left === null ? null : traverse(node.left)
	tree.right = node.right === null ? null : traverse(node.right)

	return tree
}
