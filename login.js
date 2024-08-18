function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        window.location.href = 'index.html'; // Redirect to your main page
        return false; // Prevent form submission
    } else {
        alert('Invalid username or password. Please try again.');
        return false; // Prevent form submission and reload
    }
}
