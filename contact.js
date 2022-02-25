const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const addresse = document.querySelector("#addresse");
const message = document.querySelector("#message");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
    if (checkLength(firstName.value, 1) && checkLength(subject.value, 4)&& validateEmail(email.value)) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}
firstName.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
addresse.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    message.innerHTML = '<div class="message">SENT SUCCESSFULLY!!!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(subject) {
    if (subject.trim().length > 10) {
        return true;
    } else {
        return false;
    }
}

    function validateEmail(email) {
        const regEx = /\S+@\S+\.\S+/;
        const patternMatches = regEx.test(email);
        return patternMatches;
    };

/*form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const addresseValue = addresse.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(subjectValue === '') {
        setError(subject, 'Subject is required');
    } else if (subjectValue.length < 10 ) {
        setError(subject, 'Subject must be at least 10 character.')
    } else {
        setSuccess(subject);
    }
    if(AddresseValue === '') {
        setError(addresse, 'Addresse is required');
    } else if (addresseValue.length < 25 ) {
        setError(addresse, 'Addresse must be at least 8 character.')
    } else {
        setSuccess(addresse);
    }
};*/