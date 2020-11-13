'use strict';

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Have and Error ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Have and Error ${res.status}`);
      return res.json();
    })
    .catch(err => {
      console.error(`Catch section we get error : ${err.message}`);
    });
};

whereAmI(52.508, 150000.381);
