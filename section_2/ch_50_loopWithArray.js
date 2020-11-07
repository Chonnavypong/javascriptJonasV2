const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const total = []

const calcTip = (bill) => {
  let avgTips = 0
  let avgTotal = 0
  for ( let i = 0 ; i < bill.length; i++) {
    let tip
    if ( bill[i] >= 50 && bill[i] <= 300 ) {
      tip = bill[i] * 0.15
      tips.push(tip)
      total.push( tip + bill[i] )
      avgTips += tip
      avgTotal += ( tip + bill[i] )
    } else {
      tip = bill[i] * 0.2
      tips.push(tip)
      total.push( tip + bill[i] )
      avgTips += tip
      avgTotal += ( tip + bill[i] )
    }
  }
  console.log(tips)
  console.log(total)
  console.log(avgTips)
  console.log(avgTips)
  return [avgTips/bill.length, avgTotal/bill.length]
}

// E:\Code\javascript\javascriptBasicJonasV2\section_1

let avg = calcTip(bills)
console.log(`avg tips = ${avg[0]} and avg total payment = ${avg[1]}`)