document.getElementById('login-button').addEventListener('click', function() {

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (email == 'rayhan@gmail.com' && password == 123456) {
        window.location.href = "amount.html";

    } else {
        alert('invalid user');
    }



})