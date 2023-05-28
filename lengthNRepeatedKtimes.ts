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

function containsPattern(arr, m, k) {
	if (m * k > arr.length) return false

	var count = -1
	var left = 0
	var right = m
	var subArr = arr.slice(0, m)
	while (left < right || m < arr.length) {
		if (m > arr.length) return false // end of array condition
		if (arr[0] != arr[right] && count <= 0) {
			left = 0
			arr.shift()
			subArr = arr.slice(0, m)
		}
		if (arr[left] === subArr[left]) {
			// TODO: handle undefined?
			left++
		} else {
			count = -1
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

console.log(containsPattern(arr, m, k))
