#349
#75.0%

from typing import List

def intersection(nums1: List[int], nums2: List[int]) -> List[int]:
    dedupnums2 = set(nums2)
    dedupnums1 = set(nums1)
    res = dedupnums1.intersection(dedupnums2)
    #res =  list(dedupnums1 & dedupnums2) # shortcut intersection operator
    print(res)
    return res