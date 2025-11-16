let cart = JSON.parse(localStorage.getItem("cart")) || [];

// LOAD ORDER SUMMARY
function loadSummary() {
    const container = document.getElementById("summary-items");
    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        container.innerHTML += `
            <div class="summary-item">
                <span>${item.name} × ${item.qty}</span>
                <span>₹${item.price * item.qty}</span>
            </div>
        `;
    });

    document.getElementById("summary-total-price").innerText = "₹" + total;

    if (window.updateCartCount) updateCartCount();
}

// SHOW ALERT
function showAlert(msg, type) {
    const box = document.getElementById("alert-box");
    box.innerHTML = `<div class="alert ${type === 'error' ? 'alert-error' : 'alert-success'}">${msg}</div>`;
}

// PLACE ORDER
function placeOrder() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    let valid = true;

    // CLEAR ERRORS
    document.getElementById("nameErr").innerText = "";
    document.getElementById("phoneErr").innerText = "";
    document.getElementById("addressErr").innerText = "";

    // VALIDATION
    if (name.length < 3) {
        document.getElementById("nameErr").innerText = "Enter a valid full name.";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneErr").innerText = "Enter a valid 10-digit phone number.";
        valid = false;
    }

    if (address.length < 10) {
        document.getElementById("addressErr").innerText = "Address must be at least 10 characters.";
        valid = false;
    }

    if (!valid) {
        showAlert("Please fix the highlighted errors.", "error");

        // shake animation
        document.querySelector(".checkout-form").classList.add("shake");
        setTimeout(() => {
            document.querySelector(".checkout-form").classList.remove("shake");
        }, 300);

        return;
    }

    // CLEAR CART
    localStorage.removeItem("cart");
    if (window.updateCartCount) updateCartCount();

    showAlert("Order placed successfully! Redirecting...", "success");

    setTimeout(() => {
        window.location.href = "/";
    }, 1500);
}

loadSummary();
