// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
// Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
// Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
// Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.


// ASCII Characters: 
//     "65": "A",    
//     "66": "B",
//     "67": "C",
//     "68": "D",
//     "69": "E",
//     "70": "F",
//     "71": "G",
//     "72": "H",
//     "73": "I",
//     "74": "J",
//     "75": "K",
//     "76": "L",
//     "77": "M",
//     "78": "N",
//     "79": "O",
//     "80": "P",
//     "81": "Q",
//     "82": "R",
//     "83": "S",
//     "84": "T",
//     "85": "U",
//     "86": "V",
//     "87": "W",
//     "88": "X",
//     "89": "Y",
//     "90": "Z",


function cipher(str) {

    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }

console.log(arr) 

    
}
