/**
 * GUEUE - FIRST IN FIRST OUT
 */

 class Queue {
   constructor() {
     this.storage = {}
     this.head = 0
     this.tail = 0
   }

   enqueue(element) {
    this.storage[this.tail] = element
    this.tail++
    console.log(this.storage)
   }

   dequeue() {
    delete this.storage[this.head]
    this.head++
    console.log(this.storage)
   }
 }

 let q = new Queue()

 q.enqueue('elephant')
 q.enqueue('dog')
 q.enqueue('penguin')
 q.dequeue()