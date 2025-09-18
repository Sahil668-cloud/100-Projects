let username = document.getElementById('username');
let password = document.getElementById('password');
let submitButton = document.querySelector('button[type="submit"]');
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Add further processing here, e.g., validation or sending data to a server
    username.disabled = true;
    password.disabled = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Processing...';
    submitButton.style.cursor = 'not-allowed';
    password.style.cursor = 'not-allowed';
    username.style.cursor = 'not-allowed';
    setTimeout(() => {
        username.disabled = false;
        password.disabled = false;
        submitButton.disabled = false;
        console.log('Username:', username.value);
        console.log('Password:', password.value);


        form.reset(); // Reset the form fields
    }, 3000); // Simulate a delay for processing
}
);

