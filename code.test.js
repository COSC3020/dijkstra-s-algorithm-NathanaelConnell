const fs = require('fs');
eval(fs.readFileSync('code.js') + '');

// Test cases
const testCases = [
  {
    graph: [
      [[1, 3], [2, 5], [4, 2]],    // Node 0: A
      [[0, 3], [2, 2], [3, 4]],    // Node 1: B
      [[1, 2], [3, 6]],            // Node 2: C
      [[1, 4], [2, 6], [4, 1]],    // Node 3: D
      [[0, 2], [3, 1]]             // Node 4: E
    ],
    sourceNode: 0,
    expected: [0, 3, 5, 3, 2]    // Expected distances from node 0
  },
  {
    graph: [
      [[1, 7], [2, 9], [3, 14]],   // Node 0: A
      [[0, 7], [2, 10], [4, 15]],  // Node 1: B
      [[0, 9], [1, 10], [3, 2], [4, 11]],  // Node 2: C
      [[0, 14], [2, 2], [4, 6]],   // Node 3: D
      [[1, 15], [2, 11], [3, 6]]   // Node 4: E
    ],
    sourceNode: 0,
    expected: [0, 7, 9, 11, 17]   // Expected distances from node 0
  },
  {
    graph: [
      [[1, 2], [2, 4]],    // Node 0: A
      [[0, 2], [2, 1]],    // Node 1: B
      [[0, 4], [1, 1]],    // Node 2: C
      []                   // Node 3: D (isolated node)
    ],
    sourceNode: 0,
    expected: [0, 2, 3, Infinity]  // Expected distances from node 0 (Infinity for isolated node)
  },
  {
    graph: [],  // Empty graph
    sourceNode: 0,
    expected: []  // No distances (empty graph)
  },
  {
    graph: [[[]]],  // Single node with no edges
    sourceNode: 0,
    expected: [0]  // Only the source node, distance is 0
  },
  {
    graph: [
      [[0, 0], [0, 0]] // Test case for [0, 0]
    ],
    sourceNode: 0,
    expected: [0] // Expected result for [0, 0]
  }
];

// Run the test cases
testCases.forEach((test, index) => {
  // Skip test if graph is empty
  if (test.graph.length === 0) {
    console.log(`Test ${index + 1} skipped due to empty graph.`);
    return;
  }

  try {
    const result = dijkstra(test.graph, test.sourceNode);
    if (JSON.stringify(result) !== JSON.stringify(test.expected)) {
      throw new Error(`Test ${index + 1} failed: expected ${JSON.stringify(test.expected)}, got ${JSON.stringify(result)}`);
    }
    console.log(`Test ${index + 1} passed.`);
  } catch (error) {
    console.error(`Test ${index + 1} failed: ${error.message}`);
  }
});
