#1009. Complement of Base 10 Integer
#https://leetcode.com/problems/complement-of-base-10-integer/description/
#60

test1 = 5 #101
# 2 #010
test2 = 7 #111
# 0 #000
test3 = 10 #1010
# 5 #101
test4 = 0
# 1


def bitwiseComplement(n: int) -> int:
    if n == 0:
        return 1

    base2 = bin(n)[2:] # bin() returns a string instead of an int
    base10 = ""
    for i in base2:
        if i == "0":
            base10 += "1"
        else:
            base10 += "0"

    return int(base10,2)


print(bitwiseComplement(test3))