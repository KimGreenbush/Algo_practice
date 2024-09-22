#1945 Sum of Digits of Sting After Convert
# https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/
#74.9%

# NOTES for futures
# chr(97) will return an "a", the unicode character
# use str() for stringifying NOT chr()

# arr = ["2","3"]
# print(sum(int(number) for number in arr))
# if arr contains only numbers sum(arr) works
# sum() takes an iterable, like an arr or loop...

s = "iiii"
k = 1
#Output: 36

s2 = "a"
k2 = 1
#Output: 1

def getLucky(s, k):
    result = ""

    for letter in s:
        result += str(ord(letter) - 96)

    sum = 0
    while (k != 0):
        if sum != 0:
            result = str(sum)

        sum = 0
        for digit in result:
            sum += int(digit)

        if len(str(result)) == 1:
            break # break if only one digit
        print(result)

        k -= 1

    return sum

print (getLucky(s2,k2))