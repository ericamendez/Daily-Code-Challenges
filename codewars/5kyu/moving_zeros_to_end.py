# https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/python

# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    if not lst:
        return []
    
    i = 0
    zerosMoved = 0
    
    while (i + zerosMoved) < len(lst):
        if lst[i] == 0:
            del lst[i]
            lst.append(0)
            zerosMoved += 1
        else:
            i += 1
            
    return lst

# Complexity time O(n), space O(1)