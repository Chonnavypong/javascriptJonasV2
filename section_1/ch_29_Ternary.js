let bill = 275

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

let message = `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`

console.log(message)
