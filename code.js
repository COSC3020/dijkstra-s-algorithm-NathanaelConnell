function dijkstra(graph, sourceNode) {
    
    for (let i = 0; i < graph.length; i++) {
        graph[i].distance = Infinity;
        graph[i].visited = false;
    }

    graph[sourceNode].distance = 0;
    
    while (true) {
        let currentNode = null;
        let currentDistance = Infinity;
        for (let i = 0; i < graph.length; i++) {
            if (!graph[i].visited && graph[i].distance < currentDistance) {
                currentNode = graph[i];
                currentDistance = graph[i].distance;
            }
        }
        if (currentNode === null) {
            break;
        }
        for (let i = 0; i < currentNode.edges.length; i++) {
            const neighbor = currentNode.edges[i];
            const newDistance = currentNode.distance + neighbor.distance;
            if (newDistance < graph[neighbor.node].distance) {
                graph[neighbor.node].distance = newDistance;
            }
        }
        currentNode.visited = true;
    }

    return graph.map(node => node.distance);
}
