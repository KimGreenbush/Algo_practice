/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
	let max = -1
	let min = Number.MAX_VALUE

	for (let num of nums) {
		if (num < min) min = num
		else max = Math.max(max, num - min)
	}

	return max !== 0 ? max : -1
}
