var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// var nums = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4]
// let nums =[0, 1, 2, 2, 3]

var removeDuplicates = function (nums) {
	// current position in array of unique values (index)
	let current = 0
	// location of dupe that needs to be moved (index)
	let next = 1
	while (next != nums.length) {
		//comparisons

		if (nums[current] != nums[next]) {
			current++
			nums[current] = nums[next]
			next++
		} else {
			next++
		}
	}
	console.log({ current, nums, next })
	return ++current
}

console.log(removeDuplicates(nums))

/*
var removeDuplicates = function(nums) {
    let currentIndex = 0;

    for( let i=1;i<nums.length;i++ ){
        if(nums[currentIndex] != nums[i] ){
            if( currentIndex+1 != i ){

                currentIndex++;

                nums[currentIndex] = nums[i];

            }else{

                currentIndex++;


            }
        }
    }

    currentIndex++

    return currentIndex
};
*/