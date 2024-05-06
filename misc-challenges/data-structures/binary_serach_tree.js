class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }

    insert(curr, newNode) {
        if (newNode.value < curr.value) { //go left
            if (!curr.left) { // no left child? then make newNode left child
                curr.left = newNode
            } else { //otherwise recurse by going to the left child and repeating
                this.insert(curr.left, newNode)
            }
        } else { //go right
            if (!curr.right) { // no right child? then make newNode the right child
                curr.right = newNode
            } else { //otherwise recurse by going to the right child and repeating
                this.insert(curr.right, newNode)
            }
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (this.root) { // if there is a root, insert below root
            this.root.insert(this.root, newNode)
        } else { // if no root, make new node the root
            this.root = newNode
        }
    }

    printInorder() {

    }

    contains() {

    }
}