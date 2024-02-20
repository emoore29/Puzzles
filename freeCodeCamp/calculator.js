let inputformula = "5-9+5" //example current state for input.formula1


let arr = inputformula.split(/(?=[x+\/-])|(?<=[x+\/-])/g); //Regex from: https://medium.com/@shemar.gordon32/how-to-split-and-keep-the-delimiter-s-d433fb697c65 splits formula based on operators, including operators in the resultant array
const formulaArr = [];

    arr.map((elem, index) => { //converts stringified numbers back into numbers ("1" becomes 1)
    
    if (elem === "x" | elem === "/" | elem === "+" | elem === "-") {
        formulaArr.push(elem);
    } else {
        let num = parseFloat(elem);
        formulaArr.push(num);
    }    
});



function multiplier() {
    formulaArr.map((element, index) => {

        if (element === "x") {
        let prev = formulaArr[index - 1];
        let next = formulaArr[index + 1];

            if (next === "-") {
                let nextNum = formulaArr[index + 2] * -1;
                let num = prev * nextNum;
                formulaArr.splice(index - 1, 4, num);
            } else {
                let num = prev * next;
                formulaArr.splice(index - 1, 3, num);
            }
        
        multiplier(); //restarts function with updated formulaArr array (recursion)

        }})
}

function divider() {
    formulaArr.map((element, index) => {

        if (element === "/") {
        let prev = formulaArr[index - 1];
        let next = formulaArr[index + 1];


        if (next === "-") {
            let nextNum = formulaArr[index + 2] * -1;
            let num = prev / nextNum;
            formulaArr.splice(index - 1, 4, num);
        } else {
            let num = prev / next;
            formulaArr.splice(index - 1, 3, num);
        }

        divider();

        }})
}


function adderOrSubtractor() {
    formulaArr.map((element, index) => {

        if (element === "+") {
        let prev = formulaArr[index - 1];
        let next = formulaArr[index + 1];
        let num = prev + next
        
        if (next === "-") {
            let nextNum = formulaArr[index + 2] * -1;
            let num = prev + nextNum;
            formulaArr.splice(index - 1, 4, num);
        } else {
            let num = prev + next;
            formulaArr.splice(index - 1, 3, num);
        }

        adderOrSubtractor();

        } else if (element === "-") {
            
        let prev = formulaArr[index - 1];
        let next = formulaArr[index + 1];
        let num = prev + next
        
        if (next === "-") {
            let nextNum = formulaArr[index + 2] * -1;
            let num = prev - nextNum;
            formulaArr.splice(index - 1, 4, num);
        } else {
            let num = prev - next;
            formulaArr.splice(index - 1, 3, num);
        }

        adderOrSubtractor();

        
        }
    
    
    })
}


// function subtractor() {
//     formulaArr.map((element, index) => {

//         if (element === "-") {
//         let prev = formulaArr[index - 1];
//         let next = formulaArr[index + 1];
//         let num = prev - next
        
//         if (next === "-") {
//             let nextNum = formulaArr[index + 2] * -1;
//             let num = prev - nextNum;
//             formulaArr.splice(index - 1, 4, num);
//         } else {
//             let num = prev - next;
//             formulaArr.splice(index - 1, 3, num);
//         }

//         subtractor();

//         }})
// }


function calculator() {
    multiplier();
    divider(); 
    adderOrSubtractor();
    return formulaArr[0];
}

calculator();
console.log(calculator());




