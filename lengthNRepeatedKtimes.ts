/**
    Constraints:

    2 <= arr.length <= 100

    1 <= arr[i] <= 100

    1 <= m <= 100 // pattern length

    2 <= k <= 100 // pattern repeats
*/

const arr: number[] = [1, 2, 4, 4, 4, 4] // true
const m: number = 1 // length of the pattern
const k: number = 3 // number of times pattern repeats

const arr1: number[] = [1, 2, 1, 2, 1, 1, 1, 3] // true
const m1: number = 2 // length of the pattern
const k1: number = 2 // number of times pattern repeats

const arr2: number[] = [1, 2, 1, 2, 1, 3] // false
const m2: number = 2 // length of the pattern
const k2: number = 3 // number of times pattern repeats

function containsPattern(arr: number[], m: number, k: number): boolean {
	if (m * k > arr.length) return false

	let count: number = 0
	let left: number = 0
	let right: number = m

	let subArr: number[] = arr.slice(0, m)

	while (left < right || m < arr.length) {
		if (m > arr.length) return false // end of array condition
		if (arr[0] != arr[right] && !count) {
			count = 0
			left = 0
			arr.shift() // this is bad because it's another loop so O(n^2)
			subArr = arr.slice(0, m)
		}
		if (arr[left] === subArr[left]) {
			// TODO: handle undefined?
			left++
		} else {
			count = 0
			arr = arr.slice(left)
			left = 0
			subArr = arr.slice(0, m)
		}

		// when left equals right we can assume the subarray and arr subset
		// matches so we slice the array removing the matched elements
		// increment the count, and reset left
		// so that we can check the next subset for pattern matching
		if (left == right) {
			left = 0
			arr = arr.slice(m)
			count++
		}

		if (count === k) return true
	}
	return false
}

// This function focuses on the math of the matching pattern
// the "count" needs to match the total of the pattern length x pattern repeat
function containsPattern2(arr: number[], m: number, k: number): boolean {
	let count = 0
	for (let i = 0, j = m; i < arr.length - m; i++, j++) {
		if (arr[i] === arr[j]) {
			count++
		} else {
			count = 0
		}

		if (count === m * (k - 1)) {
			return true
		}
	}

	return false
}
console.log(containsPattern2(arr3, m3, k3))

console.log(containsPattern(arr, m, k))
