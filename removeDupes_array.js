// var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// var nums = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
// edge case to deal with
// let nums =[0, 1, 2, 2, 3]
let nums = [1, 2]

var removeDuplicates = function (nums) {
	// current position in array of unique values (index)
	let current = 0
	// location of dupe that needs to be moved (index)
	let next = 1
	while (next != nums.length) {
		if (nums[current] != nums[next]) {
			// current[i] unique, current++, next++
			current++
			nums[current] = nums[next]
			next++
			// console.log({current, nums, next})
		} else {
			// current[i] not unique, next++
			next++
		}
		// 1-based, not 0-based
	}
	console.log({ current, nums, next })
	return ++current
}

console.log(removeDuplicates(nums))

var removeDuplicates2 = function (nums) {
	// current position in array of unique values (index)
	let current = 0
	// location of dupe that needs to be moved (index)
	let next = 1
	while (next != nums.length) {
		//comparisons

		if (nums[current] != nums[next]) {
			if (current + 1 != next) {
				// current[i] unique, current++, next++
				current++
				nums[current] = nums[next]
				next++
				// console.log({current, nums, next})
			} else {
				// current[i] not unique, next++
				next++
			}
		} else {
			next++
		}
		// 1-based, not 0-based
	}
	console.log({ current, nums, next })
	return ++current
}

console.log(removeDuplicates2(nums))
