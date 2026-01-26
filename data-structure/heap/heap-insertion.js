class MinHeap {
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

  siftUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      // Compare its value with parent value
      if (this.array[currentIndex] < this.array[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  /**
   * ⏱️ Time: O(log(n)) - 🚀 Space: O(1)
   */
  insert(value) {
    this.array.push(value);
    // The index added ^
    this.siftUp(this.array.length - 1);
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

//
//               4
//            /    \
//          11      9
//         / \    /  \
//       13  20  12  22
//      /
//    14
//
//
// -> [ 4, 11, 9, 13, 20, 12, 22, 14 ]

heap = new MinHeap();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.insert(37);
heap.insert(29);
heap.insert(-501);
heap.insert(80);

//                              -501
//                      /                \
//                    -6                -500
//                 /     \            /       \
//               12      15          29        11
//             /  \     /  \       /  \       /  \
//            93  43   35  16    63   37     21  80
//
//
// -> [ -501, -6, -500, 12, 15, 29, 11, 93, 43, 35, 16, 63, 37, 21, 80 ]
