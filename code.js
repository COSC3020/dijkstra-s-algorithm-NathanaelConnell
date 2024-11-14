function dijkstra(graph, sourceNode) {
    if (!Array.isArray(graph) || graph.length === 0 || sourceNode < 0 || sourceNode >= graph.length) {
        throw new Error("Invalid graph structure or source node.");
    }
    let dist = new Array(graph.length).fill(Infinity);
    dist[sourceNode] = 0;
    let visited = new Array(graph.length).fill(false);
    while (true) {
        let minDist = Infinity;
        let minNode = -1;
        for (let i = 0; i < graph.length; i++) {
            if (!visited[i] && dist[i] < minDist) {
                minDist = dist[i];
                minNode = i;
            }
        }
        if (minNode === -1) {
            break;
        }

        visited[minNode] = true;
        for (let neighbor of graph[minNode]) {
            let [neighborNode, weight] = neighbor;
            let newDist = dist[minNode] + weight;
            if (newDist < dist[neighborNode]) {
                dist[neighborNode] = newDist;
            }
        }
    }

    return dist;
}
