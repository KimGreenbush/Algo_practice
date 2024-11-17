# 2399. Check Distances Between Same Letters
# https://leetcode.com/problems/check-distances-between-same-letters/description/
# 70.9

s1 = "abaccb"
# d1 represents the postitions of letters in the alphabet
# d1[0] = "a", d1[1] = "b", etc
# the value at a specific index is the space between same letters
d1 = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
#output true
s2 = "aa"
d2 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
#output false
s3 = "zz"
d3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
#output false

def checkDistances(s, distance):
        s_len = len(s)
        for idx, letter in enumerate(s):
            index = ord(letter) - 97
            if distance[index] is not None:
                checkIndex = idx + distance[index] + 1
                if checkIndex >= s_len  or  letter != s[checkIndex]:
                    return False
                distance[index] = None
        return True