// STACK - LAST IN FIRST OUT

class Stack {
  constructor() {
    this.storage = {}
    this.size = 0
  }

  push(element) {
    this.size++
    this.storage[this.size] = element
    console.log(this.storage);
  }

  pop() {
    delete this.storage[this.size]
    this.size--
    console.log(this.storage);
  }

  peek() {
    console.log(this.storage[this.size]);
  }
}

let s = new Stack()

s.push('e')
s.push('r')
s.push('i')
s.pop()
s.pop()