function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const result = document.getElementById('result');

    // Default values
    let strength = "Weak";
    let className = "weak";

    // Check strength logic
    if (password.length >= 8) {
        // Strong: must contain uppercase, lowercase, number, and special char
        if (
            /[A-Z]/.test(password) &&   // has uppercase
            /[a-z]/.test(password) &&   // has lowercase
            /\d/.test(password) &&      // has digit
            /[\W_]/.test(password)      // has special character
        ) {
            strength = "Strong";
            className = "strong";
        }
        // Medium: has at least uppercase+lowercase OR lowercase+number
        else if (
            (/[A-Z]/.test(password) && /[a-z]/.test(password)) ||
            (/\d/.test(password) && /[a-z]/.test(password))
        ) {
            strength = "Medium";
            className = "medium";
        }
    }

    // Update result
    result.innerHTML = `Password Strength: <span class="${className}">${strength}</span>`;
    // let strengthSpan = document.getElementById("strength")
    // // Reset old classes and add new one
    // strength.className = strength;

    // Trigger fade-in animation
    result.style.opacity = "1";
    result.style.transform = "translateY(0)";
}
