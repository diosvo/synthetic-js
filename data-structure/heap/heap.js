export default class Heap {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  swap(index1, index2) {
    return ([this.array[index1], this.array[index2]] = [
      this.array[index2],
      this.array[index1],
    ]);
  }

  /**
   * ⏱️ Time: O(log(n)) - 🚀 Space: O(1)
   *
   * @returns Insert the given value into the heap.
   */
  insert(value) {
    this.array.push(value);
    // The index added ^
    this.siftUp(this.size() - 1);
  }

  siftUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      // Compare its value with parent value
      if (this.array[currentIndex] > this.array[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  siftDown(index) {
    let currentIndex = index;

    while (currentIndex < this.size() - 1) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;

      const leftChildValue =
        this.array[leftChildIndex] === undefined
          ? Infinity
          : this.array[leftChildIndex];
      const rightChildVal =
        this.array[rightChildIndex] === undefined
          ? Infinity
          : this.array[rightChildIndex];

      const greaterChildValue =
        leftChildValue > rightChildVal ? leftChildValue : rightChildVal;
      const greaterChildIndex =
        leftChildValue > rightChildVal ? leftChildIndex : rightChildIndex;

      if (this.array[currentIndex] < greaterChildValue) {
        this.swap(currentIndex, greaterChildIndex);
        currentIndex = greaterChildIndex;
      } else {
        break;
      }
    }
  }

  /**
   * @description Removes the minimum/ maximum value, which is the root of the heap.
   *
   * ⏱️ Time: O(log(n)) - 🚀 Space: O(1)
   *
   * @returns The minimum/ maximum value in the heap.
   */
  extractRoot() {
    if (this.isEmpty()) return null;

    if (this.size() === 1) return this.array.pop();

    const root = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);

    return root;
  }
}
