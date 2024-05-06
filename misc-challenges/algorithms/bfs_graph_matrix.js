// garph, 2d array
// source, where we are starting from
// needle, what we are looking for

// return the path we took
// solition BFS QUEUE
// in a graph we often want the path associated
// prev = [-1, ...]
// seen = [f, ...] (already visited this node)

function bfs(graph, source, needle) {
    const seen = new Array(graph.length).fill(false)
    const prev = new Array(graph.length).fill(-1)

    seen[source] = true
    const q = [source]

    do {
        const curr = q.shift()
        if (curr === needle) {
            break
        }

        const adjs = graph[curr]
        for (let i = 0; i < adjs.length; i++) {
            //if no edge, continue
            if (adjs[i] === 0) {
                continue
            }

            if (seen[i]) {
                continue
            }

            seen[i] = true
            prev[i] = curr
            q.push(i)
        }

        seen[curr] = true
    } while (q.length)

    //BUild it backwards
    let curr = needle
    const out = []

    while (prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }

    if (out.length) {
        return [source].concat(out.reverese())
    }

    return null
}

// Adjacency List
const WeightedAdjacencyMatrix = [
    [],
    [],
    [],
    []
]