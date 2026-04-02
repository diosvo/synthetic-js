/**
 * @description refer to `howHigh` for a basic concept
 *
 * ⏱️ Time: O(n) - 🚀 Space: O(n)
 */
const leafLayers = (root) => {
  const layers = [];
  traverse(root, layers);
  return layers;
};

const traverse = (root, layers) => {
  if (root === null) return -1;

  const leftHeight = traverse(root.left, layers);
  const rightHeight = traverse(root.right, layers);

  const height = Math.max(leftHeight, rightHeight) + 1;

  // Inital value at the first layer - Layer 0
  if (layers.length === height) {
    layers.push([]);
  }

  layers[height].push(root.value);

  return height;
};

let a, b, c, d, e, f, g, h, i;

//#region test_01
a = new Node('a');
b = new Node('b');
c = new Node('c');
d = new Node('d');
e = new Node('e');
f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

leafLayers(a); // ->
// [
//   ['d', 'e', 'f'],
//   ['b', 'c'],
//   ['a']
// ]
//#endregion

//#region test_02
a = new Node('a');
b = new Node('b');
c = new Node('c');
d = new Node('d');
e = new Node('e');
f = new Node('f');
g = new Node('g');
h = new Node('h');
i = new Node('i');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

leafLayers(a); // ->
// [
//   ['d', 'g', 'h', 'i'],
//   ['e', 'f'],
//   ['b', 'c'],
//   ['a'],
// ]
//#endregion

//#region test_03
leafLayers(null); // -> []
//#endregion

//#region test_04
a = new Node('x');
b = new Node('x');
c = new Node('x');
d = new Node('d');
e = new Node('e');
f = new Node('f');
g = new Node('g');
h = new Node('h');
i = new Node('x');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         x
//      /    \
//     x      x
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   x

leafLayers(a); // ->
// [
//   ['d', 'g', 'h', 'x'],
//   ['e', 'f'],
//   ['x', 'x'],
//   ['x'],
// ]
//#endregion
