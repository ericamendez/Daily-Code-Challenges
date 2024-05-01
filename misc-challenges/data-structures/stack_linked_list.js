class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
    }

    push(value) {
        const node = new Node(value)
        node.next = this.head
        this.head = node
    }

    pop(value) {
        if (!this.head) {
            console.log("Stack is empty");
            return null
        }

        let popped = this.head.value
        this.head = this.head.next
        return popped
    }

    peek() {
        if (!this.head) {
            return "Stack is Empty"
        }

        return this.head
    }

    isEmpty() {
        return !this.head ? true : false
    }
}

let test = new Stack()
console.log(test.peek());
test.push(3)
test.push(4)
console.log(test)
test.push(7)
console.log(test.pop())
console.log(test.pop())
console.log(test.peek());
