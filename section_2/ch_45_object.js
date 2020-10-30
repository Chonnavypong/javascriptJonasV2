function calcBmi(weight, height) {
  let bmi = weight / ( height ** 2 )
  return bmi
}

const marks = {
  weight: 78,
  height: 1.69,
  calcBMI : function() {
    this.bmi = this.weight / this.height ** 2
    return this.bmi
  }
}

const john = {
  weight: 92,
  height: 1.95,
  calcBMI : function() {
    this.bmi = this.weight / this.height ** 2
    return this.bmi
  }
}

marks.calcBMI()
john.calcBMI()

if (marks.bmi > john.bmi){
  console.log(`Marks have BMI more than John ${marks.bmi} - ${john.bmi} = ${marks.bmi - john.bmi}`)
} else {
  console.log(`John have BMI more than Mark ${john.bmi} - ${marks.bmi} = ${john.bmi - marks.bmi}`)
}