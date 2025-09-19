document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Simple contact form validation and dynamic feedback
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Create dynamic alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'dynamic-alert';
            alertDiv.textContent = 'Thank you for reaching out! Your message has been sent.';
            alertDiv.style.cssText = `
                background: #4caf50;
                color: #fff;
                padding: 12px 20px;
                margin-top: 15px;
                border-radius: 4px;
                text-align: center;
                font-size: 1rem;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            `;

            // Remove existing alert if any
            let existingAlert = document.querySelector('.dynamic-alert');
            if (existingAlert) existingAlert.remove();


            contactForm.parentNode.insertBefore(alertDiv, contactForm.nextSibling);

            // Remove alert after 3 seconds
            setTimeout(() => {
                alertDiv.remove();
            }, 3000);

            contactForm.reset();
        });
    }
});