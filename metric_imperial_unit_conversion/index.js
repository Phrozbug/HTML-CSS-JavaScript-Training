const metersToFeet = document.getElementById("meters-feet")
const feetToMeters = document.getElementById("feet-meters")
const litersToGallons = document.getElementById("liters-gallons")
const gallonsToLiters = document.getElementById("gallons-liters")
const kilosToPounds = document.getElementById("kilos-pounds")
const poundsToKilos = document.getElementById("pounds-kilos")

const meterToFeet = length => (length * 3.281).toFixed(3)
const feetToMeter = length => (length / 3.281).toFixed(3)
const literToGallon = liters => (liters / 3.785).toFixed(3)
const gallonToLiter = gallons => (gallons * 3.785).toFixed(3)
const kiloToPound = kg => (kg * 2.205).toFixed(3)
const poundToKilo = lb => (lb / 2.205).toFixed(3)


const baseMetric = document.querySelectorAll(".base-metric")
function myFunction() {
  var x = document.getElementById("user-input").value;
  document.querySelector(".meters").innerHTML = x
  document.querySelector(".feet").innerHTML = x
  document.querySelector(".liters").innerHTML = x
  document.querySelector(".gallons").innerHTML = x
  document.querySelector(".kilos").innerHTML = x
  document.querySelector(".pounds").innerHTML = x
  metersToFeet.innerHTML = meterToFeet(x)
  feetToMeters.innerHTML = feetToMeter(x)
  litersToGallons.innerHTML = literToGallon(x)
  gallonsToLiters.innerHTML = gallonToLiter(x)
  kilosToPounds.innerHTML = kiloToPound(x)
  poundsToKilos.innerHTML = poundToKilo(x)
  
  
}
