//1.
 
if (typeof variable === 'string') {
    console.log('Variable is a string');
}
else {
    console.log('Variable is not a string');
}
//2.
isString=()=> {
  let variable1= [2,false,'wow']
  if (typeof variable1 == 'Array') {
    console.log('Variable is an array')
  }
  else {
    console.log('Variable is not an array')
  }  
}
isString()
  
//3
array= [53,6,'wow',79,true]

function sameType(array) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] !== typeof array[i + 1]) {
        return false;
      }
    }
    return true;
  }

console.log(sameType(array))
// 4.
let a = 'xyaabbbccccdefww';
let b = 'xxxxyyyyabklmopq';

function sortedAndRemoved() {
    let combined = (a + b).split('');
    let result = [];
    combined.forEach((char) => {
        if (!result.includes(char)) {
            result.push(char);
        }
      });
    return result.sort().join('');
}

console.log(sortedAndRemoved());

// 5.
let number = 4245909;

convert = () => {
  let newNumber = number.toString().split('').reverse().join('');
  return newNumber;
};

console.log(convert());

//6.
const authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante'];
const counts = {};

for (const num of authors) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts);

//Cat Mouse
function catAndMouse(inputString) {
    let catPosition = inputString.indexOf('C');
    let mousePosition = inputString.indexOf('m');
  
    if (catPosition + 3 >= mousePosition) {
      return "Caught!";
    } else {
      return "Escaped!";
    }
  }

//spill the bill
function splitTheBill(group) {
    let totalExpense = 0;
    let groupSize = Object.keys(group).length;
  
    // total expenses
    for (const name in group) {
      totalExpense += group[name];
    }
  
    // average expense
    const avgExpense = totalExpense / groupSize;
  
    // empty  result object to store the compensation 
    const result = {};
  
    //  compensation amount for each member
    for (const name in group) {
      result[name] = avgExpense - group[name];
    }
  
    return result;
  }
  
//Exponentiation
function exponentiation(b, n) {
  let result = 1;
  while (n > 0) {
    result *= b;
    n--;
  }
  return result;
}

exponentiation(5, 3)
exponentiation(6, 0)

//pig latin

function translatePigLatin(str) {
    let vowels = ['a','e','i','o','u'];
    let start = 0;
  
    // Find the index of the first vowel
    while (!vowels.includes(str[start].toLowerCase())) {
      start++;
    }
  
    // If the word starts with a vowel, add 'way' to the end
    if (start === 0) {
      str = str + 'way';
    } else {
      // Otherwise, move all consonants up to the first vowel to the end of the word and add 'ay'
      let cluster = str.slice(0, start);
      str = str.slice(start) + cluster + 'ay';
    }
  
    console.log(str);
}

// Example 
translatePigLatin("Hello how are you?"); 

//Search and replace
function myReplace(str, before, after) {
  let newStr = str.split(" ");
  let index = newStr.indexOf(before);
  if (newStr[index][0] === newStr[index][0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  newStr[index] = after;
  return newStr.join(" ");
}


//translate english
let num = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
function toEnglish(num) {
    let numWords = num.split(' ');
    let result = '';
    for (let i = 0; i < numWords.length; i++) {
        result += String.fromCharCode(parseInt(numWords[i], 2));
    }
    return result;
}
console.log(toEnglish(num))

//Ending
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

//arr
let arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
let arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

function diffArray(arr1, arr2) {
  let result = [];

  function noMatches(baseArr, compArr) {
    for (let i = 0; i < baseArr.length; i++) {
      if (!compArr.includes(baseArr[i])) {
        result.push(baseArr[i]);
    }
  }
  }
  noMatches(arr1, arr2); //Here the base Array baseArr is arr 1 and it gets compared to arr2. we loop through arr 1 and check if the element i is not in arr to. if not we push to result
  noMatches(arr2, arr1); // same but now arr 2 is the base and we see if that array has other elements that arr 1 does not have, then push them to result too.

  return result;
}


