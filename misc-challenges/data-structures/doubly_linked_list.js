class DoublyLinkedList {
    constructor(value) {
        this.head = { value, next: null, prev: null }
        this.tail = this.head
        this.size = 1
    }

    prepend(item) {
        const node = {value: item, next: null, prev: null}

        node.next = this.tail
        this.head.prev = node
        this.head = node

        this.size++
    }
    insertAt(item, idx) {
        if(idx > this.size){
            new Error("Index not found")
        }else if(idx === this.size){
            this.append(item)
            return
        }else if (idx === 0){
            this.prepend(item)
            return
        }
        
        //start walking torward the value at index and make it curr
        let curr = this.get(idx)
        
        let node = {value: item, next: null, prev: null}
        node.next = curr
        node.prev = curr.prev

        curr.prev.next = node
        curr.prev = node
        this.size++
    }
    append(item) {
        const node = {value: item, next: null, prev: null}
        node.prev = this.tail
        this.tail.next = node
        this.tail = node

        this.size++
    }
    remove(item) {
        let curr = this.head
        for(let i = 0; i < this.size; i++){
            if(curr.value === item){
                break
            }
            curr = curr.next
        }

        if(!curr){
            return undefined
        }

        if(curr.next){
            curr.next.prev = curr.prev
            curr.prev.next = curr.next
        }

        curr.next = curr.prev = undefined
        this.length--
    }
    get(idx) {
        let curr = this.head
        for(let i = 0 ; curr && i < idx; i++){
            curr = curr.next
        }
        return curr
    }
    removeAt(idx) {
        let curr = this.get(idx)

        curr.next.prev = curr.prev
        curr.prev.next = curr.next

        curr.next = curr.prev = undefined
    }
}

const test = new DoublyLinkedList(2)

test.prepend(1)
test.append(3)
console.log(test.head)