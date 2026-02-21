const newsletter = document.querySelector(".newsletter");
const email = document.querySelector("#email");
const labelEmail = document.querySelector(".newsletter__form-label");
const btnSubmit = document.querySelector(".newsletter__form-button");

const successCard = document.querySelector(".success-card");
const btnSuccess = document.querySelector(".success-card__button");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(regex.test(email.value)) {
        const emailSuccess = document.querySelector(".success-card__email");

        newsletter.style.display = "none";
        successCard.style.display = "flex";

        emailSuccess.textContent = `${email.value}`;
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

btnSuccess.addEventListener("click", (e) => {

    e.preventDefault(); 

    newsletter.style.display = "flex";
    successCard.style.display = "none";

    email.value = "";
});