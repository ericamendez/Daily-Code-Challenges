class Queue {
    constructor() {
        this.data = []
    }

    enqueue(value) {
        this.data.push(value)
    }

    dequeue(value) {
        if (this.data.length === 0) {
            throw new Error('underflow')
        }

        return this.data.shift()
    }

    front() {
        if (this.data.length === 0) {
            throw new Error('queue empty')
        }

        return this.data[0]
    }
}