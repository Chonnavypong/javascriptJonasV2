const bmi = (mass, height) => {
  return (mass / height ** 2).toFixed(2);
};

const marksBmi_1 = bmi(78, 1.69);
const johnBmi_1 = bmi(92, 1.95);

if (marksBmi_1 > johnBmi_1) {
  console.log(
    `Marks 's BMI is higher than John 's! at ${marksBmi_1 - johnBmi_1}`
  );
} else {
  console.log(
    ` John 's BMI is higher than Mark's ! at ${johnBmi_1} - ${marksBmi_1}`
  );
}

const marksBmi_2 = bmi(95, 1.88);
const johnBmi_2 = bmi(85, 1.76);

if (marksBmi_2 > johnBmi_2) {
  console.log(
    `Marks 's BMI is higher than John 's! at ${marksBmi_2 - johnBmi_2}`
  );
} else {
  console.log(
    `John 's BMI is higher than Mark's ! at ${johnBmi_2 - marksBmi_2}`
  );
}
