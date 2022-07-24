const values = [8, 1, 5, 2, 6]
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
	let max = 0

	for (let i = 0; i < values.length; i++) {
		for (let j = i + 1; j < values.length; j++) {
			let output = values[i] + values[j] + i - j
			if (output > max) {
				max = output
			}
		}
	}
	return max
}

// EFFICIENT SOLUTIONS
// hold onto highest value {left} for comparison
// so that you don't have to nest loops
const values2 = [1, 8, 10, 2, 6]
var maxScoreSightseeingPair2 = function (values) {
	let left = values[0]
    let max = 0

	for (let i = 1; i < values.length; i++) {
		max = Math.max(max, left + values[i] - i)
		console.log(`${left} + ${values[i]} - ${i} = ${left + values[i] - i}`)
		left = Math.max(left, values[i] + i)
	}
	return max
}
