# 1221

class Solution:
    def balancedStringSplit(self, s: str) -> int:
        Lcount, Rcount, result = 0, 0, 0
        for i in s:
            if i=='R':
                Rcount += 1
            elif i=='L':
                Lcount += 1
            if Lcount == Rcount:
                result += 1
                Lcount, Rcount = 0, 0
        return result
