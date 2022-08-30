// Elements
let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")
let numbersChkEl = document.getElementById("numbers-chk")
let symbolsChkEl = document.getElementById("symbols-chk")
let charCountEl = document.getElementById("char-count")
let errorMsgEl = document.getElementById("error-msg")
let titleEl = document.getElementById("title")
let messageEl = document.getElementById("message")
let optionalsEl = document.getElementById("optionals")
let separatorEl = document.getElementById("separator")

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let numberOfCharacters = 0
let numbersEnabled = false
let symbolsEnabled = false

function generatePassword() {
    let characters = letters
    if (numbersEnabled) {
        characters = characters.concat(numbers)
    }
    if (symbolsEnabled) {
        characters = characters.concat(symbols)
    }
    
    let password = ""
    for (let i = 0; i < numberOfCharacters; i++) {
        let randomCharacter = characters[getRandomNumber(characters.length)]
        password += randomCharacter
    }   
    return password
}

function getRandomNumber(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive)
}

function printPasswords() {
    numberOfCharacters = parseInt(charCountEl.value)
    
    if (numberOfCharacters < 5 || numberOfCharacters > 20) {
        errorMsgEl.hidden = false
    } else {
        errorMsgEl.hidden = true
        numbersEnabled = numbersChkEl.checked
        symbolsEnabled = symbolsChkEl.checked
        
        password1El.textContent = generatePassword()
        password2El.textContent = generatePassword()
    }
    
}

function copyToClipboard(id) {
    navigator.clipboard.writeText(document.getElementById(id).textContent)
    alert("Password copied to clickboard")    
}

function toggleNightMode() {
    document.body.classList.toggle("light-mode")
    titleEl.classList.toggle("light-mode")
    messageEl.classList.toggle("light-mode")
    optionalsEl.classList.toggle("light-mode")
    separatorEl.classList.toggle("light-mode")
}