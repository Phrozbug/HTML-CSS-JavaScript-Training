let allChar = ["A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","_","+","~","}","{","[","]",":",";","?",">","<",".","/","-","="]
let totalChar = allChar.length

function generatePasswords() {
    let passwordOne = ""
    let passwordTwo = ""
    let passwordThree = ""
    let passwordFour = ""
    for (i = 0; i < 15; i++) {
    let randomNumber1 = Math.floor( Math.random()* totalChar )
    let randomNumber2 = Math.floor( Math.random()* totalChar )
    let randomNumber3 = Math.floor( Math.random()* totalChar )
    let randomNumber4 = Math.floor( Math.random()* totalChar )
    passwordOne += allChar[randomNumber1]
    passwordTwo += allChar[randomNumber2]
    passwordThree += allChar[randomNumber3]
    passwordFour += allChar[randomNumber4]
    }
    document.getElementById("pw-display1").placeholder = passwordOne
    document.getElementById("pw-display2").placeholder = passwordTwo
    document.getElementById("pw-display3").placeholder = passwordThree
    document.getElementById("pw-display4").placeholder = passwordFour

}