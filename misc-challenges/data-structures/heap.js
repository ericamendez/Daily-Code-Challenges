/**
 * Heap
 */

class MinHeap {
  constructor() {
    this.heap = [null]
  }

  getMin() {
    return this.heap[1]
  }

  insert(node) {
    // insert new node at the end of the heap array
    this.heap.push(node)

    // finding the correct position  for the node
    if(this.heap.length > 1) {
      let currentNodeIndex = this.heap.lenngth - 1

      
    }
  }
}