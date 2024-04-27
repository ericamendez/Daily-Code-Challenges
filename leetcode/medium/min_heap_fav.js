class Minheap {
    constructor(){
        this.data = []
        this.size = 0
    }

    insert(value){
        this.data[this.size] = value
        this.size++
        this.heapifyUp(this.size-1)
    }

    removeMin(){
        if(this.size = 0){
            throw new Errror('Empty Head')
        }

        let min = this.data[0]
        this.data[0] = this.data[this.size - 1]
        this.size--
        this.heapifyDown(0)
        return min
    }
    
    heapifyUp(index){
        // has parent? & that parent is bigger? then swap and heapify
        if(this.hasParent(index) && this.parent(index) > this.data[index]){
            this.swap(this.getParentIndex(index), index)
            this.heapifyUp(this.getParentIndex(index))
        }
    }
    
    heapifyDown(index){
        let smaller = index
        if(this.hasLeftChild(index) && this.data[smaller] > this.leftChild()){
            smaller = this.getLeftChildIndex(index)
        }
        
        if(this.hasRightChild(index) && this.data[smaller] > this.rightChild()){
            smaller = this.getrightChildIndex(index)
        } 
        
        if(smaller != index){
            this.swap(index, smaller)
            this.heapifyDown(smaller)
        }

    }
    //helper methods
    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }
    getLeftChildIndex(index){
        return 2*index + 1
    }
    getrightChildIndex(index){
        return 2*index + 2
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size
    }
    hasRightChild(index){
        return this.getrightChildIndex(index) < this.size
    }
    parent(index){
        return this.data[index]
    }
    leftChild(index){
        return this.data[this.getLeftChildIndex(index)]
    }
    rightChild(index){
        return this.data[this.getrightChildIndex(index)]
    }
    swap(index1, index2){
        let temp = this.data[index1]
        this.data[index1] = this.data[index2]
        this.data[index2] = temp
    }
}