"use strict";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.querySelector("#convert");
// const lengths = document.querySelector('.length');
// const volume = document.querySelector('.volume');
// const mass = document.querySelector('.mass');
const meters = document.querySelector(".meters");
const feet = document.querySelector(".feet");
const liters = document.querySelector(".liters");
const gallons = document.querySelector(".gallons");
const kilograms = document.querySelector(".kilograms");
const pounds = document.querySelector(".pounds");

function reset() {
  input.value = "";
  meters.textContent += input.value;
  liters.textContent += input.value;
  gallons.textContent += input.value;
  kilograms.textContent += input.value;
  pounds.textContent += input.value;
}

btn.addEventListener("click", () => {
  meters.textContent = `${input.value} meters = ${
    (input.value * 3.281).toFixed(3)
  } feet |`;
  feet.textContent = `${input.value} feet = ${
    (input.value * 0.3048).toFixed(3)
  } meters`;
  liters.textContent = `${input.value} liters = ${
    (input.value * 0.264).toFixed(3)
  } gallons |`;
  gallons.textContent = `${input.value} gallons = ${
    (input.value * 3.78541).toFixed(3)
  } liters`;
  kilograms.textContent = `${input.value} kilograms = ${
    (input.value * 2.204).toFixed(3)
  } pounds |`;
  pounds.textContent = `${input.value} pounds = ${
    (input.value * 0.453592).toFixed(3)
  } kilograms`;
  reset();
});
