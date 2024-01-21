# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]

# nums = [2,7,11,15]
# target = 9

# Input: nums = [3,2,4], target = 6
# Output: [1,2]


# Input: nums = [3,3], target = 6
# Output: [0,1]


nums = [2,7,11,15]
target = 9
# Output: [0,1]

nums2 = [3,2,4]
target2 = 6
# Output: [1,2]

nums3 = [3,3]
target3 = 6
# Output: [0,1]

class Solution:
    def twoSum(nums, target):

        dic = {}
        ret = []

        for i in range(len(nums)):
            matchValue = str(nums[i])
            matchKey = str(nums[i])

            if nums[i] == target - nums[i]:
                matchValue = matchValue + "a"
            else:
                    matchValue = str(target - nums[i])
            if matchKey in dic:
                matchKey = matchKey + "a"
            dic[matchKey] = { "match": matchValue, "index": i}

        for k,v in dic.items():
            if v["match"] in dic:
                ret.append(v["index"])

        return ret


    '''
        dic = {}

        for i in range(len(nums)):
            val = nums[i] # starting val
            comp = target - val #looking for

            if comp in dic:
                return [i ,dic[comp]]

            dic[val] = i
    '''

print(Solution.twoSum(nums2, target2))
