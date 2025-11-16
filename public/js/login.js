// login.js
function loginUser() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (!email || !pass) {
        alert("Please fill all fields.");
        return;
    }

    alert("Login successful (demo only)");
    window.location.href = "/";
}
