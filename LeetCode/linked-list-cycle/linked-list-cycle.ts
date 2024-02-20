class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let t = head;
  let h = head;

  // If the head is null there is nothing in the list
  if (t == null) {
    return false;
  }

  // Until the next value is null, increment t by 1 and h by 2. If they ever match, you are in a cycle (== means the reference to the node in memory is the same, not the contents)
  while (h != null) {
    t = t.next;
    h = h.next?.next;
    if (t && h && t == h) {
      return true;
    }
  }
  return false;
}
