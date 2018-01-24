// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//My own solution - it works!!!

// function palindrome(str) {
//    let str_reversed = str.split('').reverse().join('');
//    return str === str_reversed ? true : false ;
//     debugger;
// }

//1.)
// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('');
//     return str === reversed ;
// }

//2.) uses every method however it does more work then needed
//always provide multiple kind of solutions during the interview; 
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


palindrome("abba");
module.exports = palindrome;
