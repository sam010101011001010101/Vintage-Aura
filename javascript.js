// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector("form");

    // Attach a submit event listener to the form
    form.addEventListener("submit", function(event) {
        // Get form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation checks
        if (name === "" || email === "" || message === "") {
            // Prevent the form from being submitted
            event.preventDefault();
            alert("Please fill out all fields before submitting.");
        } else if (!validateEmail(email)) {
            // Prevent form submission if the email is invalid
            event.preventDefault();
            alert("Please enter a valid email address.");
        } else {
            alert("Message sent successfully!");
            // Optionally, you can clear the form fields after submission
            form.reset();
        }
    });

    // Function to validate email using a regular expression
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
