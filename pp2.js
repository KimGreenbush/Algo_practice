/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number} => index where target is found or -1
 * function must use O(log n) runtime (Binary Search)
 */
var search = function (nums, target) {
	// start(left) = index (initially 0) [pointer]
	// end(right) = index (initially n-1) [pointer]
	// pivot(mid) = mid point between start and end, used for comparison with the target value [pointer]

    //[4,5,6,7,0,1,2]
    // target = 5

    // Indexes
    let start = 0
    let end = nums.length -1
    let mid
    // s=0, e=7, m=7, t=8
    while (start <= end){
        mid = Math.floor((start+end)/2)
        // return quick if target is mid value
        if(target === nums[mid]){
            return mid
            //target is lower, go left
        } else if(target < nums[mid]){
            // not within range
            if (target <= nums[end] && nums[mid] > nums[end]) { // unsorted right side, could target be in here
                // if(target >= nums[start]){
                start = mid + 1 // goes right
            // within the range
            } else {
                end = mid - 1 // goes left
            }
        //target is higher, go right
        } else {
            if (target >= nums[start] && nums[mid] < nums[start]) { // unsorted left side, could target be in here
                end = mid -1 // go left
            } else {
                start = mid+1; // go right
            }
        }
    }
    // start = end , no results found
    return -1
}

let array5 = [4, 5, 6, 7, 8, 9, 1, 2]
let target5 = 8
let array1 = [4,5,6,7,0,1,2]
let target1 = 0
let array2 = [4,5,6,7,0,1,2]
let target2 = 3
let array3 = [1]
let target3 = 0
let array4 = [0,1,2,3,5,6]
let target4 = 3
let target4a = 4

console.log({ONE: search(array1,target1)}) // return 4
console.log({TWO: search(array2,target2)}) // return -1
console.log({THREE: search(array3,target3)}) // return -1
console.log({FOUR: search(array4,target4)}) // return 2
console.log({FIVE: search(array5,target5)}) // return 4

// Take target compare to midpoint, if target is lower than midpoint, check against start number.
// If target number is less than start number, we know that the target number is not to the left of  mid
// but possibly to the right. (if left is sorted [4,5,6,7,0,1,2] )


// [7,0,1,2,4,5, 6] (left not side sorted - right side sorted) target= 7
// compare mid to target, target is smaller, go left CHECK SUBARRAY FIRST
// else, go right CHECK SUBARRAY FIRST

// Move start pointer to mid point , leave endpoint, move mid point between start and end.
// compare target to midpoint,
// if target is lower than midpoint, leave startpoint,  move endpoint to mid point and move midpoint between start and endpoints.
// if target is higher than midpoint, repeat binary search for right side.

