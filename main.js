//Create linked list factory
const LinkedList = () => {
    let head = null;
    let length = 0;

    const append = val => {
        const node = Node(val)
        length++
        if (head === null) return (head = node)

        let current = head;
        while (current.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = node
    }
}

//Create Node factory containing a value function and a link to the nextNode, set both as null by default.
const Node = (value = null, nextNode = null) => {
    return {value, nextNode}
}