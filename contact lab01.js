// Contact form script
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way
    
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Check if all fields are filled out
    if (name && email && message) {
        // If all fields are filled, display a thank you message
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    } else {
        // If any field is missing, display an error message
        alert('Please fill out all fields.');
    }
});
