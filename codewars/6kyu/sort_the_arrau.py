'''
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example
'''

def sort_array(source_array):
    # for each, if odd, push el[source_array - i]
    # if even push to answer array
    answer = []

    for i in source_array:
        if (source_array % 2 != 0):
            answer.append(source_array[len(source_array) - i])
        else:
            answer.append(source_array[1])
    
    return answer
