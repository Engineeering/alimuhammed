document.getElementById('checkout-form').addEventListener('submit', function(event) {
    // Example validation before submitting
    const cardNumber = document.getElementById('card-number').value;
    if (cardNumber.length < 16) {
        alert("Invalid card number");
        event.preventDefault(); // Prevent form submission
    }
});
