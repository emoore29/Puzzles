
function rot13(str, shifter) {

    let decodedStr = "";

    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) { //if it's a letter
            let cipherChar = str.charCodeAt(i);
            let x = cipherChar - shifter;
             if (x < 65) { //to loop back to Z if decoding falls below A
                let diff = 65 - x;
                let trueChar = 91 - diff;
                decodedStr = decodedStr + String.fromCharCode(trueChar)
            } else { //if decoding does not fall below A
                let trueChar = cipherChar - shifter
                decodedStr = decodedStr + String.fromCharCode(trueChar)
            }
        } else { //if it's not a letter
            decodedStr = decodedStr + str[i]
        }
    }
    return decodedStr;
}

console.log(rot13("SERR PBQR PNZC", 13))