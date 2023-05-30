let usernameError = document.getElementById(`username-error`);
let emailError = document.getElementById(`email-error`);
let passwordError = document.getElementById(`password-error`);
let zipcodeError = document.getElementById(`zipcode-error`);
let buttonError = document.getElementById(`button-error`);
// let messageError = document.getElementById(`message-error`);
 

function validateName() {
    let name = document.getElementById(`username`).value;

    let nameLength = name.length;

    if (nameLength == 0) {
        usernameError.innerHTML = `field cannot be blank`
        return false;
    }
 
    let nameMatch = name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/);    
    if (!nameMatch) {
        usernameError.innerHTML = `full name required`;
        return false;
    }
    
    else if (nameMatch) {
        usernameError.innerHTML = `approved`;
    return true
   } 

}


function validateEmail() {
    let email = document.getElementById(`email`).value;

       let emailLength = email.length

    if (emailLength == 0) {
        emailError.innerHTML = `field cannot be blank`;
        return false
    }

    if (!email.includes(`@gmail.com`)) {
        emailError.innerHTML = `invalid email`;
        return false
    }


    if (email.includes(`@gmail.com`)) {
        emailError.innerHTML = `approved`;
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById(`password`).value;
    let passwordlength = password.length

    if (passwordlength == 0) {
        passwordError.innerHTML = `field cannot be blank`;
        return false
    }

    if (passwordlength !== 8) {
        passwordError.innerHTML = `field must contain 8 characters`;
        return false
    }

    if (passwordlength == 8) {
        passwordError.innerHTML = `approved`
        return true
    }
}

function validateZipcode() {
    let zipCode = document.getElementById(`zipcode`).value;
      let zipcodeLength = zipCode.length; 

      if (zipcodeLength == 0) {
        zipcodeError.innerHTML = `field cannot be blank`;
        return false;
    } 
    if (zipcodeLength == 5 && zipCode.match(/^[0-9]{5}$/)) {
        zipcodeError.innerHTML = `approved`;
        return true;
    }

    if (zipcodeLength < 5 || zipcodeLength > 5) {
        zipcodeError.innerHTML = `zipcode should be ${5} digits`;
        return false;
    }
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validatePassword() || !validateZipcode()) {
        buttonError.innerHTML = `please fix all errors to submit`;
        return false;
    }
}

// function validateMessage() {
//     let message = document.getElementById(`message`).value;
//     let messageLength = message.length;

//     let required = 50;
//     let left = required - messageLength;

//     if (left > 0) {
//         messageError.innerHTML = `${left} characters remaining`
//         return false;
//     }

//     if (left == 0) {
//         messageError.innerHTML = `approved`;
//         return true;
//     }

//     if (left < 0) {
//         messageError.innerHTML = `required amount exceeded`
//     }
// }




