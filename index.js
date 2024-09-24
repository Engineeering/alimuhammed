// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle the click on the 'Shop Now' button
    const shopNowButton = document.querySelector('.btn');
    
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function () {
            window.location.href = 'products.html'; // Redirect to products page
        });
    }

    // You can add more functionalities here as needed
});
