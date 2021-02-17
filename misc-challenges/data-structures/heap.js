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

      // traverse up the parent node until the current node (current) is greater than the parent (current/2)
      while(){

      }
      
    }
  }
}