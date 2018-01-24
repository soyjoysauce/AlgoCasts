// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//1.)
// function reverse(str) {
//     return str
//     .split("")
//     .reverse()
//     .join("");
//   }

//2.)
function reverse(str) {
    let reversed = '';
    
    for(let character of str){
        reversed = character + reversed;
        debugger;
    }
    return reversed;
  }
  
//3.)
// function reverse(str) {
//   return str.split('').reduce((rev, char)=> {
//       return char + rev
//     }, '');
// }

//4.)
// function reverse(str) {
//     return str.split('').reduce((rev, char)=> char + rev, '');
//   }

//this callback is for the Node debugger; 
reverse('asdf');
module.exports = reverse;