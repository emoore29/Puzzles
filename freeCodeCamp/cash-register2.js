function checkCashRegister(price, cash, cid) {

    //VARIABLES & DEFINITIONS
    const currency = [["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]];

    const change = cash - price;
    const currencyMap = new Map(currency)
    const dic = [...cid].reverse()
    const dicMap = new Map(dic)
    const blankArr = [];
    currencyMap
    dicMap
    change

    //ASSUMING WE HAVE ENOUGH TO GIVE APPROPRIATE CHANGE (deal with other cases later):

    for (let value of currencyMap.values()) {
        console.log(value)
    }

    for (let value of dicMap.values()) {
        console.log(value)
        }
    }


}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])