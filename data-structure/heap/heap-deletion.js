class MinHeap {
  constructor() {
    this.array = [];
  }

  isEmpty() {
    return this.array.length === 0;
  }

  size() {
    return this.array.length;
  }

  swap(idx1, idx2) {
    [this.array[idx1], this.array[idx2]] = [this.array[idx2], this.array[idx1]];
  }

  siftUp(idx) {
    let currentIdx = idx;
    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.array[currentIdx] < this.array[parentIdx]) {
        this.swap(currentIdx, parentIdx);
        currentIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.size() - 1);
  }

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

  extractMin() {
    if (this.isEmpty()) return null;

    if (this.size() === 1) return this.array.pop();

    const min = this.array[0];
    this.array[0] = this.array.pop();
    this.siftDown(0);
    return min;
  }
}

let heap;

heap = new MinHeap();
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

heap = new MinHeap();
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
