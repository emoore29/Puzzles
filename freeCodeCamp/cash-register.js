function checkCashRegister(price, cash, cid) {
    
    const currency = [["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]];

    let totalCID = 0;
    let result = {status: "INSUFFICIENT_FUNDS", change: []}
    let change = cash - price;
    
    for (let i = 0; i < cid.length; i++) {
      totalCID = cid.reduce((sum, value) => sum + value[1], 0)
    }

    if (change > totalCID) {
      return result;
    } else if (change === totalCID) {
      result.status = "CLOSED";
      result.change = cid;
      return result; 
    } else if (change < totalCID) {
        let reverseCID = [...cid].reverse();
        result.status = "OPEN";
        let changeArr = [];
        for (let i = 0; i < currency.length; i++) {
          let totalChangeSoFar = changeArr.reduce((sum, value) => sum + value[1], 0);
          let num = change - totalChangeSoFar;
          let totalChangeNeeded = num.toFixed(2)
                  if (totalChangeSoFar == change) {
                    break;
                  } else if (change >= currency[i][1] && reverseCID[i][1] >= currency[i][1] && totalChangeNeeded >= currency[i][1]) {
                    if (!changeArr.map(element => element.includes(currency[i][0])).includes(true)) {
                      changeArr.push(currency[i].slice())
                      reverseCID[i][1] -= currency[i][1];
                      i = -1;
                    } else {
                      let index;
                      for (let j = 0; j < changeArr.length; j++) {
                        if (changeArr[j].includes(currency[i][0])) {
                          index = j
                        }
                      }
                      changeArr[index][1] += currency[i][1];
                      reverseCID[i][1] -= currency[i][1];
                      i = -1;
                    }
                  }
              }              
              result.change = changeArr;
              if (changeArr.reduce((sum, value) => sum + value[1], 0) < change) {
                result.status = "INSUFFICIENT_FUNDS";
                result.change = [];
              }
              return result;
            }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));