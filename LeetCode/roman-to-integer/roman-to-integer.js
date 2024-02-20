function romanToInt(rn) {
  // split string to separate letters in an array
  const rnArr = rn.split("");
  // define number to add values to
  let number = 0;
  // iterate through array checking each letter
  for (let i = 0; i < rnArr.length; i++) {
    // e.g. [M,C,M,X,C,I,V]
    switch (rnArr[i]) {
      case "M":
        number += 1000;
        break;
      case "D":
        number += 500;
        break;
      case "C":
        if (rnArr[i + 1] === "D") {
          rnArr.splice(i, 2, "CD");
          number += 400;
          i - 1;
        } else if (rnArr[i + 1] === "M") {
          rnArr.splice(i, 2, "CM");
          number += 900;
          i - 1;
        } else {
          number += 100;
        }
        break;
      case "L":
        number += 50;
        break;
      case "X":
        if (rnArr[i + 1] === "L") {
          rnArr.splice(i, 2, "XL");
          number += 40;
          i - 1;
        } else if (rnArr[i + 1] === "C") {
          rnArr.splice(i, 2, "XC");
          number += 90;
          i - 1;
        } else {
          number += 10;
        }
        break;
      case "V":
        number += 5;
        break;
      case "I":
        if (rnArr[i + 1] === "V") {
          rnArr.splice(i, 2, "IV");
          number += 4;
          i - 1;
        } else if (rnArr[i + 1] === "X") {
          rnArr.splice(i, 2, "IX");
          number += 9;
          i - 1;
        } else {
          number += 1;
        }
        break;
    }
  }
  return number;
}
