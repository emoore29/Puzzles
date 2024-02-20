class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let n: ListNode | null = head;
  let arr: number[] = [];

  if (n == null) {
    return null;
  }

  while (n != null) {
    arr.push(n.val);
    n = n.next;
  }

  // reverse the array
  arr.reverse();

  let reversedListHead = new ListNode(arr[0]);
  let h = reversedListHead;
  for (let i = 1; i <= arr.length - 1; i++) {
    h.next = new ListNode(arr[i]);
    h = h.next;
  }

  return reversedListHead;
}
