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
