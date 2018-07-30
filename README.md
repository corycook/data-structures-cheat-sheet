# data-structures-cheat-sheet
Descriptions of common data structures, their methods, and big-O analysis. Some implementation examples in JavaScript.

# Linked List

A typical linked list has a pointer to a "head" node. Every node will have a value and a pointer to the next node.

| operation   | O(n) | description | optimization |
|-------------|------|-------------|--------------|
| addFirst    | O(1) | add an element to the beginning of the list | |
| addLast     | O(n) | add an element to the end of the list | having a pointer to the end of the list makes this O(1) |
| insert      | O(n) | add an element before or after the indicated value | |
| delete      | O(n) | delete an element from the list | |
