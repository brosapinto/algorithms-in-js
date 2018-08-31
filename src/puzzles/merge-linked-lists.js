import LinkedList from "../data-structures/linked-list";

export default function mergeLists(head1, head2) {
  let list = new LinkedList();
  let h1 = head1;
  let h2 = head2;

  while (h1 !== null || h2 !== null) {
    let v1 = h1 !== null ? h1.value : Number.MAX_SAFE_INTEGER;
    let v2 = h2 !== null ? h2.value : Number.MAX_SAFE_INTEGER;

    if (v1 > v2) {
      list.push(v2);
      h2 = h2.next;
    } else {
      list.push(v1);
      h1 = h1.next;
    }
  }

  return list;
}
