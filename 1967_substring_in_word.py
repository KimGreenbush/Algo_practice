#1967
from typing import List

patterns1 = ["a","abc","bc","d"]
word1 = "abc"

patterns2 = ["a","b","c"]
word2 = "aaaaabbbbb"

patterns3 = ["a","a","a"]
word3 = "ab"

def numOfStrings(patterns: List[str], word: str) -> int:
    res = 0
    # loop patterns
    for pattern in patterns:
        # find pattern in word
        if pattern in word:
            # if true, increment res
            res += 1
    return res

print(numOfStrings(patterns3, word3))
