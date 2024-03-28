/**
 * Cant iterate linked list backwards (at least easily) unless its a doubly linked list
 * 
 */

class LinkedList {
    constructor(val){
        this.head = {val, next:null}
        this.tail = this.head
    }

    insertTail(value){
        const newNode = {val: value, next:null}
        this.tail.next = newNode
        this.tail = newNode
    }

    removeTail(){
        let current = this.head
        while(current.next != this.tail){
            current = current.next
        }
        this.tail = current
        current.next = null
    }

    contains(value){
        let current = this.head
        while(current){
            if(current.val === value){
                return true
            }
            current = current.next
        }
        return false
    }

    removeValue(value){
        let current = this.head
        let prev = null
        while(current){
            // console.log('current', current);
            if(current.val === value){
                prev.next = current.next
                break
            }
            prev = current
            current = current.next
        }
    }

    isHead(node){
        return node === this.head
    }

    isTail(node){
        return node === this.tail
    }
}

let test = new LinkedList(1)

test.insertTail(2)
console.log(test.head);
test.insertTail(5)
console.log(test.head);
// test.removeTail()
// test.removeTail()
// console.log(test.head);
// console.log(test.contains(5));
test.removeValue(2)
console.log(test.head);