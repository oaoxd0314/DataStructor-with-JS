class Node {
  constructor(val) {
    ;(this.next = null), (this.val = val)
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  size() {
    return this.length
  }

  // 新增一個節點
  push(val) {
    const newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
    } else {
      let currNode = this.head
      while (currNode.next !== null) {
        currNode = currNode.next
      }
      currNode.next = newNode
    }
    this.length++
  }

  // 移除最後一個
  pop() {
    if (!this.head) {
      return null
    } else if (this.length === 1) {
      const temp = this.head
      this.head = null
      this.length = 0
      return temp
    } else {
      let currNode = this.head
      for (let i = 1; i <= this.length - 2; i++) {
        currNode = currNode.next
      }
      const temp = currNode.next
      currNode.next = null
      this.length--
      return temp
    }
  }

  // 移除第一個
  shift() {
    if (!this.head) return null
    else if (this.length === 1) {
      const temp = this.head
      this.head = null
      this.length = 0
    } else {
      const temp = this.head
      this.head = this.head.next
      this.length--
      return temp
    }
  }

  // 加入第一個
  unShift(val) {
    if (!this.head) {
      this.head = new Node(val)
    } else {
      const temp = this.head
      this.head = new Node(val)
      this.head.next = temp
    }
    this.length++
  }

  insertAt(index, val) {
    if (index > this.size() || index < 0) {
      return null
    } else if (index === 0) {
      this.unShift(val)
      return
    } else if (index === this.length) {
      this.push(val)
      return
    }

    let currNode = this.head
    const newNode = new Node(val)
    for (let i = 1; i < index; i++) {
      currNode = currNode.next
    }

    newNode.next = currNode.next
    currNode.next = newNode
    this.length++
    return
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      return null
    } else if (index === 0) {
      return this.shift()
    } else if (index === this.size() - 1) {
      return this.pop()
    }

    let currentNode = this.head

    for (let i = 1; i < index; i++) {
        console.log(i)
        console.log(index)
      currentNode = currentNode.next
    }
    const temp = currentNode.next
    currentNode.next = currentNode.next.next
    this.length--
    return temp
  }

  get(index){
      if(index >= this.length || index <0) return null

      let currNode = this.head;
      for(let i = 0;i<index ;i++){
        currNode = currNode.next
      }

      return currNode.val
  }

  printAll() {
    if (this.length === 0) {
      console.log('no node in this list')
      return
    }
    const nodes = []
    let currNode = this.head

    while (currNode !== null) {
      nodes.push(currNode.val)
      currNode = currNode.next
    }
    console.log(nodes)
  }
}

const l = new LinkedList()

l.push('a') // 0
l.push('b') // 1
l.push('c') // 2
l.push('d') // 3

console.log(l.get(2))
// l.pop()
l.printAll()
// console.log(l.pop())
