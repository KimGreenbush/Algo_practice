// Example 1:

// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

// Example 2:

// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

// Requirements:

//     - Each child must have at least one candy.
//     - Children with a higher rating get more candies than their neighbors.


// Input: ratings = [0,1,1,0]
        // candies  [1,2,2,1]

// Input: ratings = [1,2,1]
// https://leetcode.com/problems/candy/submissions/

const ratings = [1, 0, 2] // exp 5
const ratings2 = [1, 2, 2] // exp 4
const testCase3 = [1, 3, 4, 5, 2 ] // exp 11

// >:[
const testCase1 = [1, 2, 87, 87, 87, 2, 1] // exp 13
const testCase4 = [1, 2, 3, 1, 0] // exp 9


const testCandy = [1, 2, 3, 2, 1]
const ourTest = [1, 2, 3, 4, 3, 2, 0] // exp 16
const ourTest2 = [1, 2, 3, 4, 5, 4 ,3, 2, 0] // exp 25

// 1 2 3 4 5 4 3 2 1
console.log(candy(testCase1))


// 1 3 2 1
/**
 * @param {number[]} ratings
 * @return {number}
 */
function candy(ratings) {

    let totalCandies = ratings.length

    let addedCandy = false;
    let incrementChain = 0
    for (let i = 0; i < ratings.length; i++){

        // edge case for if the current child rating is higher
        // and the previous neighbor had already been given an extra candy
        if (addedCandy && ratings[i] > ratings[i - 1]) {
            incrementChain++
            totalCandies+=incrementChain
        }

        if(ratings[i] > ratings[i-1] || ratings[i] > ratings[i+1]){
            totalCandies++
            addedCandy = true
        }
        else {
            addedCandy = false
            incrementChain = 0
        }

        // edge case for if  the current child rating is less than the previous rating
        // and the current is also incremented
        // additionally, going backwards to increment previous higher ratings
        // that are higher than the current iteration (j)
        if (addedCandy && ratings[i] < ratings[i - 1]) {
            let j = i
            let timesLooped = 0
            while(ratings[j] < ratings[j-1]){
                totalCandies++
                j--
                timesLooped++
            }
            // totalCandies -= 1
            if (timesLooped != 1) {
                totalCandies -= 1
            }
            else if (addedCandy && timesLooped == 1) {
                totalCandies -= 1
            }
        }
    }

    return totalCandies;
};
