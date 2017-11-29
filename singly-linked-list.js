class SinglyLinkedList {
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

  remove () {

  }
}

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}


list = new SinglyLinkedList()
list.add(4)
list.add(3)
list.add(5)
list.add(40)
