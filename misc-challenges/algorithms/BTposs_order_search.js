/**Inorder Search of a BInary tree */

// curr Binary Node # {value: number, left: Binary Node, right: Binary Node}
//  path [number]
function walk(curr, path) { // return [number]
    //base case - if node does not exist, return path
    if (!curr) {
        return path
    }

    //pre
    // recurse
    walk(curr.left, path)
    walk(curr.right, path)
    path.push(curr.value) //split the walk in half
    // post
    return path
}

function pre_order_search(head) { // return [number]
    return walk(head, [])
}