// cart.js

// Sample cart data (this would typically come from local storage or a database)
let cart = [
    {
        id: 1,
        name: "Engineering Tool",
        price: 49.99,
        image: "path/to/image1.jpg",
        quantity: 1
    },
    {
        id: 2,
        name: "Interior Design Kit",
        price: 99.99,
        image: "path/to/image2.jpg",
        quantity: 1
    }
];

// Function to display items in the cart
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ""; // Clear previous items
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
            <button class="btn remove-from-cart" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity; // Calculate total price
    });

    document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}

// Event listener for removing items from the cart
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-from-cart')) {
        const productId = event.target.getAttribute('data-id');
        removeFromCart(productId);
    }
});

// Function to remove item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id != productId); // Remove item from cart
    displayCartItems(); // Refresh cart display
}

// Initial display of cart items
displayCartItems();
