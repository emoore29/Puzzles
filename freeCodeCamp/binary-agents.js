// Converts a string of binary to English

function binaryAgent(str) {
  let binaryArr = str
    .split(" ")
    .map((binary) => parseInt(binary, 2)) // Converts binary into decimal numbers, that represent ASCII/Unicode characters
    .map((num) => String.fromCharCode(num))
    .join("");

  return binaryArr;
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
