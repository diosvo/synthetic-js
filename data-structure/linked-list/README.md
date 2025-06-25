# 🧩 Key concept

❓ Two properties are typically stored in the nodes of singly linked-list

- `value` - the data being stored.
- `next` - reference to the next sequential node in the list.

❓ What term is commonly used to describe the "first node" -- Head.

❓ What term is commonly used to describe the "last node" -- Tail.

❓ Why might the expression `current.next.value` be unsafe

If current is the tail node → `current.next` is null and does not have `value` property

❓ The optimal complexity we can achieve for searching for a target value in a standard, singly linked-list:

- Iterative: Time O(n) / Space(1)
- Recursive: Time O(n) / Space(n) <- less optimial

❓ What is the "dummy head" pattern

- Use a fake node to act as the head.
- Simplify edge cases such as inserting the first node into "empty" linked list.

# 🎯 Common Strategies

- Use iterative concrete

  ```javascript
  const fn = (head) => {
    let current = head;
    // Variables tracking

    while (current !== null) {
      // Logic handling

      current = current.next;
    }

    return <expectation>
  };
  ```

- Use an optional parameter to check the previous value with **recursion**.

### 📍 NOTEs

- `n` is the number of nodes.
