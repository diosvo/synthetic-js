# 🧩 Key concept

- A plain old Object can be used as a hash map.

- `Map` stores key-value pairs / `Set` only store keys.

- `Set` advantages:
  - Elements are unique and unordered.
  - Time complexity: O(1)

# 🎯 Common Strategies

- Use `Set` to reduce array length & time complexity.
- Use a counter hash map:

  ```javascript
  {
    a: 1,
    b: 2
  }
  ```
