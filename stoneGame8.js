const stones1 = [2, 1] // true - Bob loses
const stones2 = [2] // false - Bob wins
const stones3 = [5, 1, 2, 4, 3] // false - Bob wins
const stones4 = [1, 2, 3, 3] // true - Bob loses
const stones5 = [2, 3] // false - Bob wins
const stones6 = [19, 2, 17, 20, 7, 17] // true - Bob loses / Alice Wins
const stones7 = [2, 3, 1] // false - Bob wins
const stones8 = [15, 20, 10, 13, 14, 15, 5, 2, 3] // false - Bob wins
const stones9 = [20, 3, 20, 17, 2, 12, 15, 17, 4] // true - Bob loses
const stones10 = [1, 11, 12, 17, 6] // true - Bob loses
const stones11 = [
	77, 74, 12, 63, 95, 23, 19, 91, 48, 87, 26, 22, 21, 30, 41, 10, 22, 80, 14, 36, 62, 29, 13, 3, 15, 47, 71, 1, 95, 21, 43, 84, 62, 70, 10, 86, 70,
	9, 38, 30, 51, 32, 75, 87, 73, 8, 54, 64, 35, 22, 68, 75, 4, 59, 69, 82, 27, 9, 20, 32, 64, 59, 58, 48, 32, 21, 15, 20, 75,
] // true - Bob loses

// stonesMod = 1, 1, 1, 0, 1, 2, 1, 0, 1
// stonesMod = 1, 1, 1, 1, 1, 1

// 2, 0, 0, 1
/*
1 true
2 false
3 false
4 true
5 false
6 true
7 false
8 false
9 true
10 true
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
	let Alice = true

	if (stones.length == 1) {
		return !Alice // bob wins
	}

	let ones = 0
	let twos = 0
	let zeroes = 0
	const modStones = stones.map((s) => {
		if (s % 3 == 1) {
			ones++
		}
		if (s % 3 == 2) {
			twos++
		}
		if (s % 3 == 0) {
			zeroes++
		}
		return s % 3
	})
	modStones.sort()

	if (ones == 0 || twos == 0) {
		return !Alice // bob wins
	}

	let minMod = ones > twos ? 2 : 1
	// if only one minMod and an odd number of zeroes, Alice needs to pick the max mod
	if ((ones == 1 || twos == 1) && zeroes % 2 != 0) {
		minMod = ones < twos ? 2 : 1
	}

	let modStonesLength = modStones.length

	let addedStone = false
	let removedStones = 0
	let x = 1
	// First turns
	while (x++ <= 2) {
		modStonesLength = modStones.length
		for (let i = 0; modStonesLength > 0; i++) {
			if (modStones[i] == minMod) {
				removedStones += modStones[i]
				modStones.splice(i, 1) // overwrites array, therefore changing length
				addedStone = true
				break
			} else if (!Alice && modStones[i] == 0) {
				modStones.splice(i, 1) // overwrites array, therefore changing length
				addedStone = true
				break
			}
			modStonesLength--
		}
		//bob's turn and he coudn't add a viable stone
		if (!Alice && !addedStone) {
			return !Alice // Alice wins
		}

		Alice = !Alice
		addedStone = false
	}

	while (modStones.length > 0) {
		addedStone = false
		modStonesLength = modStones.length

		// checking for valid stone &&
		// adding chosen stone value to removedStones &&
		// removing chosen stone from stones array
		for (let i = 0; modStonesLength > 0; i++) {
			// if they add a stone that makes removedStones disivisble by 3 that person loses
			if ((removedStones + modStones[i]) % 3 != 0) {
				removedStones += modStones[i]
				modStones.splice(i, 1) // overwrites array, therefore changing length
				addedStone = true
				break
			}
			modStonesLength--
		}

		if (!addedStone) {
			return !Alice // true = Alice, false = Bob, current person's turn
		}

		// if it's the end of Bobs turn and there's only one remaining stone, Alice will lose
		// early out option (one loop sooner)
		if (!Alice && modStones.length == 1 && addedStone) {
			return Alice
		}

		// bob's turn, no more stones, removedStones not divisible by 3 => Bob wins, return false
		if (!Alice && modStones.length == 0 && removedStones % 3 != 0) {
			return Alice
		}

		Alice = !Alice
	}
}

//- If length of array is odd OR  if  sum of array is divisible by 3 bob wins  - return false-

// -Neither can pick a stone that is divible by three nor can the stone make the sum of the removed stones divisible by 3-
// - Bobs turn - If there are no more stones and bob takes the last stone and the removedStones is not divisible by 3  - Bob  Wins (return false)-
// - Bobs turn - Else if the sum of removedStones IS divisble by 3 - Bob Loses (return true) -
// - Alices turn - If the length of the array is 1  - Bob wins (return false) -
//

// console.log(1, stoneGameIX(stones1))
// console.log(2, stoneGameIX(stones2))
// console.log(3, stoneGameIX(stones3))
// console.log(4, stoneGameIX(stones4))
// console.log(5, stoneGameIX(stones5))
// console.log(6, stoneGameIX(stones6))
// console.log(7, stoneGameIX(stones7))
// console.log(8, stoneGameIX(stones8))
// console.log(9, stoneGameIX(stones9))
// console.log(10, stoneGameIX(stones10))
console.log(11, stoneGameIX(stones11))
