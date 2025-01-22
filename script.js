console.log("Level 1: Basics");
console.log("1. Write a program to check if a number is odd or even.");
let oneNum = 34;
if (oneNum % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

console.log("2. Create a function to calculate the factorial of a number.");
let factNum = 5;
let factorial = 1;
function calculateFactorial() {
  for (let i = 1; i <= factNum; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}
calculateFactorial();

console.log("3. Write a program to reverse a string.");
let revStr = "Cascading Style Sheet";
console.log(revStr);
revStr = revStr.split("");
revStr = revStr.reverse();
revStr = revStr.join("");
console.log(revStr);

console.log("4. Create a function to check if a string is a palindrome.");
let nStr = "Javascript";
let palStr = nStr.split("");
palStr = palStr.reverse();
palStr = palStr.join("");
if (nStr === palStr) {
  console.log(nStr);
  console.log(palStr);
  console.log("The string is a palindrome");
} else {
  console.log(nStr);
  console.log(palStr);
  console.log("The string is not a palindrome");
}

console.log("5. Generate a Fibonacci sequence up to a given number.");
function fibonacciSeries(limit) {
  let a = 0;
  let b = 1;
  let fibSeries = [];
  if (limit >= 0) {
    fibSeries.push(a);
  }
  while (b <= limit) {
    fibSeries.push(b);
    var next = a + b;
    a = b;
    b = next;
  }
  return fibSeries;
}
let limit = 50;
console.log(fibonacciSeries(limit));

console.log("6. Count the number of vowels in a string.");
let vStr = "Karachi, the city of lights";
let vCount = 0;
console.log(vStr);
vStr = vStr.split("");
for (let i = 0; i < vStr.length; i++) {
  if (
    vStr[i] === "a" ||
    vStr[i] === "e" ||
    vStr[i] === "i" ||
    vStr[i] === "o" ||
    vStr[i] === "u"
  ) {
    vCount++;
  }
}
console.log(vCount);

console.log("7. Write a program to find the largest number in an array.");
let lArr = [23, 43, 11, 2, 44, 56];
let largeNumArr = 0;
for (let i = 0; i < lArr.length; i++) {
  if (largeNumArr < lArr[i]) {
    largeNumArr = lArr[i];
  }
}
console.log(largeNumArr);

console.log("8. Check if a number is prime or not.");
let pNum = 887;
function checkingPrimeNumbers() {
  if (pNum <= 1) {
    console.log(`${pNum} is not a prime number`);
  } else if (pNum === 2) {
    console.log(`${pNum} is the only even prime number`);
  } else if (pNum % 2 === 0) {
    console.log(`${pNum} is not a prime number`);
  } else {
    console.log(`${pNum} is a prime number`);
  }
  for (let i = 3; i <= Math.sqrt(pNum); i += 2) {
    if (pNum % i === 0) {
      console.log(`${pNum} is not a prime number`);
    }
  }
}
checkingPrimeNumbers();

console.log(
  "9. Sort an array in ascending order without using built-in methods."
);
let sArr = [4, 9, 3, 5, 2, 1, 8, 0, 7, 6, 44, 24, 25, 97, 45, 76, 35, 22];
// sArr = sArr.join('');
for (let i = 0; i < sArr.length; i++) {
  for (let j = 0; j < sArr.length; j++) {
    if (sArr[i] < sArr[j]) {
      let swap = sArr[j];
      sArr[j] = sArr[i];
      sArr[i] = swap;
    }
  }
}
console.log(sArr);

console.log("10. Find the sum of all numbers in a given array.");
let sumArr = [4, 9, 3, 5, 2, 1, 8, 0, 7, 6, 44, 24, 25, 97, 45, 76, 35, 22];
let sumOfArr = 0;
for (let i = 0; i < sumArr.length; i++) {
  sumOfArr += sumArr[i];
}
console.log(sumOfArr);

console.log("Level 2: Intermediate");
console.log(
  "1. Write a program to find the second-largest number in an array."
);
let sLargestNumArr = [
  4, 9, 3, 5, 2, 1, 8, 0, 7, 6, 44, 24, 25, 97, 45, 76, 35, 22,
];
let largestNum = 0;
let secondLargestNum = 0;
for (let i = 0; i < sLargestNumArr.length; i++) {
  if (largestNum < sLargestNumArr[i]) {
    largestNum = sLargestNumArr[i];
  }
  if (sLargestNumArr[i] > secondLargestNum && sLargestNumArr[i] < largestNum) {
    secondLargestNum = sLargestNumArr[i];
  }
}
console.log(largestNum);
console.log(secondLargestNum);

console.log(
  "2. Create a function to merge two sorted arrays into one sorted array."
);
let sArr1 = [45, 32, 55, 22];
let sArr2 = [11, 43, 89, 21];
for (let i = 0; i < sArr1.length; i++) {
  for (let j = 0; j < sArr1.length; j++) {
    if (sArr1[i] < sArr1[j]) {
      let swap = sArr1[j];
      sArr1[j] = sArr1[i];
      sArr1[i] = swap;
    }
  }
}
for (let i = 0; i < sArr2.length; i++) {
  for (let j = 0; j < sArr2.length; j++) {
    if (sArr2[i] < sArr2[j]) {
      let swap = sArr2[j];
      sArr2[j] = sArr2[i];
      sArr2[i] = swap;
    }
  }
}
let mArr = sArr2.concat(sArr1);
for (let i = 0; i < mArr.length; i++) {
  for (let j = 0; j < mArr.length; j++) {
    if (mArr[i] < mArr[j]) {
      let swap = mArr[j];
      mArr[j] = mArr[i];
      mArr[i] = swap;
    }
  }
}
console.log(sArr1);
console.log(sArr2);
console.log(mArr);

console.log("3. Write a program to remove duplicates from an array.");
let dArr = [32, 34, 31, 35, 31, 39, 38, 34, 32, 38];
console.log(dArr);
for (let i = 0; i < dArr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (dArr[i] === dArr[j]) {
      dArr.splice(i, 1);
      i--;
      break;
    }
  }
}
console.log(dArr);

console.log("4. Check if two strings are anagrams of eachother.");
let aStr1 = "listen";
let aStr2 = "silent";
console.log(aStr1);
console.log(aStr2);
aStr1 = aStr1.split("").sort().join("");
aStr2 = aStr2.split("").sort().join("");
if (aStr1.length !== aStr2.length) {
  console.log("They cannot be anagrams (Different lengths)");
}
if (aStr1 === aStr2) {
  console.log("They are anagrams");
} else {
  console.log("They are not anagrams");
}

console.log("5. Implement a function to find the GCD of two numbers.");
let gNum1 = 16;
let gNum2 = 20;
function findingGCD(a, b) {
  while (b !== 0) {
    let rem = a % b;
    a = b;
    b = rem;
  }
  return a;
}
console.log(findingGCD(gNum1, gNum2));

console.log(
  "6. Write a program to count the frequency of elements in an array."
);
let fArr = [2, 3, 0, 1, 9, 5];
function countFrequency() {
  let frequency = {};
  for (let i = 0; i < fArr.length; i++) {
    if (frequency[fArr[i]]) {
      frequency[fArr[i]]++;
    } else {
      frequency[fArr[i]] = 1;
    }
  }
  return frequency;
}
console.log(countFrequency());

console.log("7. Find the longest word in a sentence.");
let lStr = "JavaScript is both, a programming and web language";
let words = lStr.split(" ");
let longestWord = "";
for (let word of words) {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
}
console.log(longestWord);

console.log(
  "8. Create a function to rotate an array by a given number of steps."
);
let rArr = [1, 4, 5, 6, 7, 2];
let rSteps = 3;
function rotateArray() {
  let rRes = [...rArr];
  for (let i = 0; i < rSteps; i++) {
    let lastElement = rRes.pop();
    rRes.unshift(lastElement);
  }
  return rRes;
}
console.log(rotateArray());

console.log("9. Implement a function to flatten a nested array.");
let fNestedArr = [1, [2, [3, [4, 9]], 0], 7];
function flattenArray(fNestedArr) {
  let fRes = [];
  for (let i = 0; i < fNestedArr.length; i++) {
      if (Array.isArray(fNestedArr[i])) {
          const flattened = flattenArray(fNestedArr[i]);
          fRes = fRes.concat(flattened);
      } else {
          fRes.push(fNestedArr[i]);
      }
  }
  return fRes;
}
const flattened = flattenArray(fNestedArr);
console.log(flattened);

console.log("10. Write a program to calculate the sum of digits of a number.");
function sumOfDigits(num) {
  let sSum = 0;
  let sNum = Math.abs(num);
  while(sNum > 0) {
    let sDigit = sNum % 10;
    sSum += sDigit;
    sNum = Math.floor(sNum / 10);
  }
  return sSum;
}
let sNum = 12345;
let sRes = sumOfDigits(sNum);
console.log(sRes);

console.log("Level 3: Advanced");
console.log("1. Write a recursive function to calculate the power of a number.");
let pBase = 5;
let pExpo = 3;
function powerNum(base, expo) {
  if(expo === 0) {
    return 1;
  }
  return base * powerNum(base, expo - 1);
}
let pRes = powerNum(pBase, pExpo);
console.log(`${pBase}^${pExpo} = ${pRes}`);

console.log("2. Implement a function to find all permutations of a string.");
function stringPermutation(str) {
  if(str.length === 1){
    return [str];
  }
  let permutations = [];
  for(let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let remainingChars = str.slice(0, i) + str.slice(i + 1);
    let remainingPermutations = stringPermutation(remainingChars);
    for(let perm of remainingPermutations) {
      permutations.push(currentChar + perm);
    }
  }
  return permutations;
}
let pStr = "abc";
let premRes = stringPermutation(pStr);
console.log(premRes);

console.log("3. Write a program to generate Pascal's Triangle.");
function generatePascalsTriangle(rows) {
  let triangle = []
  for(let i = 0; i < rows; i++) {
    let row = [];
    for(let j = 0; j <= i; j++) {
      if(j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row);
  }
  return triangle;
}
let rows = 6;
let pascalsTriangle = generatePascalsTriangle(rows);
for(let row of pascalsTriangle) {
  console.log(row.join(' '));
}

console.log("4. Implement binary search in a sorted array.");
function binarySearch(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  while(left <= right) {
    let middle = Math.floor((left + right) / 2);
    if(sortedArr[middle] === target) {
      return middle;
    }
    if(sortedArr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
let sortedArr = [1, 2, 4, 5, 7, 8, 11];
let target = 3;
let bRes = binarySearch(sortedArr, target);
if(bRes !== -1) {
  console.log(`Target ${target} is at index ${bRes}`);
} else {
  console.log(`${target} is not in the array`);
}