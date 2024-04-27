class minHeap {
    constructor(){
        this.data = []
        this.length = 0
    }

    insert(value){
        this.data[this.length] = value
        this.heapifyUp(this.length)
        this.length++
    }

    delete(){
        if(this.length === 0){
            return -1
        }
        
        const out = this.data[0]
        this.length--

        if(this.length === 0){
            this.data = []
            return out
        }

        this.data[0] = this.data[this.length]
        this.heapifyDown(0)
    }

    //private functions
    heapifyUp(idx){
        if(idx === 0){
            return
        }

        const parentIdx = this.getParentIdx(idx)
        const parentValue = this.data[parentIdx]
        const currValue = this.data[idx]

        if(parentValue > currValue){
            this.data[idx] = parentValue
            this.data[parentIdx] = currValue
            this.heapifyUp(parentIdx)
        }
    }

    heapifyDown(idx){
        const lIdx = this.getLeftChildIdx(idx)
        const rIdx = this.getRightChildIdx(idx)
        // if idx is bigger then our array or leftchild index is bigger then not possible, get out
        if(idx >= this.length || lIdx >= this.length){
            return
        }

        // get the smallest child
        const lV = this.data[lIdx]
        const rV = this.data[rIdx]
        const curr = this.data[idx]
        
        if(lV > rV && curr > lV){
            this.data[idx] = rV
            this.data[rV] = curr
            this.heapifyDown(rIdx)
        } else if(rV > lV && curr > rV){
            this.data[idx] = lV
            this.data[lV] = curr
            this.heapifyDown(lIdx)
        }
    }

    getParentIdx(idx){
        return Math.floor((idx -1)/2)
    }

    getLeftChildIdx(idx){
        return 2 * idx + 1
    }

    getRightChildIdx(idx){
        return 2 * idx + 2
    }
}