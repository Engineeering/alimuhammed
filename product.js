// product.js

// Sample product data (this would typically come from a database or API)
const products = [
    {
        id: 1,
        name: "Engineering Tool",
        price: 49.99,
        image: "path/to/image1.jpg",
        category: "engineering",
    },
    {
        id: 2,
        name: "Interior Design Kit",
        price: 99.99,
        image: "path/to/image2.jpg",
        category: "interior-design",
    },
    {
        id: 3,
        name: "Exterior Design Guide",
        price: 59.99,
        image: "path/to/image3.jpg",
        category: "exterior-design",
    }
];

// Function to display products on the page
function displayProducts(filteredCategory = "all") {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ""; // Clear previous products

    // Filter products based on category
    const filteredProducts = filteredCategory === "all" 
        ? products 
        : products.filter(product => product.category === filteredCategory);

    // Create product cards
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Event listener for adding products to the cart
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    }
});

// Dummy function to handle adding to cart
function addToCart(productId) {
    console.log(`Product ID ${productId} added to cart!`);
    // You can implement cart functionality here (e.g., updating a cart array)
}

// Initial display of products
displayProducts();
