// https://leetcode.com/problems/set-mismatch/submissions/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// let nums = [1, 2, 2, 4]
// let nums = [1, 1]
// let nums = [2, 2]
let nums = [1, 5, 3, 2, 2, 7, 6, 4, 8, 9]

// LUIS IS RIGHT NEED TO INCORPORATE .LENGTH!!!!

var findErrorNums = function (nums) {
// create array for return
    let result = []

    // sort array
let sortArr = nums.sort(function (a, b) { return a-b})

// loop looking for dupe
    for (let i = 0; i < sortArr.length; i++) {
        // edge case if 1 is the missing number
        if (sortArr[0] != 1) {
			result.push(sortArr[1]) // push second val
			result.push(1) // add missing num
			console.log({ ifOne: result })
			return result
		}

        if (sortArr[i] == sortArr[i + 1]) {
			console.log("dupe found", sortArr[i], i)

			// look back to see if missing was before ex, 1334 is missing 2
			// current value minus previous value should be one, otherwise a number is missing
			// ex 3 -1 = 2 (missing a number), 3 - 2 = 1
            if (sortArr[i] - sortArr[i - 1] != 1 && i != 0) {

				result.push(sortArr[i]) // push dupe
				result.push(sortArr[i] - 1) // add missing  = dupe - 1
				console.log({ lookBack: result })
				return result
			}

			// push dupe to new array
			result.push(sortArr[i]) // push dupe
			result.push(sortArr[i] + 1) // add missing  = dupe +1
			console.log({ lookForward: result })
			return result
		}
    }
}

findErrorNums(nums)