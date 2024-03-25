/**
 * Implement a stack using an object
 * 
 * {0: 'a', 1: 'b', 2: 'c'}
 */

class Stack {
    constructor() {
        this._storage = {}
        this._length = 0
    }

    push(value) {
        //TODO add type checking 
        this._length++
        this._storage[this._length] = value
    }

    pop() {
        // edgecase, what if stack is empty
        const lastValue = this._storage[this._length]

        delete this._storage[this._length]
        this._length--
        return lastValue
    }

    peek() {
        return this._storage[this._length]
    }
}

let testStack = new Stack()

testStack.push('a')
testStack.push('e')
testStack.push('z')
console.log(testStack._storage);
console.log('last',testStack.peek());
testStack.pop()
console.log(testStack._storage);
console.log('last',testStack.peek());



