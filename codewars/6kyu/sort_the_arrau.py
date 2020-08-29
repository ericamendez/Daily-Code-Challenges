'''
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example
'''

def sort_array(source_array):
    answer = []
    for i in source_array:
        if i % 2 != 0:
            print(len(source_array) - i)
            answer.append(len(source_array) - i + 1)
        else:
            print(i)
            answer.append(i)
    
    return answer

arr = [0,1,2,3,4,5,6]
sort_array(arr)