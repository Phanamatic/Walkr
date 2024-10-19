window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#booking form");
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const response = await fetch("https://formspree.io/f/your-form-id", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            alert("Thank you for your booking request! We will get back to you soon.");
            form.reset();
        } else {
            alert("Oops! There was a problem submitting your form. Please try again later.");
        }
    });
});