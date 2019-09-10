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
    // regex will remove all whitespace between values
    let tree = userTree.tree.split(/\s+/);
    for (const key in tree) {
        if (tree.hasOwnProperty(key)) {
            // convert 'e' to null for our algorithm
            // wanted to use -1 to signify nulls, but negative ints are not disallowed
            if (tree[key] === 'e') {
                tree[key] = null;
            } else {

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
    return longestPathSum(deserialize(tree));
}
function Node(data) {
    this.data = data; 
    this.left = null; 
    this.right = null; 
} 

// recreate tree from a preorder array
function deserialize(treeArray) {
    function createTree() {
        let current = treeArray.shift();
        if(current == null) {
            return null;
        }
        let node = new Node(current);
        node.left = createTree();
        node.right = createTree();

            return node;
    }
    return createTree();
}
// find longest path(s) from root to node, return largest sum
function longestPathSum(root) {
    let maxDepth = 0;
    let ans;
    const queue = [];
    // push node and corresponding depth into a queue
    queue.push([root, 1, root.data]);
    while (queue.length != 0) {
        const curr = queue.shift();
        const node = curr[0];
        const depth = curr[1];
        const sum = curr[2]; 
        checkSafeInteger(sum);
        // if both are null, we are at a leaf. check depth and update sum if depth is >= max depth
        if (node.left == null && node.right == null) {
            if (depth > maxDepth) {
            // record sum of the deepest node
                maxDepth = depth;
                ans = sum;
            } else if (depth == maxDepth) {
            // take largest sum if depth is equal to Max 
                ans = Math.max(ans, sum);
            }
        } else {  
        // otherwise we push any children to our queue 
            if (node.left  != null) { queue.push([node.left,  depth + 1, sum + node.left.data ]); }
            if (node.right != null) { queue.push([node.right, depth + 1, sum + node.right.data]); }
        } 
    }
    return ans;
}