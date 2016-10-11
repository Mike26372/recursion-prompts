/* jshint esversion: 6 */

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
// var _ = require('underscore');


var factorial = function(n) {
  if (n < 0) return null;
  if (n === 0) return 1;
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  var index = arguments[1] || 0;
  if (array.length === index) return 0;
  return array[index] + sum(array,index+1);  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  return array.reduce(function(acc,curr) {
    if(Array.isArray(curr)) {
      return acc + arraySum(curr);
    };
    return acc + curr;
  }, 0);
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) n = -n;

  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n-2);
  }
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  var sum = arguments[1] || 0;
  var inc = arguments[2] || 1;
  
  if (n < 0) {
    inc = -1;
    n = -n
  } 
  if (n === 0 && sum === 0) return sum;
  if (n === 0) {
    return sum * inc;
  } else {
    sum += n-1;
    return sumBelow(n-1, sum, inc);
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var arr = arguments[2] || [];
  var increment = arguments[3] || 0;
  if (x < y) increment = 1;
  if (x > y) increment = -1;
  if (x === y - increment) return arr;
  arr.push(x+increment);
  return range(x+increment,y,arr,increment);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (exp === -1) return (1 / base);
  if (exp < 0) return (1 / base) * exponent(base,exp+1);
  return base * exponent(base, exp-1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n < 0) return false;
  if (n === 0) return false;
  var total = arguments[1] || 1;
  if (n === total) return true;
  if (total > n) return false;
  return powerOfTwo(n,total*2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if(arguments[1]) return arguments[1];
  var reversed = string.split('').reverse().join('');
  return reverse(string,reversed);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var reversed = arguments[1] || 0;
  if (reversed) return reversed === string;
  return palindrome(string.toLowerCase().replace(/\s/gi,''), string.toLowerCase().replace(/\s/gi,'').split('').reverse().join(''));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  var xFlip = -x;
  var yFlip = -y;
  if (x === 0 && y === 0) 
    return NaN; 
  else if (x === 0)
    return 0;
  else if (x < y && x > 0) 
    return x;
  else if (x < 0 && y > 0 && xFlip < y)
    return x;
  else if (x > y && xFlip < yFlip && x < 0 && y < 0) 
    return x;
  else if (x < 0 && y > 0)
    return modulo(x+y, y);
  else 
    return modulo(x-y, y);  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  total = arguments[2] || 0;
  if (y === 0) return total;
  if (x < 0 && y < 0) x = -x;
  total += x;
  if (y < 0) return multiply(x,y+1,total);
  return multiply(x,y-1,total);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
  var total = arguments[2] || 0;
  if (x===0 && y===0) return NaN;
  if (x < 0 && y < 0) {
    x = -x;
    y = -y
  }
  if (x < y || (x < 0 && -x < y)) return total;
  if (x < 0 || y < 0) total--;
  if (x > 0 && y > 0) total++;
  if (y < 0) return divide(x+y,y,total);
  return divide(x-y,y,total);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0) return null;
  if (y === 0) return x;
  return gcd(y,x%y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') return true;
  var index = arguments[2] || 0;
  if (index === 0){
    str1 = str1.split('');
    str2 = str2.split('');
  };
  if (str1[index] === str2[index] && index === Math.max(str1.length || str2.length)) return true;
  if (str1[index] === str2[index]) return compareStr(str1,str2,index+1);
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var index = arguments[1] || 0;
  var array = arguments[2] || [];
  if (index === str.length) return array;
  array.push(str[index]);
  return createArray(str,index+1,array);

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var index = arguments[1] || 1
  var len = array.length;
  var revArray = arguments[2] || [];
  if (index === len+1) return revArray;
  revArray.push(array[len-index]);
  return reverseArr(array,index+1,revArray);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var iteration = arguments[2] || 0;
  var list = arguments[3] || [];
  if (length === iteration) return list;
  list.push(value);
  return buildList(value,length,iteration+1,list);
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var len = array.length;
  var index = arguments[2] || 0;
  var count = arguments[3] || 0;
  if(len === index) return count;
  if (array[index] === value) count++;
  return countOccurrence(array,value,index+1,count);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var len = array.length;
  var index = arguments[2] || 0;
  var mapArr = arguments[3] || [];
  if (index === len) return mapArr;
  var called = callback.call(null, array[index]);
  mapArr.push(called);
  return rMap(array,callback,index+1,mapArr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var objKeys = arguments[2] || {};

  Object.keys(obj).forEach((eachkey) => {
    objKeys[eachkey] = objKeys[eachkey] || 0;
    objKeys[eachkey]++;
    if (typeof obj[eachkey] === "object") return countKeysInObj(obj[eachkey],key,objKeys);
  })
  return objKeys[key];
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var objVals = arguments[2] || {};
  Object.keys(obj).forEach(function(eachkey) {
      if (typeof obj[eachkey] === "object") return countValuesInObj(obj[eachkey],value,objVals);
      objVals[obj[eachkey]] = objVals[obj[eachkey]] || 0;
      objVals[obj[eachkey]]++;
  })
  return objVals[value] || 0;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  Object.keys(obj).forEach(function(eachkey) {
    if (eachkey === key) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
    if (typeof obj[eachkey] === "object" || typeof obj[newKey] === "object") return replaceKeysInObj(obj[eachkey] || obj[newKey], key, newKey)
  })
  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  var fibArr = arguments[1] || [];
  var index = arguments[2] || 0;
  if (n <= 0) return null;
  if (index === 0) fibArr.push(index);
  if (index > 0 && fibArr[index-2] === undefined) fibArr.push(index);
  if (fibArr[index-2] !== undefined) fibArr.push(fibArr[index-1] + fibArr[index-2]);
  if (n === index) return fibArr;
  return fibonacci(n,fibArr,index+1);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var len = array.length;
  var newArray = arguments[2] || [];
  var index = arguments[1] || 0;
  if (index === len) return newArray;
  newArray.push(array[index].toUpperCase());
  return capitalizeWords(array, index+1, newArray);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  var len = array.length;
  var newArray = arguments[2] || [];
  var index = arguments[1] || 0;
  if (index === len) return newArray;
  newArray.push(array[index][0].toUpperCase()+array[index].slice(1));
  return capitalizeFirst(array, index+1, newArray);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sumEven = arguments[1] || [];
  Object.keys(obj).forEach(function(eachkey) {
    if (obj[eachkey] % 2 === 0) sumEven.push(obj[eachkey]); 
    if (typeof obj[eachkey] === "object") return nestedEvenSum(obj[eachkey],sumEven);

  });
  return sumEven.reduce((acc,curr) => acc + curr);
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var accum = arguments[1] || [];
  return arrays.reduce(function (acc, curr) {
      if (Array.isArray(curr)) {
        return flatten(curr,accum);
      } 
      acc.push(curr);
      return acc;
    },accum);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  obj = obj || {};
  var index = arguments[2] || 0;
  if (index === str.length) return obj;
  obj[str[index]] = obj[str[index]] || 0;
  obj[str[index]]++;
  return letterTally(str,obj,index+1);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  var index = arguments[1] || 0;
  var compressedList = arguments[2] || [];
  if(index === list.length) return compressedList;
  if(list[index] !== list[index+1]) compressedList.push(list[index]);
  return compress(list,index+1, compressedList);
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var index = arguments[2] || 0;
  var augArr = arguments[3] || [];
  if (index === array.length) return augArr;
  if (Array.isArray(array[index])) {
    augArr.push(array[index].reduce((acc,curr) => {
      acc.unshift(curr);
      return acc;
    },[aug]));
  };
  return augmentElements(array,aug,index+1,augArr);
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var index = arguments[1] || 0;
  var minList = arguments[2] || [];
  if(index === array.length) return minList;
  if (array[index] === 0 && array[index+1] === 0) 
    return minimizeZeroes(array,index+1,minList);
  else {
    minList.push(array[index]);
    return minimizeZeroes(array,index+1,minList);
  }

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var index = arguments[1] || 0;
  var altArr = arguments[2] || [];
  if (index === array.length) return altArr;
  if (index % 2 === 0) 
    altArr.push(Math.abs(array[index]));
  else
    altArr.push(-Math.abs(array[index]));
  return alternateSign(array,index+1,altArr);

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  
  var numObj = {'1':'one', '2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','0':'zero'};
  var index = arguments[2] || 0;
  var strArr = arguments[3] || [];
  if (index === 0) strArr = str.split(' ');
  if (index === strArr.length) return strArr.join(' ');
  if (numObj[strArr[index]]) strArr[index] = numObj[strArr[index]];
  return numToText(str, numObj, index +1, strArr);
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};
