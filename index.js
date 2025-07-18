/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = document.querySelector('#input-text')
let convertBtn = document.querySelector('.convert-btn')
let firstpara = document.querySelector('.fsect-para')
let secondpara = document.querySelector('.ssect-para')
let thirdpara = document.querySelector('.tsect-para')

const convertToFeet = (givenValue) => {
  return givenValue * 3.281
}

const convertToMeter = (givenValue) => {
  return givenValue / 3.281
}

const convertToGallon = (givenValue) => {
  return givenValue * 0.264
}

const convertToLitre = (givenValue) => {
  return givenValue / 0.264
}

const convertToPound = (givenValue) => {
  return givenValue * 2.204
}

const convertToKg = (givenValue) => {
  return givenValue / 2.204
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('para1')) {
    firstpara.innerHTML = localStorage.getItem('para1');
  }
  if (localStorage.getItem('para2')) {
    secondpara.innerHTML = localStorage.getItem('para2');
  }
  if (localStorage.getItem('para3')) {
    thirdpara.innerHTML = localStorage.getItem('para3');
  }
})


convertBtn.addEventListener('click', () => {
  let givenValue = userInput.value;
  let feet = convertToFeet(givenValue)
  let meter = convertToMeter(givenValue)
  let kg = convertToKg(givenValue)
  let pound = convertToPound(givenValue)
  let litre = convertToLitre(givenValue)
  let gallon = convertToGallon(givenValue)

  let para1 = `${givenValue} meters = ${feet.toFixed(3)} feet | ${givenValue} feet = ${meter.toFixed(3)} meters`;
  let para2 = `${givenValue} liters = ${gallon.toFixed(3)} gallons | ${givenValue} gallons = ${litre.toFixed(3)} liters`;
  let para3 = `${givenValue} kilos = ${pound.toFixed(3)} pounds | ${givenValue} pounds = ${kg.toFixed(3)} kilos`;

  firstpara.innerHTML = para1
  secondpara.innerHTML = para2
  thirdpara.innerHTML = para3

  localStorage.setItem('para1', para1)
  localStorage.setItem('para2', para2)
  localStorage.setItem('para3', para3)

})