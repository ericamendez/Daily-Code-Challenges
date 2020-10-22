// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let answer = []

  // I want to loop by how many subarrays I want to create
  for (let i = 0; i < array.length / size; i++) {
    // where I want to start slicing from in the array, which starts at 0 and then every multiple of "size"
    let sliceStart = i * size

    // Slice from sliceStart to slicestart + the size of the wanted subarray
    answer.push([...array.slice(sliceStart, sliceStart + size)])
  }

  return answer
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));