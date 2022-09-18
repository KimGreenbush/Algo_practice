/**
 * @param {number[]} prices
 * @return {number}
 */
const prices1 = [7, 1, 5, 3, 6, 4]
const prices2 = [7, 6, 4, 3, 1]
const prices3 = [1, 1, 1, 1, 1]
const prices4 = [2, 4, 1] //***
const prices5 = [3, 2, 6, 5, 0, 3] //***
const nums1 = [7, 1, 5, 4]
const nums2 = [9, 4, 3, 2]
const nums3 = [1, 5, 2, 10]

var maxProfit = function (prices) {
	let maxProfit = 0
	let buyPrice = Number.MAX_VALUE

	for (let price of prices) {
		if (price < buyPrice) buyPrice = price
		else maxProfit = Math.max(maxProfit, price - buyPrice)
	}

	return maxProfit
}

console.log(maxProfit(nums3))

/*
//{ min: 1, index: 1, max: 6 }

console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// expected output: 1
*/

//  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//     const citrus = fruits.slice(1, 3);

/*

const fruits = ["Banana", "Orange", "Apple", "Mango"];
Start at index 3:

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// let index = fruits.indexOf("Apple");
let index = fruits.indexOf("Apple", 3)

*/

/*
const min = Math.min(...prices)
const index = prices.indexOf(min)
if(index === prices.length -1) {
    const max = Math.max(...prices)
    if( prices.indexOf(max) === 0){
        const sliced = prices.slice(1,prices.length-1)
        Math.min(sliced)
    }

}
// const max = Math.max(...prices.slice(index))
return max - min
*/

// JAVA
// public class Solution {
//     public int maxProfit(int prices[]) {
//         int maxprofit = 0;
//         for (int i = 0; i < prices.length - 1; i++) {
//             for (int j = i + 1; j < prices.length; j++) {
//                 int profit = prices[j] - prices[i];
//                 if (profit > maxprofit)
//                     maxprofit = profit;
//             }
//         }
//         return maxprofit;
//     }
// }

//     0 1 2 3
// C# [2 3 4 1]
// public int MaxProfit(int[] prices)
// {
//     int profit = 0,      // 1  // 2
//      buy = int.MaxValue; // 2  //

//     for(int i = 0; i < prices.Length; i++)
//     {
//         if(prices[i] < buy)
//             buy = prices[i];
//         else
//             profit = Math.Max(profit, prices[i] - buy);
//     }

//     return profit;
// }

/**
 * example 1
 * Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

/**
 * example 2
 * Input: prices = [7,4,6,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

/** DIDN'T WORK
 * Loop through array looking for the min
 * If min isn't the last value
 * loop through again using the min index as a starting point to find a max
 * if min IS the last value return 0(zero)
 */

/** NEW PLAN
 * Look for lowest
 * if it's at the last index look for max instead
 * if max is first look for second min by slicing off the first and last indexes
 * else If min isn't the last value
 * loop through again using the min index as a starting point to find a max
 * if min IS the last value return 0(zero)
 *
 */

/** New New plan
 *
 */

// var maxProfit2 = function(prices) {
//     do {
//         const min = Math.min(...prices)
//         const minI = prices.indexOf(min);
//         if(minI !== prices.length -1){
//             const sliced = prices.slice(minI)
//             const max = Math.max(...sliced)
//             return max - min;
//         }

//         prices.pop();

//     } while(prices.length > 1) return 0
// };
