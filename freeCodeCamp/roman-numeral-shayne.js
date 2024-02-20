function convertToRoman(num) {
    
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = "";
    for(let i = 0; i < roman.length; i++) {
        if(num >= decimal[i]) {
            result = result + roman[i];
            num -= decimal[i];
            i = -1;
        }
    }
    return result;

}


console.log(convertToRoman(2014)) 
//MCDXXX