class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//     A
//    / \
//   B   C
//  / \   \
// D   E   F

const g = new Node(3);
const h = new Node(11);
const j = new Node(4);
const k = new Node(4);
const m = new Node(-2);
const n = new Node(1);

g.left = h;
g.right = j;
h.left = k;
h.right = m;
j.left = n;

//      3
//    /   \
//   11    4
//  / \      \
// 4   -2     1
