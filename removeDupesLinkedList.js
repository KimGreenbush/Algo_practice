/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
	console.log(head)
	if (head === null || head.next === null) return head

	let runner1 = head
	let runner2 = head.next
	while (runner2 != null) {
		console.log(runner1.va1, runner2.val)
		// runner1 == runner2 -> runner1 stays, runner2 moves
		if (runner1.val == runner2.val) {
			runner2 = runner2.next
		}
		// runner1 != runner2 -> both move
		else if (runner1.val != runner2.val) {
			runner1.next = runner2 // runner1.next points to runner2, skipping dupes
			runner1 = runner1.next // runner1 pointer moves to newly ref runner2 value
			runner2 = runner2.next // runner2 pointer moves to next node
		}
	}
	runner1.next = null //runner2 reaches the end so all remaining nodes are dupes, cutoff after runner1
	return head
}


/* GPT
function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

function deleteDuplicates(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

*/
