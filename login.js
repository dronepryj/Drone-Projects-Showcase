// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        // Redirect to the main page
        window.location.href = 'index.html';
    } else {
        // Display error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
