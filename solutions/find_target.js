class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findTarget(root, target) {
  if (!root) {
    return null;
  }

  if (root.value === target) {
    return root;
  }

  if (root.value > target) {
    return findTarget(root.left, target);
  } else {
    return findTarget(root.right, target);
  }
}

if (require.main === module) {
  // add your own tests in here
  let root = new Node(1, new Node(-1), new Node(2));
  console.log("Expecting: Node with value 2");
  console.log(findTarget(root, 2));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));

  console.log("");

  root = null;
  console.log("Expecting: null");
  console.log(findTarget(root, 2));

  console.log("");

  root = new Node(10, new Node(9, new Node(8, new Node(7))));
  console.log("Expecting: Node with value 8");
  console.log(findTarget(root, 8));

  console.log("");

  root = new Node(1, null, new Node(2, null, new Node(3, null, new Node(4, null, new Node(5)))));
  console.log("Expecting: Node with value 5");
  console.log(findTarget(root, 5));

  console.log("");

  root = new Node(10, new Node(7, new Node(6, new Node(4)), new Node(8)), new Node(14, new Node(11), new Node(18, null, new Node(20))));
  console.log("Expecting: Node with value 20");
  console.log(findTarget(root, 20));

  console.log("");

  console.log("Expecting: null");
  console.log(findTarget(root, 5));
}

module.exports = { findTarget, Node };

// Please add your pseudocode to this file
// And a written explanation of your solution
