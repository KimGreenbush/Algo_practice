def checkAlmostEquivalent(self, word1: str, word2: str) -> bool:
    dict1 = {}
    dict2 = {}

    # loop over each word counting occurences and adding to dictionaries
    for char in word1:
        if char not in dict1:
            dict1[char] = 1
        else:
            dict1[char] += 1                
    for char in word2:
        if char not in dict2:
            dict2[char] = 1
        else:
            dict2[char] += 1 

    all_keys = set(dict1.keys())
    all_keys.update(dict2.keys())

    # loop over dictionary 1 and compare to values in dictionary 2
    for key in all_keys:
        if key not in dict2:
            dict2[key] = 0
        if key not in dict1:
            dict1[key] = 0
        if abs(dict1[key] - dict2[key]) > 3:
            return False

    return True
