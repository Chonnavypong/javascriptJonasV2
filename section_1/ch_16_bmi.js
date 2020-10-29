const bmi = (mass, height) => {
  return (mass / height ** 2).toFixed(2);
};

const marksBmi_1 = bmi(78, 1.69);
const johnBmi_1 = bmi(92, 1.95);

const marksBmi_2 = bmi(95, 1.88);
const johnBmi_2 = bmi(85, 1.76);

console.log(
  marksBmi_1,
  johnBmi_1,
  marksBmi_1 > johnBmi_1,
  marksBmi_2,
  johnBmi_2,
  marksBmi_2 > johnBmi_2
);
