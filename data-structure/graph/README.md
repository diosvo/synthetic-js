# 🧩 Key concept

❓ Graph representation

- Adjacency List - Hash map of nodes to their connected nodes (An object where each node id points to an array of their neighbors).
- Edge List - List of edges connecting nodes.
- Grid Graph

...

❓ What is the difference between a directed graph and undirected graph

Edges can only be traveled in:

- A directed graph - one direction
- An undirected graph - both directions.

❓ What data structure is typically well-suited to implement "visited" in graph traversal

A `Set` because it has O(1) lookup time.

❓ How is a graph different from a tree

- A graph may not have a "root" + multiple paths between nodes.
- A tree has only a single unique path between two nodes.

❓ What general algorithm is the best suited to find the shortest path b/w two nodes in a graph

**BFS** b/c all directions are explored evenly → The first path found via BFS is the shortest graph.

## Elements

### Nodes & Edges

Fully connected graph:

```bash
e = n * (n-1) / 2
```

_e.g_

```bash
Node/ Verticies: n = 5
Edges: e = 4 (one node can connect to max n-1 nodes)
```

→ Total edges = 10

### 📍 NOTEs

- `n` is the number of nodes.
- `e` in space and time is the number of edges.

## 👾 Practices

#### Depth First Search

> Largest on something

- [largest path]
- [largest component]
- [island count]

#### Combine two algorithms

- [best bridge]()
