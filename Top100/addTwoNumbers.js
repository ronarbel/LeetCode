var addTwoNumbers = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  
  let resHead = new ListNode('holder');
  let resTail = resHead
  let remainder = 0;
  while (cur1 && cur2) {
      let sum = cur1.val + cur2.val + remainder;
      remainder = 0;
      if (sum > 9) {
          sum -= 10;
          remainder += 1;
      }
      
      resTail.next = new ListNode(sum);
      resTail = resTail.next;
      cur1 = cur1.next;
      cur2 = cur2.next;
  }
  
  while (cur1) {
      let sum = cur1.val + remainder;
      remainder = 0;
      if (sum > 9) {
          sum -= 10;
          remainder += 1;
      }
      
      resTail.next = new ListNode(sum);
      resTail = resTail.next;
      cur1 = cur1.next;
  }
  
  while (cur2) {
      let sum = cur2.val + remainder;
      remainder = 0;
      if (sum > 9) {
          sum -= 10;
          remainder += 1;
      }
      
      resTail.next = new ListNode(sum);
      resTail = resTail.next;
      cur2 = cur2.next;
  }
  
  if (remainder) resTail.next = new ListNode(1);
  return resHead.next
};

// refactored
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  
  let resHead = new ListNode('holder');
  let resTail = resHead
  let remainder = 0;
  
  while (cur1 || cur2) {
      let sum = remainder;
      cur1 ? sum += cur1.val : null;
      cur2 ? sum += cur2.val : null;
      remainder = 0;
      
      if (sum > 9) {
          sum -= 10;
          remainder += 1;
      }
      
      resTail.next = new ListNode(sum);
      resTail = resTail.next;
      cur1 = cur1 ? cur1.next : null;
      cur2 = cur2 ? cur2.next : null;
  }
  
  if (remainder) resTail.next = new ListNode(1);
  
  return resHead.next
};