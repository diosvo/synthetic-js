import Heap from './heap';

// New function: extractMin -> extractRoot

let heap;

heap = new Heap();

heap.insert(12);
heap.insert(13);
heap.insert(11);
heap.insert(4);
heap.insert(20);
heap.insert(9);
heap.insert(22);
heap.insert(14);
heap.extractRoot(); // -> 4
heap.extractRoot(); // -> 9
heap.extractRoot(); // -> 11

heap = new HeapDeletion();
heap.insert(12);
heap.insert(93);
heap.insert(63);
heap.insert(16);
heap.extractRoot(); // -> 12
heap.extractRoot(); // -> 16
heap.insert(-500);
heap.insert(21);
heap.insert(11);
heap.insert(43);
heap.insert(-6);
heap.insert(35);
heap.insert(15);
heap.extractRoot(); //-> -500
heap.extractRoot(); //-> -6
heap.extractRoot(); // -> 11
heap.extractRoot(); // -> 15
heap.extractRoot(); // -> 21
heap.extractRoot(); // -> 35
heap.extractRoot(); // -> 43
heap.extractRoot(); // -> 63
heap.extractRoot(); // -> 93
