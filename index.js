// console.log("hello")
function Node(data){
    this.data=data;
    this.right=null;
    this.left=null;
}
const root=new Node('A');
// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
console.log(root);