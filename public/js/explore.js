// Product list
const products = [
    { id: 1, name: "Radish 500g", price: 20, old: 30, stars: 4, img: "/images/radish.png" },
    { id: 2, name: "Potatoes 1kg", price: 25, old: 35, stars: 5, img: "/images/potato.png" },
    { id: 3, name: "Tomatoes 500g", price: 30, old: 40, stars: 4, img: "/images/tomato.png" },
    { id: 4, name: "Broccoli 1kg", price: 40, old: 50, stars: 5, img: "/images/broccoli.png" },
    { id: 5, name: "Green Beans 500g", price: 28, old: 38, stars: 4, img: "/images/beans.png" },
    { id: 6, name: "Oranges 1kg", price: 35, old: 45, stars: 5, img: "/images/orange.png" },
    { id: 7, name: "Strawberries 500g", price: 50, old: 60, stars: 5, img: "/images/strawberry.png" },
    { id: 8, name: "Apples 1kg", price: 45, old: 55, stars: 4, img: "/images/apple.png" },
    { id: 9, name: "Milk 1L", price: 30, old: 40, stars: 5, img: "/images/milk.png" },
    { id: 10, name: "Eggs 12pcs", price: 55, old: 65, stars: 4, img: "/images/eggs.png" },
];

// RENDER SECTIONS
function loadSection(id, filterFn) {
    const row = document.getElementById(id);
    row.innerHTML = "";

    products.filter(filterFn).forEach(p => {
        row.innerHTML += `
        <div class="product-card" onclick="openModal(${p.id})">
            <img src="${p.img}" />
            <h4>${p.name}</h4>
            <div class="stars">${"★".repeat(p.stars)}${"☆".repeat(5 - p.stars)}</div>
            <p class="price">₹${p.price} <span class="old-price">₹${p.old}</span></p>

            <!-- FIXED — add-to-cart class added -->
            <button class="add-btn add-to-cart" 
                    onclick="event.stopPropagation(); addToCart(${p.id})">
                Add
            </button>
        </div>`;
    });
}

// Load all sections
loadSection("popular", p => p.id <= 6);
loadSection("topSells", p => p.id >= 4 && p.id <= 8);
loadSection("topRated", p => p.stars >= 5);
loadSection("trending", p => p.id >= 7);
loadSection("recent", p => p.id >= 9);

// MODAL
let current = null;

function openModal(id) {
    current = products.find(x => x.id === id);

    document.getElementById("modalImg").src = current.img;
    document.getElementById("modalName").innerText = current.name;
    document.getElementById("modalStars").innerText =
        "★".repeat(current.stars) + "☆".repeat(5 - current.stars);
    document.getElementById("modalPrice").innerText = current.price;
    document.getElementById("modalOld").innerText = current.old;

    document.getElementById("modalBox").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalBox").style.display = "none";
}

// LOCAL STORAGE CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// addToCart()
function addToCart(id) {
    const p = id ? products.find(x => x.id === id) : current;
    const found = cart.find(c => c.name === p.name);

    if (found) {
        found.qty += 1;
    } else {
        cart.push({ name: p.name, price: p.price, img: p.img, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // update header live
    if (window.updateCartCount) updateCartCount();

    alert("Added to cart: " + p.name);
}
