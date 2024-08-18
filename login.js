document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        sessionStorage.setItem('loggedIn', true); // Set login status in session storage
        window.location.href = 'index.html'; // Redirect to main page after successful login
    } else {
        // Display error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
