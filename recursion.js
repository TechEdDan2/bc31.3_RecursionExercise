/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if (nums.length === 0) return 1;

  //normal case
  return nums[0] * product(nums.slice(1))

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //base case
  if (words.length === 0) return 0;

  //normal case
  const firstWordLength = words[0].length;
  const restLongest = longest(words.slice(1));

  return Math.max(firstWordLength, restLongest);

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case
  if (str.length === 0) return '';

  //normal case
  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if (str.length <= 1) return true;

  //Check inequality by comparing the first and last characters
  if (str[0] !== str[str.length - 1]) return false;

  //normal case
  return isPalindrome(str.slice(1, -1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  //base case
  if (arr.length === 0) return -1;

  //normal case
  if (arr[0] === val) {
    return 0;
  } else {
    let i = findIndex(arr.slice(1), val);
    if (i === -1) {
      return -1;
    } else {
      return 1 + i;
    }
  }

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  //base
  if (str.length === 0) return "";

  //normal case
  return str.slice(-1) + revString(str.slice(0, -1));

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  //base case
  //if no more keys left to process
  if (Object.keys(obj).length === 0) return [];

  //normal case
  const foundStrings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      foundStrings.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      //use the spread operator to add each string
      foundStrings.push(...gatherStrings(obj[key]));
    }
  }
  return foundStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
