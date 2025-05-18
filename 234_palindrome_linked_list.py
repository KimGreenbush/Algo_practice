## 234. Palindrome Linked List
# 55.6%
import math

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next # reference to the next node

class LinkedList:
    def __init__(self):
        self.head = None

    def insertNode(self, data): # need for LC problem
        newNode = ListNode(data)
        if self.head is None: # list is empty
            self.head = newNode
            return self

        curr_node = self.head # curr_node is a pointer
        while curr_node.next: # find end of list and add new node
            curr_node = curr_node.next
        curr_node.next = newNode
        return self

    def printList(self):
        current_node = self.head
        while current_node:
            print(current_node.val)
            current_node = current_node.next


listylist = LinkedList()

listylist.insertNode(1).insertNode(9)#.insertNode(2).insertNode(1)

# listylist.printList()

def isPalindrome(start):
    data = []

    current_node = start
    while current_node:
        data.append(current_node.val)
        current_node = current_node.next

    # indices
    beg = 0
    end = -1

    for _ in range(math.floor(len(data)/2)):
        if data[beg] is not data[end]:
            return False
        beg += 1
        end -= 1

    print(data)
    return True

print(isPalindrome(listylist.head))