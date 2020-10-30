const stevenBill = [125, 555, 44];

let totalPayment = [];

const tip = (bill) => {
  for (let i = 0; i < bill.length; i++) {
    if (bill[i] >= 50 && bill[i] <= 300) {
      totalPayment.push(bill[i] + bill[i] * 0.15);
    } else {
      totalPayment.push(bill[i] + bill[i] * 0.2);
    }
  }
};

tip(stevenBill)

console.log(totalPayment)
