// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//.toString() 
//Math.sign(v) = v or - = -
//parseInt()


//my solution before the answer (it works)
function reverseInt(n) {
    const numSign = Math.sign(n) ;
    return parseInt(n.toString().split('').reverse().join(''))* numSign ;
}

//1.)
// function reverseInt(n) {
//     const reversed = n 
//         .toString()
//         .split('')
//         .reverse()
//         .join('');
    
//     return parseInt(reversed) * Math.sign(n);
// }


module.exports = reverseInt;
