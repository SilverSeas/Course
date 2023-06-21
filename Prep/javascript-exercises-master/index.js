//reverse
function reverse(string) {
    return string.split('').reverse().join('');
  }
  
//factorial
function factorial(n) {
    if (n < 0) return "n must be >= 0";
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }
  
//3. longest Word
function longest_word(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
//sum
function sum_nums(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
//time
//Vowel count
function count_vowels(string) {
    let vowels = "aeiou";
    let count = 0;
    for (const char of string) {
      if (vowels.includes(char)) count++;
    }
    return count;
  }
  
//7.
function palindrome(string) {
    let reversed = string.split('').reverse().join('');
    return string === reversed;
  }
  
//8.
function nearby_az(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'a') {
        for (let j = 1; j <= 3; j++) {
          if (string[i + j] === 'z') {
            return true;
          }
        }
      }
    }
    return false;
  }

  nearby_az("abbbz")

//9.
function two_sum(num) {
    for (let i = 0; i < num.length; i++) {
      for (let j = i + 1; j < num.length; j++) {
        if (num[i] + num[j] === 0) {
          return [[i, j]];
        }
      }
    }
    return null;
  }
  
//10.
function is_power_of_two(num) {
    // If the number is less than or equal to 0, it can't be a power of 2.
    if (num <= 0) return false;
    
    // Keep dividing the number by 2 until it becomes 1 or it becomes odd (not divisible by 2).
    while (num > 1) {
        if (num % 2 !== 0) return false;
        num /= 2;
    }
    
    // If the number has been successfully divided by 2 until it became 1, it's a power of 2.
    return true;
}

console.log(is_power_of_two(8)); 
console.log(is_power_of_two(16));

//11
function repeat_string_num_times(str, num) {
    
    // empty result string. to put result in here later
    let result = "";
    // looks if is positive 
    if (num > 0) {
        // if the variable is smaller then the num we will push the string in the result. if still smaller then num again. this is how we repeat num times.
        for (let i = 0; i < num; i++) {
            result += str;
        }
    }
    return result;
}
repeat_string_num_times("abc", 3);


//12
let arr =[3,6]
function addAll(arr) {
    // find the min & max in  array
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);
    // empty variable -> store the sum here
    var sum = 0;
    // for loop to add the numbers between min and max 
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    // return the sum
    return sum;
  }
  console.log(addAll(arr))


//13 
function is_it_true(args) {
    if (typeof args == "boolean") {
        return true;
    } else {
     return false;
}
}
//14.
function largest_of_four(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
          let largestNumber = arr[i][0];
          for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
              largestNumber = arr[i][j];
            }
          }
          result.push(largestNum);
        }
        return result;
      }

  //15.
  function isAnagram (test, original) {
    return test.split("").sort().join("") === original.split("").sort().join("");
}

