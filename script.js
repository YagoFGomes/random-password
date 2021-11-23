const letters= "abcdefghijklmnopqrstuvxwyz"
const uperLetters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
const special = "ç@#$%&*"
const numbers = "1234567890"

const allCaracters = letters + uperLetters + special + numbers


function generateCode(length)  {
    var arrCode = allCaracters.split('')
    var finalPassword = ''
    for(i = length ; i> 0; i--){
       var randomNumber = Math.floor(Math.random() * (arrCode.length))
       console.log(randomNumber)
       finalPassword += arrCode[randomNumber]
    } 
    return finalPassword
}

function generatePassword(){
    let inputPass = document.getElementById('password')
    inputPass.value = ''
    let length = document.getElementById('length').value

    var password = generateCode(length)
    inputPass.value = password

}

