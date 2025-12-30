/** 🔁 Iterative
 *
 * @description Technique - Stack ⬆️
 *
 * ⏱️ Time: O(e) - 🚀 Space: O(e)
 */
const depthFirst = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

depthFirst(graph, 'a'); // abdfce

/**
 * 🔄 Recursive
 */
function depthFirst(graph, source) {
  console.log(source);

  for (const neighbor of graph[source]) {
    depthFirst(graph, neighbor);
  }
}

const breathFirst = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

breathFirst(graph, 'a'); // acbedf
