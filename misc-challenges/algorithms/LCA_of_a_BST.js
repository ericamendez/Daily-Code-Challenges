function findLCA(root, node1, node2){
    let cur = root

    while(cur){
        // if both node1 & node2 are bigger than root, move right 
        if(node1.value > cur.value && node2.value > cur.value) {
            cur = cur.right
        }
        // if both are smaller than cur move left
        else if(node1.value < cur.value && node2.value < cur.value) {
            cur = cur.left
        }
        // otherwise if only one is bigger and the other is smaller, this is our common ancestor, return
        else{
            return cur
        }
    }
}

let bst = {
    value: 6,
    left: {
        value: 2,
        left: {
            value: 0,
            left: {
                value: null,
                left: null,
                right: null
            },
            right: {
                value: null,
                left: null,
                right: null
            }
        },
        right: {
            value: 4,
            left: {
                value: 3,
                left: {
                    value: null,
                    left: null,
                    right: null
                },
                right: {
                    value: null,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 5,
                left: {
                    value: null,
                    left: null,
                    right: null
                },
                right: {
                    value: null,
                    left: null,
                    right: null
                }
            }
        }
    },
    right: {
        value: 8,
        left: {
            value: 7,
            left: {
                value: null,
                left: null,
                right: null
            },
            right: {
                value: null,
                left: null,
                right: null
            }
        },
        right: {
            value: 9,
            left: {
                value: null,
                left: null,
                right: null
            },
            right: {
                value: null,
                left: null,
                right: null
            }
        }
    }
}

console.log(findLCA(bst, bst.left.left, bst.left.right))
