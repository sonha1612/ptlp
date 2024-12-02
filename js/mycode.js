document.addEventListener("DOMContentLoaded", function () {
    // Get the submit button
    const submitButton = document.querySelector(".submit-button");

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Redirect to another HTML file
        window.location.href = "site_2.html"; // Change this to your desired file path
    });
});


