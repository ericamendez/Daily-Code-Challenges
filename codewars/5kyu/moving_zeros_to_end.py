# Complexity time O(n), space O(1)

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