class LinkedList {
  constructor () {
    this._length = 0
    this.head = null
  }

  add (value) {
    const node = new Node(value)
    let currentNode = this.head

    if (!currentNode) {
      this.head = node
    } else {
      while (currentNode.next) currentNode = currentNode.next
      currentNode.next = node
    }

    this._length++

    return node
  }

  get (index) {
    let currentNode = this.head
    let currentIndex = 0

    if (index > this._length) throw new Error('out of range')

    while(currentIndex < index) {
      currentNode = currentNode.next
      currentIndex++
    }

    return currentNode
  }

  remove (index) {
    let currentIndex = 0
    let previousNode = null
    let nodeToRemove = this.head
    let nextNode = nodeToRemove ? nodeToRemove.next : null

    if (index > this._length) throw new Error('out of range')

    while(currentIndex < index) {
      previousNode = nodeToRemove
      nodeToRemove = nodeToRemove.next
      nextNode = nodeToRemove ? nodeToRemove.next : null
      currentIndex++
    }

    if (previousNode) {
      previousNode.next = nextNode
    } else {
      this.head = nextNode
    }

    return nodeToRemove
  }
}

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

module.exports = LinkedList
