function isPalindrome(x) {
  let reversedNumber = x.toString().split("").reverse().join("");
  return reversedNumber == x;
}
