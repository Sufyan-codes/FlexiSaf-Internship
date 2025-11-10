 1. Searching Algorithms
🔍 Linear Search

Check each element until you find the target.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}


Use when: List isn’t sorted.
Time complexity: O(n)

Binary Search

Cut the search space in half each time — works only on sorted arrays.

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}


Use when: Array is sorted.
Time complexity: O(log n)

2. Sorting Algorithms
Bubble Sort

Compare and swap adjacent elements repeatedly.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}


Time complexity: O(n²)

Quick Sort

Divide array into smaller parts and recursively sort.

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}


Time complexity: O(n log n) average
3. Data Structures
 Stack (LIFO — Last In, First Out)
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}


Used in undo actions, call stacks, parentheses matching.

 Queue (FIFO — First In, First Out)
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
}


Used in task scheduling, print queues, etc.

 Binary Tree (Simplified Example)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


Used for hierarchical data, file systems, and search trees.