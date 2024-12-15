#3010 Divide an Array Into Subarrays With Minimum Cost I
# 65.9%
# https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/description/

nums1 = [1,2,12,3]
# 6
# [1, 2, 3, 12]

nums2 = [5,4,3]
#12

nums3 = [10,3,1,2,3,1,4,3]
##            ^
#12

nums4 = [1,10,3,1]
# [1,1,2,2,2,2,3,10]

nums5 = [23, 1, 8, 4, 18, 2, 43, 50, 2]
# [1,2,2,4,8,18,23,43,50]
#26

nums6 = [2,5,1,5]
# [1,2,5,5]
# 8

def minimumCost(nums):
    first, second, third = nums[0], nums[1], nums[2]

    if len(nums) == 3:
        return first + second + third

    sorted = nums.copy()
    sorted.sort()
    # sorted = nums.copy().sort() <-- NO!!! Bad!!!
    # sort returns None DO NOT CHAIN AND ASSIGN

    sort1, sort2, sort3 = sorted[0], sorted[1], sorted[2]


    if first in sorted[:3]:
        return sort1 + sort2 + sort3
    else:
        return first + sorted[0] + sorted[1]

print(minimumCost(nums3))
