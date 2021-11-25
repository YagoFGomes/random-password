const letters= "abcdefghijklmnopqrstuvxwyz"
const uperLetters = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"
const special = "ç@#$%&*"
const numbers = "1234567890"

var BaseDataCaracters = null

function createBaseDataCaracters(){
    const useLetters = document.getElementById('letters').checked
    const useNumbers = document.getElementById('numbers').checked
    const useSpecials = document.getElementById('specials').checked
    
    if(!useSpecials && !useNumbers && !useLetters ){
        alert("Please select a one caracter type")
        clearFilds()
      return
    } else { 
        if(useLetters){
            BaseDataCaracters += letters
            BaseDataCaracters += uperLetters
        }
        if(useNumbers){
            BaseDataCaracters += numbers 
        }
        if(useSpecials){
            BaseDataCaracters += special 
        }
        return BaseDataCaracters
    }    
}

function getLength(){
    const length = document.getElementById('length').value
    return length
}

function clearFilds(){
    let inputPass = document.getElementById('password')
    inputPass.value = ''
}

function validade(length){
    if (length == '' || length <= 0){
        alert('Please enter a valid length value')
    } else {
        return true
    }
}

function insertValues(finalPassword){
    let inputPassword = document.getElementById('password')
    inputPassword.value = finalPassword
    BaseDataCaracters = ''
}

function createPassword(length){
    if (BaseDataCaracters.length == '' || BaseDataCaracters == null ){
        clearFilds()
        return
    } else {
        var arrBaseCaracters = BaseDataCaracters.split('')
        var finalPassword = ''
        for(i = length ; i> 0; i--){
        var randomNumber = Math.floor(Math.random() * (arrBaseCaracters.length))
        finalPassword += arrBaseCaracters[randomNumber]
        }    
        insertValues(finalPassword)
    }
}

function generatePassword(){
    clearFilds()
    createBaseDataCaracters()

    const length = getLength()
    const isValid = validade(length)

    if(isValid){
        createPassword(length)
    }
} 