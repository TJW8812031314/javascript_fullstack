
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function (head, val) {
  let headNode = new ListNode()
  headNode.next = head
  let previous = headNode
  let current = head

  while (current) {
    if (current.val === val) {
      let temp = current.next
      previous.next = temp
      current.next = null
      break;
    }
    previous = current
    current = current.next
  }
  return headNode.next
};


head = [4, 5, 1, 9], val = 5
console.log(deleteNode(head, val))
