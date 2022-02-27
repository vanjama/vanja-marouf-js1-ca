const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const addresse = document.getElementById('addresse');

form.addEventListener('submit', e => {
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

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

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
        setError(subject, 'Subject must be at least 8 character.')
    } else {
        setSuccess(subject);
    }

    if(addresseValue === '') {
        setError(addresse, 'Addresse is required');
    } else if (addresseValue.length < 25 ) {
        setError(addresse, "Addresse must be at least 25 character");
    } else {
        setSuccess(addresse);
    }

};




























/*


    if(firstNameValue === '') {
        setError(firstName, 'Username is required');
    } else {
        setSuccess(firstName);
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
    if(addresseValue === '') {
        setError(addresse, 'Addresse is required');
    } else if (addresseValue.length < 25 ) {
        setError(addresse, 'Addresse must be at least 8 character.')
    } else {
        setSuccess(addresse);
    }
}; */