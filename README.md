# data-structures-cheat-sheet
Descriptions of common data structures, their methods, and big-O analysis. Some implementation examples in JavaScript.

# Linked List

A typical linked list has a pointer to a "head" node. Every node will have a value and a pointer to the next node.

| operation   | description | Singly O(n) | Singly Tailed O(n) | Doubly O(n) |
|-------------|-------------|-------------|--------------------|-------------|
| shift       | add an element to the beginning of the list | O(1) | O(1) | O(1) |
| unshift     | remove an element from the beginning of the list | O(1) | O(1) | O(1) |
| push        | add an element to the end of the list | O(n) | O(1) | O(1) |
| pop         | remove an element from the end of the list | O(n) | O(n) | O(1) |
| insert      | add an element before or after the indicated value | O(n) | O(n) | O(n) |
| delete      | delete an element from the list | O(n) | O(n) | O(n) |
| find        | find an element by value | O(n) | O(n) | O(n) |

