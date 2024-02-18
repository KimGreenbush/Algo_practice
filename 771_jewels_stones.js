// #771
/**
 * @param {string} j
 * @param {string} s
 * @return {number}
 */
var numJewelsInStones = function (j, s) {
	let jewels = {}
	let sum = 0

	for (let i = 0; i < j.length; i++) {
		jewels[j[i]] = 0
	}

	for (let i = 0; i < s.length; i++) {
		if (jewels.hasOwnProperty(s[i])) {
			jewels[s[i]] += 1
		}
	}

	for (let jewel in jewels) {
		sum += jewels[jewel]
	}
	return sum
}
