# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:

- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
  - select the unmarked vertex $v$ with the lowest dist
  - mark $v$ with distance dist
  - for each edge $(v,w)$
    - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

I had chat gpt help with solving Counter example [0,0] which had a lot of complicated naming and defining things which added some parts to the code and since this was the first test i had to run my self, i got help making that aswell.
The Time complexity of my implimentation is Big theta (V^2 + E). We get V squared because of the two arrays that are finding the minimum distance and checking as long as there are unvisited verticies, which are located in the while loop with the nested for loop. The E part comes from the last for loop where we are iterating over each edge which gives us E because each vertex could have any number of neighbors attached to it through an edge.
