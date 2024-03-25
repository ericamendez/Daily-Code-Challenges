class Queue {
    constructor(){
        this._storage = {}
        this._length = 0
        this._headIndex = 0
    }

    enqueue(value){
        this._storage[this._length + this._headIndex] = value
        this._length++
    }

    //FIFO
    dequeue(){
        let val = this._storage[this._headIndex]
        delete this._storage[this._headIndex]
        this._length--
        this._headIndex++
        if (this._length === 0) this._headIndex=0
        return val
    }

    peek(){
        return this._storage[this._headIndex]
    }
}

let test = new Queue

test.enqueue('hi')
test.enqueue('bdjs')
test.enqueue('e')

console.log(test._storage);
console.log(test.dequeue())

console.log(test._storage);
console.log(test.peek())

console.log(test.dequeue())
console.log(test._storage);
console.log(test.peek())
test.enqueue('r')
console.log(test._storage);
console.log(test.dequeue())
console.log(test.dequeue())
test.enqueue('newr')
console.log(test._storage);