let servicesReg = []
let washClick = ""
let mowClick = ""
let pullClick = ""
let reqSerText = ""
let total = 0

const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const requestedServices = document.getElementById("requested-serivces")
const note = document.getElementById("notes")
const totalAmount = document.getElementById("total-amount")
const sendBtn = document.getElementById("send-btn")

washBtn.addEventListener("click", function () {
    if (!washClick) {
        servicesReg.push(`<div class="service-item">
            <div>
            <p class="service-name">Wash Car</p>
            </div>
            <p class="price">$10</p>
            </div>`)
        washClick = true
        total += 10
        render()
    }

})

mowBtn.addEventListener("click", function () {
    if (!mowClick) {
        servicesReg.push(`<div class="service-item">
            <div>
            <p class="service-name">Mow Lawn</p>
            </div>
            <p class="price">$20</p>
            </div>`)
        mowClick = true
        total += 20
        render()
    }
})

sendBtn.addEventListener("click", function () {
    servicesReg = []
    washClick = ""
    mowClick = ""
    pullClick = ""
    total = 0
    render()
})

pullBtn.addEventListener("click", function () {
    if (!pullClick) {
        servicesReg.push(`<div class="service-item">
            <div>
            <p class="service-name">Pull Weeds</p>
            </div>
            <p class="price">$30</p>
            </div>`)
        pullClick = true
        total += 30
        render()
    }

})

function render() {
    reqSerText = ""
    for (i = 0; i < servicesReg.length; i++) {

        reqSerText += servicesReg[i]
    }
    requestedServices.innerHTML = reqSerText
    note.textContent = "We accept cash, credit card, or PayPal."
    totalAmount.textContent = "$" + total

}