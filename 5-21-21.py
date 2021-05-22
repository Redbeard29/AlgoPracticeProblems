# Palindrome Check:
# Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
# A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
# Ex: string = 'abcdcba' -> output = True

def isPalindrome(string):
    left = 0
    right = len(string) - 1
	
    while left < right:
        if string[left] == string[right]:
            left += 1
            right -= 1
        else:
            return False
    return True

print(isPalindrome('abcdcba'))