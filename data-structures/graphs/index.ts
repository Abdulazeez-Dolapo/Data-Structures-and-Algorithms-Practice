type Connection = string[] | number[]
export type Node = string | number

class Graph {
	numberOfNodes: number
	adjacentList: object

	constructor() {
		this.numberOfNodes = 0
		this.adjacentList = {}
	}

	addNode(node: Node): void {
		this.adjacentList[node] = []
		this.numberOfNodes++
	}

	addEdge(node1: Node, node2: Node): void {
		const firstNode = this.adjacentList[node1]
		const secondNode = this.adjacentList[node2]

		firstNode.push(node2)
		secondNode.push(node1)
	}

	showConnections(): void {
		const allNodes: string[] = Object.keys(this.adjacentList)

		for (let node of allNodes) {
			let nodeConnections: Connection = this.adjacentList[node]
			let connections = ""

			for (let vertex of nodeConnections) {
				connections += vertex + " "
			}

			console.log(node + "--->" + connections)
		}
	}
}
