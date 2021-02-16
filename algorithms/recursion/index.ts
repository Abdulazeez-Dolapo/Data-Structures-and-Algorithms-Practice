let counter: number = 0

function inception(): string {
	if (counter > 3) {
		return "done"
	}

	counter++
	return inception()
}

function findFactorial(number: number): number {
	if (number === 2) {
		return number
	}

	return number * findFactorial(number - 1)
}

function fibonacciRecursion(n: number): number {
	if (n < 2) {
		return n
	}

	return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2)
}

console.log(fibonacciRecursion(4))
