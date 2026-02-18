# Heap

- BST data structure / A balanced binary tree.
- Store items
- Maintain order between items:
  - More relaxed than BST
  - Easier to maintain than BST
    → Faster - No constraints!

❓ Similar to BST, but different:

- BST: Left < Node < Right
- Min-Heap: Root must be min. Parent <= Children
- Max-Heap: Root must be max. Parent >= Children

❓ Why do heap operations take O(log(n)) time

→ A balanced binary tree
→ The height of a balanced binary tree is O(log(n))
→ Heap operations will sift values up or down the full height of the tree in the worst case.

❓ What data structure is commonly used to implement a binary heap

An array.

## 👾 Practices

min-heap:

- [heap insertion](./heap-insertion.js)
- [heap deletion](./heap-deletion.js)
- [kth-largest](./kth-largest.js)

max-heap:

- [k-smallest](./k-smallest.js)
