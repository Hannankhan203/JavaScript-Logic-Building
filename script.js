// Level 1: Basics
// 1. Write a program to check if a number is odd or even.
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(4));

// 2. Create a function to calculate the factorial of a number.
function factorialOfANumber(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorialOfANumber(5));

// 3. Write a program to reverse a string.
function reversingString(str) {
  str = str.split("");
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}
console.log(reversingString("box"));

// 4. Create a function to check if a string is a palindrome.
function palindromeChecker(str) {
  revString = str.split("").reverse().join("");
  if (str === revString) {
    return "It is a palindrome";
  } else {
    return "It is not a palindrome";
  }
}
console.log(palindromeChecker("madam"));

// 5. Generate a Fibonacci sequence up to a given number.
function fibinacciSeries(limit) {
  let a = 0;
  let b = 1;
  let fibSeries = [];
  if (limit >= 0) {
    fibSeries.push(a);
  }
  while (b <= limit) {
    fibSeries.push(b);
    let next = a + b;
    a = b;
    b = next;
  }
  return fibSeries;
}
console.log(fibinacciSeries(50));

// 6. Count the number of vowels in a string.
function countingVowels(str) {
  let count = 0;
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countingVowels("karachi is the city of lights"));

// 7. Write a program to find the largest number in a array.
function findingLargestNumber() {
  let arr = [3, 55, 11, 22, 99, 111];
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      largestNumber = arr[i];
    }
  }
  console.log(largestNumber);
}
findingLargestNumber();

// 8. Check if a number is prime or not.
function checkingPrimeNumbers(num) {
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  if (num <= 1) {
    return `${num} is not a prime number`;
  } else if (num === 2) {
    return `${num} is the only even prime number`;
  } else if (num % 2 === 0) {
    return `${num} is not a prime number`;
  } else {
    return `${num} is a prime number`;
  }
}
console.log(checkingPrimeNumbers(67));

// 9. Sort an array in ascending order without using built0in methods.
function sortingAnArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let swap = arr[j];
        arr[j] = arr[i];
        arr[i] = swap;
      }
    }
  }
  console.log(arr);
}
sortingAnArray([4, 2, 5, 1, 3]);

// 10. Find the sum of all numbers in a given array.
function sumOfAllNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
sumOfAllNumbers([1, 2, 3, 4, 5]);

// Level 2: Intermediate
// 1. Write a program to find the second-largest number in an array.
function findingSecondLargestNumber(arr) {
  let largestNumber = arr[0];
  let secondLargestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    }
    if (secondLargestNumber < arr[i] && largestNumber > arr[i]) {
      secondLargestNumber = arr[i];
    }
  }
  console.log(secondLargestNumber);
}
findingSecondLargestNumber([2, 3, 5, 1, 8, 4, 9]);

// 2. Create a function to merge two sorted arrays into one sorted array.
function mergeSortedArrays() {
  let arr1 = [8, 7, 6, 5];
  let arr2 = [4, 3, 2, 1];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr1[i] < arr1[j]) {
        let swap = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = swap;
      }
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr2[i] < arr2[j]) {
        let swap = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = swap;
      }
    }
  }
  let mergedArr = arr1.concat(arr2);
  for (let i = 0; i < mergedArr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (mergedArr[i] < mergedArr[j]) {
        let swap = mergedArr[i];
        mergedArr[i] = mergedArr[j];
        mergedArr[j] = swap;
      }
    }
  }
  console.log(mergedArr);
}
mergeSortedArrays();

// 3. Write a program to remove duplicates from an array.
function removingDuplicates(arr) {
  // let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(i, 1);
        i--;
        break;
      }
    }
  }
  console.log(arr);
}
removingDuplicates([2, 5, 3, 5, 2, 3, 1, 1, 1, 5]);

// 4. Check if two strings are anagram of eachother.
function checkingAnagramStrings(str1, str2) {
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  if (str1.length !== str2.length) {
    return "Ther cannot be anagram because of different lengths";
  } else if (str1 === str2) {
    return "They are anagram";
  } else {
    return " They are not anagram";
  }
}
console.log(checkingAnagramStrings("listen", "silent"));

// 5. Implement a function to find the GCD of two numbers.
function findingGCDOfNumbers(num1, num2) {
  while (num2 !== 0) {
    let rem = num1 % num2;
    num1 = num2;
    num2 = rem;
  }
  return num1;
}
console.log(findingGCDOfNumbers(16, 20));

// 6. Write a program to count the frequency of elements in an array.
function countingFrequencyOfElements(arr) {
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
}
console.log(countingFrequencyOfElements([2, 3, 4, 5, 6, 7, 8, 9]));

// 7. Find the longest word in a sentence.
function findingLongestWord(str) {
  str = str.split(" ");
  let longestWord = "";
  for (let word of str) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findingLongestWord("karachi is the biggest city in pakistan"));

// 8. Create a function to rotate an array by a given number of steps.
function rotatingAnArray(arr, steps) {
  let rotatingArr = [...arr];
  for (let i = 0; i <= steps; i++) {
    let lastElement = rotatingArr.pop();
    rotatingArr.unshift(lastElement);
  }
  return rotatingArr;
}
console.log(rotatingAnArray([1, 2, 3, 4, 5], 7));

// 9. Implement a function to flatten a nested array.
function flatteningAnArray(arr) {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flattened = flatteningAnArray(arr[i]);
      flattenedArr = flattenedArr.concat(flattened);
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
}
console.log(flatteningAnArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]));

// 10. Write a program to calculate the sum of digits of a number.
function sumOfDigits(num) {
  numStr = Math.abs(num).toString();
  let sum = 0;
  for (let digit of numStr) {
    sum += Number(digit);
  }
  return sum;
}
console.log(sumOfDigits(123));

// Level 3: Advanced
// 1. Write a recursive function to calculate the power of a number.
function calculatingPowerOfANumber(base, expo) {
  if (expo === 0) {
    return 1;
  }
  return base * calculatingPowerOfANumber(base, expo - 1);
}
console.log(calculatingPowerOfANumber(3, 3));

// 2. Implement a function to find all the permutations of a string.
function stringPermutation(str) {
  if (str.length === 1) {
    return [str];
  }
  let permutations = [];
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let remainingChar = str.slice(0, i) + str.slice(i + 1);
    let remainingPermutations = stringPermutation(remainingChar);
    for (let perm of remainingPermutations) {
      permutations.push(currentChar + perm);
    }
  }
  return permutations;
}
console.log(stringPermutation("abc"));

// 3. Write a function to generate Pascal's Triangle.
function generatingPascalsTriangle(row) {
  let triangle = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}
let parcalsRows = 6;
let pascalsTriangle = generatingPascalsTriangle(parcalsRows);
for (let row of pascalsTriangle) {
  console.log(row.join(" "));
}

// 4. Implement binary search in a sorted array.
function binarySearchInASortedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearchInASortedArray([1, 2, 3, 4, 5], 1));

// 5. Write a program to check if a matrix is symmetric.
function isSymmetric(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  if (rows !== cols) {
    return false;
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  isSymmetric([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// 6. Create a function to find the longest increasing subsequence in an array.
function findingTheLongestIncreasingSubsequence(nums) {
  let dp = [];
  for (const num of nums) {
    let left = 0;
    let right = dp.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (dp[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (left === dp.length) {
      dp.push(num);
    } else {
      dp[left] = num;
    }
  }
  return dp.length;
}
console.log(findingTheLongestIncreasingSubsequence([1, 2, 3, 4, 5, 6, 7]));

// 7. Implement a function to calculate the square root of a number without using built-in methods.
function findingSquareRoot(num, precision = 0.00001) {
  if (num < 0) {
    return "Square root of negative numbers is not real";
  }
  if (num === 0 || num === 1) {
    return num;
  }
  let guess = num;
  while (Math.abs(guess * guess - num) > precision) {
    guess = (guess + num / guess) / 2;
  }
  return guess;
}
console.log(findingSquareRoot(25));

// 8. Write a program to find the shortest word in a sentence.
function findingShortestWord(str) {
  str = str.split(" ");
  let shortestWord = str[0];
  for (let word of str) {
    if (shortestWord.length > word.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
console.log(findingShortestWord("karachi is the biggest city of pakistan"));

// 9. Create a function to find all subsets of a given array.
function findSubsets(arr) {
  let result = [[]];
  for (let num of arr) {
    let newSubsets = [];
    for (let subset of result) {
      newSubsets.push([...subset, num]);
    }
    result = result.concat(newSubsets);
  }
  return result;
}
let subsetArr = [1, 2, 3, 4, 5];
console.log(findSubsets(subsetArr));

// 10. Implement a function to solve the "Tower of Hanoi" problem.
function towerOfHanoi(num, fromRod, toRod, auxRod) {
  if (num === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(num - 1, fromRod, auxRod, toRod);
  console.log(`Move disk ${num} from ${fromRod} to ${toRod}`);
  towerOfHanoi(num - 1, auxRod, toRod, fromRod);
}
towerOfHanoi(3, "A", "B", "C");

// Level 4: Problem Solving
// 1. Write a program to solve the "Two sum" problem.
function twoSumProblem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log(i, j);
      }
    }
  }
}
twoSumProblem([1, 2, 3, 4, 5], 5);

// 2. Create a function to determine if a string has all unique character.
function checkingUniqueCharacters(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        console.log("The string does not have all unique characters");
        return;
      }
    }
  }
  console.log("The string has all unique characters");
}
checkingUniqueCharacters("hanoi");

// 3. Implement a program to find the intersection of two array.
function findingIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
console.log(findingIntersection([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]));

// 4. Write a program to find the missing numbers in an array of consecutive integers.
function findingMissingNumber(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let completeArray = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  return completeArray.filter((num) => !arr.includes(num));
}
console.log(findingMissingNumber([1, 2, 4, 6, 7, 9]));

// 5. Implement a function to group anagrams together.
function anagramsGroups(wordsArr) {
  let anagramGroups = {};
  wordsArr.forEach((word) => {
    let sortedWord = word.split("").sort().join("");
    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(word);
  });
  return Object.values(anagramGroups);
}
console.log(anagramsGroups(["listen", "silent", "ate", "eat", "cat", "tea"]));

// 6. Write a program to calculate the maximum profit from stock prices.
function calculatingMaxProfit(prices) {
  if (prices.length < 2) {
    return 0;
  }
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;
    maxProfit = Math.max(maxProfit, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}
console.log(calculatingMaxProfit([7, 4, 3, 9, 2, 8]));

// 7. Find the largest contiguous subarray sum (Kadane's Algorithm).
function maxSubarraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([-3, 4, 2, 5, 6, 3, -3, -6, -3, 3]));

// 8. Create a function to check if a string is a valid parenthesis sequence.
function isParenthesisSequenceValid(str) {
  const stack = [];
  const mapping = { ")": "(", "}": "{", "]": "[" };
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== mapping[char]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
console.log(isParenthesisSequenceValid("{[()]}"));

// 9. Implement a function to convert a Roman numeral to an integer.
function romanToInteger(r) {
  const romanToIntegerMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let prevValue = 0;
  for (let i = r.length - 1; i >= 0; i--) {
    const currentChar = r[i];
    const currentValue = romanToIntegerMap[currentChar];
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    prevValue = currentValue;
  }
  return total;
}
console.log(romanToInteger("IV"));

// 10. Write a program to find the majority element in an array.
function findMajorElement(arr) {
  let count = 0;
  let candidate = null;
  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  let occurance = arr.filter((num) => num === candidate).length;
  return occurance > arr.length / 2 ? candidate : -1;
}
console.log(findMajorElement([2, 2, 2, 2, 1, 2, 3, 4, 2, 2, 2]));

// Level 5: Expert
// 1. Solve the "N-Queens" problem.
function solveNQueensProblem(n) {
  let result = [];
  let board = new Array(n).fill().map(() => new Array(n).fill("."));
  function isSafe(board, row, col, n) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") {
        return false;
      }
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }
    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }
    return true;
  }
  function solve(row) {
    if (row === n) {
      result.push(board.map((row) => row.join("")));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col, n)) {
        board[row][col] = "Q";
        solve(row + 1);
        board[row][col] = ".";
      }
    }
  }
  solve(0);
  return result;
}
console.log(solveNQueensProblem(4));

// 2. Write a program to implement a simple LRU Cache.
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      let firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}
let lru = new LRUCache(2);
lru.put(1, 10);
lru.put(2, 20);
console.log(lru.get(1));
lru.put(3, 30);
console.log(lru.get(2));
console.log(lru.get(3));

// 3. Create a function to solve the "Word Ladder" problem.
function wordLadder(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  let queue = [[beginWord, 1]];
  while (queue.length > 0) {
    let [word, steps] = queue.shift();
    if (word === endWord) return steps;
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        let newWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0;
}
console.log(
  wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

// 4. Implement the trie data structure and use it fot a prefix search.
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd;
  }
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}
let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));

// 5. Solve the "Sliding Window Maximum" problem.
function slidingWindowMax(nums, k) {
  let result = [];
  let deque = [];
  for (let i = 0; i < nums.length; i++) {
    if (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
}
console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3));

// 6. Implement the "Dijkstra's Algorithm" for finding the shortest path.
function dijkstra(graph, start) {
  let distances = {};
  let visited = new Set();
  let pq = [[0, start]];
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    let [dist, node] = pq.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    for (let neighbor in graph[node]) {
      let newDist = dist + graph[node][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        pq.push([newDist, neighbor]);
      }
    }
  }
  return distances;
}
let graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};
console.log(dijkstra(graph, "A"));

// 7. Write a program to solve the "Sudoku Solver" problem.
function solveSudoku(board) {
  function isValid(board, row, col, num) {
    let numStr = num.toString();
    for (let i = 0; i < 9; i++) {
      if (
        board[row][i] === numStr ||
        board[i][col] === numStr ||
        board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
          3 * Math.floor(col / 3) + (i % 3)
        ] === numStr
      ) {
        return false;
      }
    }
    return true;
  }
  function solve() {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === ".") {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, r, c, num)) {
              board[r][c] = num.toString();
              if (solve()) return true;
              board[r][c] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solve();
}
let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
solveSudoku(board);
console.log(board);

// 8. Create a function to find the median of two sorted array.
function findMedianSortedArrays(nums1, nums2) {
  let merged = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = Math.floor(merged.length / 2);
  return merged.length % 2 === 0
    ? (merged[mid - 1] + merged[mid]) / 2
    : merged[mid];
}
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

// 9. Implement a program to find the minimum spanning tree using Prim's Algorithm.
function primMST(graph) {
  let keys = {};
  let parent = {};
  let visited = new Set();
  for (let node in graph) {
    keys[node] = Infinity;
    parent[node] = null;
  }
  let startNode = Object.keys(graph)[0];
  keys[startNode] = 0;
  while (visited.size < Object.keys(graph).length) {
    let minNode = Object.keys(keys)
      .filter((n) => !visited.has(n))
      .reduce((min, n) => (keys[n] < keys[min] ? n : min), startNode);
    visited.add(minNode);
    for (let neighbor in graph[minNode]) {
      if (!visited.has(neighbor) && graph[minNode][neighbor] < keys[neighbor]) {
        keys[neighbor] = graph[minNode][neighbor];
        parent[neighbor] = minNode;
      }
    }
  }
  return parent;
}
let graph2 = {
  A: { B: 1, C: 3 },
  B: { A: 1, C: 1, D: 4 },
  C: { A: 3, B: 1, D: 1 },
  D: { B: 4, C: 1 },
};
console.log(primMST(graph2));

// 10. Solve the "Knapsack Problem" using dynamic programming.
function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          values[i - 1] + dp[i - 1][w - weights[i - 1]]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][capacity];
}
console.log(knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5));
