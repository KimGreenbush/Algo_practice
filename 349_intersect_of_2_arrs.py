#349
#75.0%

from typing import List

nums1 = [1,2,2,1]
nums2 = [2,2]
nums3 = [4,9,5]
nums4 = [9,4,9,8,4]

def intersection(n1: List[int], n2: List[int]) -> List[int]:
    dedupnums2 = set(n2)
    dedupnums1 = set(n1)
    res = dedupnums1.intersection(dedupnums2)
    #res =  list(dedupnums1 & dedupnums2) # shortcut intersection operator
    print(res)
    return res

print(intersection(nums1, nums2))

def intersect_imp_recreated(n1, n2):
    res = set({})

    if len(n1) >= len(n2):
        little, big = n2, n1
    else:
        little, big = n1, n2
    for x in little:
        if x in big:
            res.add(x)
    return res

print(intersect_imp_recreated(nums3, nums4))