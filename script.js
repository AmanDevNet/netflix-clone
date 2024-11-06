function showMessage() {
    const email = document.getElementById("email-input").value;
    if (email) {
        alert(`Welcome to Netflix! Email: ${email}`);
    } else {
        alert("Please enter an email address.");
    }
}
