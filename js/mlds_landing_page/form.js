const formScriptURL = 'https://script.google.com/macros/s/AKfycbxDJBq_op0k84MZsO6PSZYFGVj3KlqoWrUC0GawJLwG8VhOGbzEvS6QzleONSoCP_jV/exec';
const form = document.forms['contactForm'];
const emailInputElement = document.getElementById('emailForm');
const selectInputElement = document.getElementById('interestForm');


const isInvalidClassName = 'is-invalid'

function validateEmail(emailText) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailText)
}

function validateInterestSelect(selectElement) {
    return selectElement.value !== "" || selectElement.value !== null;
}

function checkForm() {

    let isInputsValid = true;

    if (!validateEmail(emailInputElement.value)) {
        emailInputElement.classList.add(isInvalidClassName);
        isInputsValid = false;
    }

    if (!validateInterestSelect(selectInputElement)) {
        selectInputElement.classList.add(isInvalidClassName);
        isInputsValid = false;
    }
    if (!isInputsValid) {
        return isInputsValid
    }
    emailInputElement.classList.remove(isInvalidClassName);
    selectInputElement.classList.remove(isInvalidClassName);
    return isInputsValid;
}

function showSuccesFormAlert() {
    const succesAlertElement = document.getElementById('succesAlertForm');
    succesAlertElement.hidden = false;
    form.hidden = true;
}

function showErrorFormAlert() {
    const succesErrorElement = document.getElementById('errorAlertForm');
    succesErrorElement.hidden = false;
    setTimeout(() => { succesErrorElement.hidden = true; }, 5000)
}

emailInputElement.addEventListener('change', e => {
    if (!validateEmail(emailInputElement.value)) {
        emailInputElement.classList.add(isInvalidClassName);
    } else {
        emailInputElement.classList.remove(isInvalidClassName);
    }
});

form.addEventListener('submit', e => {
    const btn = document.getElementById('formBtn')
    e.preventDefault()
    if (checkForm()) {
        btn.disabled = true;
        fetch(formScriptURL, { method: 'POST', body: new FormData(form) })
            .then(() => {
                showSuccesFormAlert()
            }).then(() => {
                btn.disabled = false
            })
            .catch(response => {
                console.log(response)
                showErrorFormAlert()
            })
    }

});