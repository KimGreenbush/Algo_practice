// Input: n = 8
// Output: 3
// Explanation: 8 -> 4 -> 2 -> 1

// Input: n = 7
// Output: 4
// Explanation:
// 7 -> 8 -> 4 -> 2 -> 1
// or 7 -> 6 -> 3 -> 2 -> 1

let num1 = 8 // exp 3
let num2 = 7 // exp 4
let num3 = 65535 // exp 17
let num4 = 1234 // exp 14
let num5 = 10000 // exp 16
let num6 = 3 // exp 2

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement2 = function (n) {

    let counter = 0

	while (n >= 1) {
		if (n == 1) return counter
		if (n % 2 == 0) n /= 2 // if n is even
		else {
			if (n > 3 && (n + 1) % 4 === 0) {
				// using 4 (an even times an even (2x2) vs an even times an odd (2x3) to minimize operations)
				n += 1
			} else {
				n -= 1
			}
		}
		counter++
	}
}

/// EFFICIENT SOLUTION ( using memoization )

var integerReplacement3 = function (n, memo = {}) {
	if (n in memo) return memo[n]
	if (n === 1) return 0

	let count = 1
	if (n % 2 === 0) {
		count += integerReplacement3(n / 2, memo)
	} else {
		count += Math.min(integerReplacement3(n + 1, memo), integerReplacement3(n - 1, memo))
	}

	memo[n] = count
	return memo[n]
}

console.log(integerReplacement3(num3))
