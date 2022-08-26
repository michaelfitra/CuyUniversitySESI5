let judul = document.getElementById("judul")
let input = document.getElementById("loginInput")
let username = document.getElementById("usernameInput")
let signUpUser = document.getElementById("usernameInput0")
let password = document.getElementById("passwordInput")
let signUpPass = document.getElementById("passwordInput0")
let email = document.getElementById("email")
let loginBtn = document.getElementById("loginBtn")
let signinError = document.getElementById("signinError")
let signupError = document.getElementById("signupError")
let ques = document.getElementById("ques")
let terdaftar = document.getElementById("terdaftar")

signinError.style.display = "none"
signupError.style.display = "none"
signupBox.style.display = "none"

terdaftar.style.display = "none"

input.style.display = ""

function daftar(params) {
    if (params == 'daftar') {
        document.getElementById("signupBox").style.display = 'block';
        document.getElementById("signinBox").style.display = 'none';
    }
    
    if (params == 'login') {
        document.getElementById("signinBox").style.display = 'block';
        document.getElementById("signupBox").style.display = 'none';
    }
}

function login() {
    localStorage.setItem("username", username.value)

    if (username.value == "admin" && password.value == "admin123") {
        localStorage.setItem("username", "admin");
        localStorage.setItem("role", "admin palsu :)");
        input.style.display = "none"
        window.location = "login.html"
    } else if (username.value == localStorage.getItem('username') && password.value == localStorage.getItem('password')) {
        input.style.display = "none"
        window.location = "login.html"
    } else {
        signinError.style.display = "block"
    }
}
let role = document.getElementById('role')
function signup() {
    if (signUpUser.value !== "" && signUpPass.value !== "") {
        localStorage.setItem("username", signUpUser.value);
        localStorage.setItem("role", role.value);
        localStorage.setItem("password", signUpPass.value);

        alert('Pendaftaran Berhasil')

        signupError.style.display = "none"
        ques.style.display = "none"
        terdaftar.style.display = "block"
    } else if (signUpUser.value == "" && signUpPass.value == "") {
        signupError.style.display = "block"
    }

    if (signUpUser.value == "") {
        signupError.style.display = "block"
    }
    if (signUpPass.value == "") {
        signupError.style.display = "block"
    }
}