let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render Cart Items
function loadCart() {
    const container = document.getElementById("cart-items");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("cart-total").innerText = "₹0";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        container.innerHTML += `
        <div class="cart-item">
            <img src="${item.img}">
            
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
            </div>

            <div class="qty-box">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>

            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        </div>`;
    });

    document.getElementById("cart-total").innerText = "₹" + total;

    // update header count
    if (window.updateCartCount) updateCartCount();
}

// Change Quantity
function changeQty(index, amount) {
    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// INIT
loadCart();
