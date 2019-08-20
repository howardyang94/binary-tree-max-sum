module.exports = {
    maxSum,
    checkSafeInteger
};
function checkSafeInteger(integer) {
    if(integer >= Number.MAX_SAFE_INTEGER || integer <= Number.MIN_SAFE_INTEGER) {
        throw `Numbers must be between +/- 9,007,199,254,740,991 to preserve precision`;
    }
}

async function maxSum(userTree) {
    // console.log(userTree);
    // regex will remove all whitespace between values
    let tree = userTree.tree.split(/\s+/);
    // let flag = false;
    for (const key in tree) {
        if (tree.hasOwnProperty(key)) {
            // convert 'e' to null for our algorithm
            // wanted to use -1 to signify nulls, but negative ints are not disallowed
            if (tree[key] === 'e') {
                tree[key] = null;
            // } else if((tree[key]).includes('e')) {
            //     throw `'${tree[key]}' is not a valid input`;
            // } else if ((tree[key]).includes('.')) {
            //     throw `'${tree[key]}' is not a valid input, no decimals allowed`;
            }else {
                // convert rest of characters to int for our algorithm
                // 'e' is the only non numeric character input allowed
                // the only invalid numbers will contain 'e'
                let val;
                try {
                    val = parseInt(tree[key]);
                } catch (e) {
                    throw 'Invalid input entered, please check your entered value.';
                }
                checkSafeInteger(val);
                tree[key] = val;
            }
        }
    }

    // used to check for extra numbers provided
    // const length = tree.length;
    // console.log(tree);
   
    // console.log(binaryTree.left.data);
    // let ptr = binaryTree;
    // console.log("left");
    // while(ptr) {
    //     console.log(ptr.data);
    //     ptr = ptr.left;
    // }
    // ptr = binaryTree;
    // console.log("right");
    // while(ptr) {
    //     console.log(ptr.data);
    //     ptr = ptr.right;
    // }
    // console.log(binaryTree.right.right.data);

    // reconstruct binary tree
    // find max depth(s), find max sum
    // const binaryTree = ;
    return longestPathSum(deserialize(tree));
}
function Node(data) {
    this.data = data; 
    this.left = null; 
    this.right = null; 
} 

// recreate tree from a preorder array
function deserialize(treeArray) {
    // let count = 0;
    function createTree() {
        let current = treeArray.shift();
        if(current == null) {
            return null;
        }
        // count++;
        let node = new Node(current);
        node.left = createTree();
        node.right = createTree();
        // console.log("tree array length: " + treeArray.length);
        // check if there are extra nodes provided after 
        // if (count === len) {
            return node;
        // } else {
        //     console.log('tree array length: ' + treeArray.length);
        //     throw 'There are extra elements in the tree, please check input';
        // }
        
    }
    return createTree();
}
// find longest path(s) from root to node, return largest sum
function longestPathSum(binaryTree) {
    let maxDepth = 0;
    let ans = 0;
    // let newsum;
    function traverse (current, sum, depth) {
        checkSafeInteger(sum);
        if(current == null) {
            if(depth > maxDepth) {
                maxDepth = depth;
                ans = sum;
            } else if (depth === maxDepth && sum > ans) {
                ans = sum;
            }
            return;
        }
        // newsum = sum + current.data;
        traverse(current.left, sum + current.data, depth + 1);
        traverse(current.right, sum + current.data, depth + 1);
        return;
    }
    traverse(binaryTree, 0, 0);
    return ans;
}

