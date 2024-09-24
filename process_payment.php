<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $card_number = $_POST['card_number'];
    $expiry = $_POST['expiry'];
    $cvv = $_POST['cvv'];

    // Implement payment processing logic here
    // For example, you might integrate with a payment gateway API

    // Redirect to a thank you page or back to the products page
    header("Location: thank_you.html");
    exit();
}
?>
