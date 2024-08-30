//your JS code here. If required.
// Function to check if user details exist in local storage
function checkExistingUser() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (storedUsername && storedPassword) {
        const existingButton = document.createElement('button');
        existingButton.id = 'existing';
        existingButton.textContent = `Login as existing user (${storedUsername})`;
        existingButton.addEventListener('click', () => {
            alert(`Logged in as ${storedUsername}`);
        });
        document.body.appendChild(existingButton);
    }
}

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;
    
    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
    
    alert(`Logged in as ${username}`);
    
    // Remove the existing user button if it exists
    const existingButton = document.getElementById('existing');
    if (existingButton) {
        existingButton.remove();
    }
    
    // Check if user details are stored, if yes, create the "Login as existing user" button
    checkExistingUser();
});

// Check on page load if there are stored credentials
checkExistingUser();
