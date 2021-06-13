// Registration Validation //
function formValidate() {
    let name = document.forms['contactForm']['Username'];
    let email = document.forms['contactForm']['email'];
    let password = document.forms['contactForm']['password'];
    let confirmPassword = document.forms['contactForm']['confirm password'];
    let mobileNumber = document.forms['contactForm']['myMobile'];
    let para = document.getElementById('para');
    let signRGEX = /[_]/;
    let numberRGEX = /[0-9]/;
    let bigRGEX = /[A-Z]/;
    let smallRGEX = /[a-z]/;

    if (name.value === '') {
        para.textContent = 'Username can\'t be blank!';
        name.focus();
        return false;
    }

    if (!signRGEX.test(name.value)) {
        para.textContent = 'Username must contain an underscore';
        name.focus();
        return false;
    }

    if (email.value === '') {
        para.textContent = 'Please enter your email!';
        email.focus();
        return false;
    }

    if (password.value === '') {
        para.textContent = 'please enter your password!';
        password.focus();
        return false;
    }

    if (!numberRGEX.test(password.value)) {
        para.textContent = 'Password must contain numbers!';
        password.focus();
        return false;
    }
    
    if (!bigRGEX.test(password.value)) {
        para.textContent = 'Password must contain uppercase letters!';
        password.focus();
        return false;
    }

    if (!smallRGEX.test(password.value)) {
        para.textContent = 'Password must contain lowercase letters!';
        password.focus();
        return false;
    }

    if (confirmPassword.value !== password.value) {
        para.textContent = 'Passwords do not match';
        confirmPassword.focus();
        return false
    }

    if (name.value === password.value) {
        para.textContent = 'Username can not be your password!';
        name.focus();
        return false;
    }

    if (mobileNumber.value === '') {
        para.textContent = 'Please enter your mobile number!';
        mobileNumber.focus();
        return false;
    }

    if (!numberRGEX.test(mobileNumber.value)) {
        para.textContent = 'Mobile number must contain numbers only!';
        mobileNumber.focus();
        return false;
    }
    window.location.href = "login.html";
    return true;
}

// Login Validation//

function authenticateForm() {
    let yourName = document.forms['myForm']['userName'];
    let userPassword = document.forms['myForm']['yourPassword'];
    let myDisplay = document.getElementById('myParagraph');
    let minimumLength = 6;
    let maximumLength = 15;
    let passRGEX = /[0-9]/;
    let uppercaseRGEX = /[A-Z]/;
    let lowercaseRGEX = /[a-z]/;

    if (yourName.value === '') {
        myDisplay.textContent = 'Username can\'t be blank!';
        yourName.focus();
        return false;
    }

    if (yourName.value.length < minimumLength && yourName.value.length > maximumLength) {
        myDisplay.textContent = 'Username must be more than six characters!';
        yourName.focus();
        return false;
    }

    if (userPassword.value === '') {
        myDisplay.textContent = 'Please enter your password!';
        userPassword.focus();
        return false;
    }
    
    if (userPassword.value.length < minimumLength && userPassword.value.length > maximumLength) {
        myDisplay.textContent = 'Password must be more than six characters!';
        userPassword.focus();
        return false;
    }

    if (!passRGEX.test(userPassword.value)) {
        myDisplay.textContent = 'Password must contain atleast one number (0 - 9)!';
        userPassword.focus();
        return false;
    }

    if (!uppercaseRGEX.test(userPassword.value)) {
        myDisplay.textContent = 'Password must contain atleast one uppercase letter (A - Z)!';
        userPassword.focus();
        return false;
    }

    if (!lowercaseRGEX.test(userPassword.value)) {
        myDisplay.textContent = 'Password must contain atleast one lowercase (a - z)!';
        userPassword.focus();
        return false;
    }
}