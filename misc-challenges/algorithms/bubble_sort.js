function bubble_sort(arr) {
    let sorted = [...arr]

    //[1, 4, 3, 8, 2] N
    //[1, 3, 4, 2, 8] N-1
    //[1, 3, 2, 4, 8] N-2

    // Iteration: 0 - (N-1) because the last element has nothing to the right of it
    //How many times we have to perform bubble sort VERTICAL
    for(let i = 0; i < arr.length; i++){
        //The bubble sort HORIZONTAL
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(sorted[j]>sorted[j+1]){
                const temp = sorted[j]
                sorted[j] = sorted[j+1]
                sorted[j+1] = temp
            }
        }
    }
    
    return sorted
}

console.log(bubble_sort([1, 4, 3, 8, 2]))