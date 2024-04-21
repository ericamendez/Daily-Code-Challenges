/**Preorder Search of a BInary tree */

// curr Binary Node # {value: number, left: Binary Node, right: Binary Node}
//  path [number]
function walk(curr, path) { // return [number]
    //base case - if node does not exist, return path
    if (!curr) {
        return path
    }

    //pre
    path.push(curr.value)
    // recurse
    walk(curr.left, path)
    walk(curr.right, path)
    // post
    return path
}

function pre_order_search(head) { // return [number]
    return walk(head, [])
}


const binaryTreeExample = {
    val: 7,
    left: {
        val: 23,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 8,
            left: null,
            right: null
        },
        right: {
            val: 21,
            left: null,
            right: null
        }
    },
}



//ALTERNATIVE 
// curr Binary Node # {value: number, left: Binary Node, right: Binary Node}
//  path [number]
function walk2(curr, path) { // return nothing
    //base case - if node does not exist, return path
    if (!curr) {
        return
    }

    //pre
    path.push(curr.value)
    // recurse
    walk(curr.left, path)
    walk(curr.right, path)
    // post

}

function pre_order_search2(head) { // return [number]
    const path = []
    return walk(head, path)
    return path
}