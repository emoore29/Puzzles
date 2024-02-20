let inputformula = "6x2-5+1+-"
let keyPressed = "-"

if (/[x+\/-]{1}(?=[x+\/-]$)/.test(input.formula)) { //if there are currently two operators at the end of the formula
    //cannot concatenate
}



    if (/[x+\/-]$/.test(input.formula) && keyPressed !== "-") { //example: 6x is in the formula, + was pressed. + replaces x.
        let str = input.formula;
        let newFormula = str.slice(0, -1); //removes old operator
        setInput({display: keyPressed, formula: newFormula + keyPressed}); //replaces old operator with new one
      } else {
        setInput({display: keyPressed, formula: input.formula + keyPressed});
      }



      //ORIGINAL CODE:
      if (/[x+\/-]$/.test(input.formula) && keyPressed !== "-") { //example: 6x is in the formula, + was pressed. + replaces x.
        let str = input.formula;
        let newFormula = str.slice(0, -1); //removes old operator
        setInput({display: keyPressed, formula: newFormula + keyPressed}); //replaces old operator with new one
      } else if (/\d$/.test(input.formula) | keyPressed == "-") { //last character in formula is a number or keypressed is a negative
        setInput({display: keyPressed, formula: input.formula + keyPressed});
      } else if (/[x+\/-]{2}$/.test(input.formula)) { //last two characters in formula are operators
        console.log("cannot concatenate");
      }