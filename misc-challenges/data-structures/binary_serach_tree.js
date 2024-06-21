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

    printInorder() {
        if(this.left){
            this.left.printInorder()
        }
        console.log(this.value)
        if(this.right){
            this.right.printInorder()
        }
    }

    contains(needle) {
        if(this.value === needle){
            return true
        }

        if(this.left && needle < this.value){ // if theres is a left child and our needle is smaller than left child, GO LEFT
            return this.left.contains(needle)
        } else if ( this.right && needle > this.value){
            return this.right.contains(needle)
        }

        return false
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
        if (this.root) {
            this.root.printInorder()
        }
    }

    contains(needle) {
        if (this.root) {
            return this.root.contains(needle)
        }
        return false
    }
}


const testBST = new BinarySearchTree()
testBST.insert(10)
testBST.insert(5)
testBST.insert(3)
testBST.insert(8)
testBST.insert(15)
testBST.insert(7)
testBST.insert(11)

// console.log(testBST)
console.log(testBST.root.left)
testBST.printInorder()
console.log(testBST.contains(8))
console.log(testBST.contains(25))








// const bst = {
//     value: 10,
//     left: {
//         value: 5,
//         left: {
//             value: 3,
//             left: {

//             },
//             right: {
                
//             }
//         },
//         right: {
//             value: 8,
//             left: {

//             },
//             right: {
                
//             }
//         }
//     },
//     right: {
//         value: 15,
//         left: {
//             value: 11,
//             left: {
//                 value: null,
//                 left: null,
//                 right: null
//             },
//             right: {
//                 value: null,
//                 left: null,
//                 right: null
//             }
//         },
//         right: {
//             value: null,
//             left: null,
//             right: null
//         }
//     }
// }