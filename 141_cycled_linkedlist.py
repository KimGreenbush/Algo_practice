#Linked List Cycle
#https://leetcode.com/problems/linked-list-cycle/

#52.5%

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

## What we need for a linked list
## Make a constructor
## insertNode
    # make a new node to add to the list
    ## Set head node if needed (list is empty) and return
    ##Notes :
    # curr_node is a pointer [set up pointer(s)]
    # find end of list and add new node
    # return self to chain

# printList
 #use a while loop and .next to print all values

class LinkedList:
    def __init__(self):
        self.head = None

    def insertNode(self, value):
        newNode = ListNode(value)

        if(self.head is None):
            self.head = newNode
            return self

        current_node = self.head
        while current_node.next:
            current_node = current_node.next
        current_node.next = newNode
        return self

    def printList(self):
        current_node = self.head
        while current_node:
            print(current_node.val)
            current_node = current_node.next

# create a func with 2 pointers
# one pointer to point to a node in the linked list
# second pointer to go to the end of the list
# use the second pointer to point to the first one
# listy is a LinkedList
# pos (int) is the position to link back to (cycle) - first pointer
def create_cycle(listy, pos):
    pos_node = None
    current_node = listy.head

    loop_counter = 0
    while current_node.next:
        if loop_counter is pos:
            pos_node = current_node
        current_node = current_node.next
        loop_counter+=1

    current_node.next = pos_node

def create_list(values, pos = None):
    listy = LinkedList()
    for val in values:
        listy.insertNode(val)

    if pos:
        create_cycle(listy, pos)

    return listy

testList = create_list([-1,-7,7,-4,19,6,-9,-5,-2,-5],9)
#                                        ^
def hasCycle(head):
    if head is None or head.next is None:
        return False

    current_node = head.next
    pointer = head

    while current_node:
        if current_node.next is current_node:
            return True

        pointer = head

        #moves the pointer up and checks for cycle
        while pointer.next is not current_node:
            if current_node.next is pointer:
                return True
            pointer = pointer.next

        current_node = current_node.next
        if current_node is pointer:
            return True

    return False

print (hasCycle(testList.head))
