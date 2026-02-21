// Select the email input
const email = document.querySelector("#email");

// Select the submit button
const btnSubmit = document.querySelector(".newsletter__form-button");

// Select the email address text
const labelEmail = document.querySelector(".newsletter__form-label");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(regex.test(email.value)) {
        console.log(email.value);
    } else {

        const errorAlert = document.querySelector(".error-alert");

        if(errorAlert === null) {
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Valid email required";
            errorMessage.classList.add("text--p3");
            errorMessage.classList.add("error-alert");
            errorMessage.style.color = "red";

            email.classList.add("newsletter__form-input-error");

            labelEmail.appendChild(errorMessage);

            setTimeout(() => {
                email.classList.remove("newsletter__form-input-error");
                errorMessage.remove();
            }, 2000);
        }
    }
});