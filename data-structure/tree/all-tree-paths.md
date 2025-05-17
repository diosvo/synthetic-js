### Steps:

Base cases:

1. Empty tree? → Return empty array []
2. Leaf node? → Return [[root.value]]

Get subtree paths:

- leftPaths = all paths from left child
- rightPaths = all paths from right child

Combine paths:

- Merge both subtree path arrays
- Prepend current root value to each path
- Return combined result

### Example flow

Tree: A→B→D,E; A→C→F

- D,E,F (leaves) → [[D]], [[E]], [[F]]

- B gets [[D]],[[E]] → [[B,D],[B,E]]

- C gets [[F]] → [[C,F]]

- A gets [[B,D],[B,E]],[[C,F]] → [[A,B,D],[A,B,E],[A,C,F]]
