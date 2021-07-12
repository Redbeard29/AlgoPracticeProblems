#Write a function that takes in a string of lowercase English-alphabet letters and returns the
#index of the string's first non-repeating character. If the input string doesn't have any
#non-repeating characters, your function should return -1. 
#Ex: string = 'abcdcaf'
#Output: 1

def firstNonRepeatingCharacter(string):
    charCount = {}

    for char in string:
        charCount[char] = charCount.get(char, 0) + 1
    
    for idx in string:
        char = string[idx]
        if charCount[char] == 1:
            return idx
    
    return -1
