//Create linked list factory
const LinkedList = () => {
    let head = null;
    let length = 0;

}

//Create Node factory containing a value function and a link to the nextNode, set both as null by default.
const Node = (value = null, nextNode = null) => {
    return {value, nextNode}
}