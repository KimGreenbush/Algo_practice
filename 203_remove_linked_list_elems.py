# 203 Remove Linked List Elements
# https://leetcode.com/problems/remove-linked-list-elements/description/
# 51.9

# try slow fast

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
 #

class LinkedList:
    def __init__(self):
        self.head = None

    def insertNode(self, val):
        newNode = ListNode(val)

        if(self.head == None):
            self.head = newNode
            return self

        current = self.head

        while (current.next != None):
            current = current.next

        current.next = newNode

        return self

    def removeNextNode(self, node):
        node.next = node.next.next
        return self

    def printList(self):
        current = self.head

        while (current != None):
            print(current.val)
            current = current.next

def create_list(values):
    listy = LinkedList()
    for val in values:
        listy.insertNode(val)

    return listy

#1 [1,2,6,3,4,5,6], 6
# out: [1,2,3,4,5]
#2 [], 1
# out: []
#3 [7,7,7,7], 7
# out: []

listylist = create_list([1,2,6,3,4,5,6])

#listylist.printList()

# designed to work more cleanly with the alterations belonging to
# LinkedList as methods as well as directly modifying the LL
def personalRemoveElements( head, val):
    currentNode = head

    while(currentNode != None):
        if(currentNode.next and currentNode.next.val == val):
            listylist.removeNextNode(currentNode)
        else: currentNode = currentNode.next

    if (head.val == val):
        listylist.head = head.next

    return head

print(personalRemoveElements(listylist.head, 6))
listylist.printList()

#####################################
# For Leetcode --
def removeElements( head, val):
    if (head == None):
        return head

    currentNode = head

    while(currentNode != None):
        if(currentNode.next and currentNode.next.val == val):
            currentNode.next = currentNode.next.next
        else: currentNode = currentNode.next

    if (head.val == val):
        head = head.next

    return head

#print(personalRemoveElements(listylist.head, 7))
print(removeElements(listylist.head, 6))