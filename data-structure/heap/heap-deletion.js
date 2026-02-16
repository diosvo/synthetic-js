import HeapInsertion from './heap-insertion';

export default class HeapDeletion extends HeapInsertion {
  siftDown(idx) {
    let currentIdx = idx;
    while (currentIdx < this.size() - 1) {
      const leftChildIdx = currentIdx * 2 + 1;
      const rightChildIdx = currentIdx * 2 + 2;

      const leftChildVal =
        this.array[leftChildIdx] === undefined
          ? Infinity
          : this.array[leftChildIdx];
      const rightChildVal =
        this.array[rightChildIdx] === undefined
          ? Infinity
          : this.array[rightChildIdx];

      const smallerChildVal =
        leftChildVal < rightChildVal ? leftChildVal : rightChildVal;
      const smallerChildIdx =
        leftChildVal < rightChildVal ? leftChildIdx : rightChildIdx;

      if (this.array[currentIdx] > smallerChildVal) {
        this.swap(currentIdx, smallerChildIdx);
        currentIdx = smallerChildIdx;
      } else {
        break;
      }
    }
  }

  /**
   * ⏱️ Time: O(log(n)) - 🚀 Space: O(1)
   * 
   * @returns The minimum value in the heap.
   */
  extractMin() {
    if (this.isEmpty()) return null;

    if (this.size() === 1) return this.array.pop();

    const min = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);
    return min;
  }
}


heap = new HeapDeletion();
heap.insert(12);
heap.insert(13);
heap.insert(11);
heap.insert(4);
heap.insert(20);
heap.insert(9);
heap.insert(22);
heap.insert(14);
heap.extractMin(); // -> 4
heap.extractMin(); // -> 9
heap.extractMin(); // -> 11

heap = new HeapDeletion();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.extractMin(); // -> 12
heap.extractMin(); // -> 16
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.extractMin(); //-> -500
heap.extractMin(); //-> -6
heap.extractMin(); // -> 11
heap.extractMin(); // -> 15
heap.extractMin(); // -> 21
heap.extractMin(); // -> 35
heap.extractMin(); // -> 43
heap.extractMin(); // -> 63
heap.extractMin(); // -> 93
