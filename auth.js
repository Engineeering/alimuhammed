// auth.js

// Event listener for the sign-in form submission
document.getElementById('sign-in-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Dummy authentication logic (replace this with real API calls)
    if (email === "user@example.com" && password === "password") {
        alert("Sign In Successful!");
        // Redirect to user account page or other actions
        window.location.href = 'user-account.html';
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Event listener for the sign-up form submission
document.getElementById('sign-up-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Dummy sign-up logic (replace this with real API calls)
    if (email && password) {
        alert("Sign Up Successful! You can now sign in.");
        // Redirect to sign-in or other actions
        window.location.href = 'auth.html';
    } else {
        alert("Please fill in all fields.");
    }
});
