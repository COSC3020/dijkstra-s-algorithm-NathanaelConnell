const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testDijkstra = jsc.forall("array nat", function(distances) {
    if (distances.length > 1) {
        const graph = [
            { id: 0, neighbors: [{ id: 1, weight: 4 }, { id: 2, weight: 1 }], distance: Infinity, visited: false },
            { id: 1, neighbors: [{ id: 3, weight: 1 }], distance: Infinity, visited: false },
            { id: 2, neighbors: [{ id: 1, weight: 2 }, { id: 3, weight: 5 }], distance: Infinity, visited: false },
            { id: 3, neighbors: [], distance: Infinity, visited: false }
        ];
        
        const startNode = 0;
        const result = dijkstra(graph, startNode);
        if (result[startNode] !== 0) {
            return false;
        }
    
        for (let dist of result) {
            if (dist < 0) {
                return false;
            }
        }
        for (let i = 0; i < graph.length; i++) {
            if (i !== startNode && graph[i].neighbors.length === 0) {
                if (result[i] !== Infinity) {
                    return false;
                }
            }
        }

        return true;
    } 
    else {
        return true;
    }
});
jsc.assert(testDijkstra);
