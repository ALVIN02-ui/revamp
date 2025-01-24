document.getElementById("quoteForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const form = document.getElementById("quoteForm");
    const formData = new FormData(form);
    const responseMessage = document.getElementById("responseMessage");
    const submitButton = form.querySelector("input[type='submit']");

    // Clear previous response messages
    responseMessage.textContent = "";
    responseMessage.style.color = "";

    try {
        // Disable the submit button to prevent multiple submissions
        submitButton.disabled = true;
        submitButton.value = "Submitting...";

        // Add loading feedback
        responseMessage.textContent = "Submitting your request...";
        responseMessage.style.color = "blue";

        // Send form data to the server
        const response = await fetch("send_mail.php", {
            method: "POST",
            body: formData,
        });

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.status === "success") {
            responseMessage.textContent = "Thank you! Your request has been submitted.";
            responseMessage.style.color = "green";

            // Reset the form after successful submission
            form.reset();
        } else {
            responseMessage.textContent = `Error: ${result.message}`;
            responseMessage.style.color = "red";
        }
    } catch (error) {
        // Handle network or unexpected errors
        responseMessage.textContent = "An error occurred while submitting the form. Please try again.";
        responseMessage.style.color = "red";

        console.error("Form submission error:", error); // Log the error for debugging
    } finally {
        // Re-enable the submit button and restore its original text
        submitButton.disabled = false;
        submitButton.value = "Submit Quote";
    }
});
