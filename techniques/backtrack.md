# Backtracking

### 🔑 3 keys to backtracking

- Choice - decision space from
- Constraints - decisions are restriced some how
- Goals

### 🔵 Blueprint

```javascript
function backtrack(curr, other_agrs...) {
  if (BASE_CASE) {
    // Modify the answer
    return;
  }

  let answer = 0;
  for (ITERATE_OVER_INPUT) {
    // Modify the current state
    answer += backtrack(curr, other_agrs...);
    // Undo the modification of the current state
  }

  return answer;
}
```
