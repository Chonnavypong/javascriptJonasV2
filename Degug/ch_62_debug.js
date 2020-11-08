const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForcast(temps) {
  console.log(Array.isArray(temps));
  if (Array.isArray(temps)) {
    temps.forEach((temp, i) =>
      console.log(`There will have temp C in ${(i + 1)} days`)
    );
  }
}

printForcast(data1);
printForcast(data2);
