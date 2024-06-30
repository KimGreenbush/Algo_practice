#3110

# use ord() to get char int values!

# get charcodes of column letters
        #start_col = ord(s[0])
def scoreOfString(s: str) -> int:

    #Loop over string
    # Get ords value of current letter and next letter
    # Subtract next letter from current letter
    # Get absolute value -> abs()
    # Store absolute value as res
    # Repeat

    res = 0
    length = len(s)
    for i in range(length):
        if i == (length - 1): # got to the last letter
            break
        res += abs( ord(s[i]) - ord(s[i+1]))
    return res

#print(scoreOfString("hello"))
print(scoreOfString("zaz"))