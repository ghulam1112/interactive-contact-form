document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(el) {
      el.textContent = '';
    });

    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
      valid = false;
      document.getElementById('nameError').textContent = 'Name is required.';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      valid = false;
      document.getElementById('emailError').textContent = 'Invalid email address.';
    }

    // Subject validation
    const subject = document.getElementById('subject').value;
    if (subject.trim() === '') {
      valid = false;
      document.getElementById('subjectError').textContent = 'Subject is required.';
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
      valid = false;
      document.getElementById('messageError').textContent = 'Message is required.';
    }

    // Display success message if all fields are valid
    if (valid) {
      document.getElementById('successMessage').textContent = 'Form submitted successfully!';
    }
  });
});
