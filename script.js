var pw = document.getElementById("userPassword");
var pwConf = document.getElementById("userPasswordConf");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

showPass = () => {
    var toShow = document.getElementById("userPassword");
    if (toShow.type === "password") {
        toShow.type = "text";
    }
    else {
        toShow.type = "password";
    }
}

// update Message display --> default =  "display: none"
showMessage = () => {
    document.getElementById("message").style.display = "block";
}
hideMessage = () => {
    document.getElementById("message").style.display = "none";
}

updateMessage = () => {
    // check lowerCase
    var lowerCaseLetters = /[a-z]/g;
    if (pw.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // check upperCase
    var upperCaseLetters = /[A-Z]/g;
    if (pw.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // check Number
    var numbers = /[0-9]/g;
    if (pw.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //check Length
    if (pw.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

// Check password match

showMatchMessage = () => {
    document.getElementById("pwMatch").style.display = "block";
}
hideMatchMessage = () => {
    document.getElementById("pwMatch").style.display = "none";
}

matchPw = () => {
    if (pw.value != pwConf.value) {
        document.getElementById("pwMatch").innerHTML = "Passwords do not match!";
        pwMatch.classList.add("match");
    }
    else {
        document.getElementById("pwMatch").innerHTML = "";
        pwMatch.classList.remove("match");
    }
}



