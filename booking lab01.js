// Booking form script
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way
    
    // Get the selected values
    const day = document.getElementById('bookingDay').value;
    const rate = document.getElementById('bookingRate').value;
    
    // Check if both a day and a rate have been
