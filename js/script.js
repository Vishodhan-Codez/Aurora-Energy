document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const alertContainer = document.getElementById('alertContainer');

    // Pre-fill form with saved values
    nameInput.value = localStorage.getItem('name') || '';
    emailInput.value = localStorage.getItem('email') || '';
    messageInput.value = localStorage.getItem('message') || '';

    if (localStorage.getItem('submitted') === 'true') {
        showAlert('Your response has been sent.', 'success');
    }

    // Save form inputs to localStorage on input
    form.addEventListener('input', function () {
        localStorage.setItem('name', nameInput.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('message', messageInput.value);
    });

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        localStorage.setItem('submitted', 'true');
        showAlert('Your response has been sent.', 'success');
    });

    // Show alert
    function showAlert(message, type) {
        alertContainer.innerHTML = `
            <div class="alert alert-${type}" role="alert">
                ${message}
            </div>
        `;
    }
});
