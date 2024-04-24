function search(curr, needle) {
    if (!curr) {
        return false
    }

    if (curr.value === needle) {
        return true
    }

    //we need to traverse
    if (curr.value < needle) {
        //go to right
        return search(curr.right, needle)
    }
    return search(curr.left, needle)
}

function dfs(head, needle) {
    return search(head, needle)
}