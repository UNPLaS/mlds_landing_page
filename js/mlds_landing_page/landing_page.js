const formScriptURL = 'https://script.google.com/macros/s/AKfycbxDJBq_op0k84MZsO6PSZYFGVj3KlqoWrUC0GawJLwG8VhOGbzEvS6QzleONSoCP_jV/exec';
const datesScriptURL = 'https://script.google.com/macros/s/AKfycbxYeUL_ANUZrxqPQtT5ZhtoPQAT5OUgkJ6E6xPr_dgMyO1ovWr9I8Co6BammKm_cX4KJA/exec'
const urlsScriptURL = 'https://script.google.com/macros/s/AKfycbwMMMAKzduC4EcXlA-CrjuWFND4wsibOR2-q_5nJ7IHNTU2AuE2ptCfS8tUl0FHwIB8/exec'
const textScriptURL = 'https://script.google.com/macros/s/AKfycbx3oJcb-WA2WND2cvP_o1c--9ElbHcuSaTeZ_K5fsxnOif6N1MQsbJqVOvs87crV5mmyA/exec'

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
    setTimeout(() => { succesAlertElement.hidden = true; }, 5000)
}

function showErrorFormAlert() {
    const succesErrorElement = document.getElementById('errorAlertForm');
    succesErrorElement.hidden = false;
    setTimeout(() => { succesErrorElement.hidden = true; }, 5000)
}

function getDates() {
    fetch(datesScriptURL, {
        method: 'GET', headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => { return response.json() }).then(dates => updateDate(dates.values))
        .catch(response => console.log(response))
}

function getURLs() {
    fetch(urlsScriptURL, {
        method: 'GET', headers: {
            'Accept': 'application/json',
        }
    })
        .then(response => { return response.json() }).then(urls => updateUrls(urls.urls))
        .catch(response => console.log(response))
}

function getText() {
    fetch(textScriptURL, {
        method: 'GET', headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => { return response.json() }).then(text => updateText(text.text))
        .catch(response => console.log(response))
}

function updateDate(dateInfo) {
    dateInfo.forEach(modInfo => {
        const modNumber = modInfo['module']
        const startDayEl = document.getElementById(`mod-${modNumber}-startDay`)
        const startMonthEl = document.getElementById(`mod-${modNumber}-startMonth`)
        const endDayEl = document.getElementById(`mod-${modNumber}-endDay`)
        const endMonthEl = document.getElementById(`mod-${modNumber}-endMonth`)

        const startDate = modInfo['start_date'].split('/')
        const endDate = modInfo['end_date'].split('/')

        startDayEl.innerHTML = startDate[0]
        startMonthEl.innerHTML = getMonthName(startDate[1])
        endDayEl.innerHTML = endDate[0]
        endMonthEl.innerHTML = getMonthName(endDate[1])

    })
}


function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('es', { month: 'long' });
}

function updateUrls(urls) {
    document.getElementById("mod-0-insc1").href = urls.insc_mod_0
    document.getElementById("mod-0-insc2").href = urls.insc_mod_0
    document.getElementById("mod-0-insc3").href = urls.insc_mod_0

    document.getElementById("mod-1-insc1").href = urls.insc_mod_1
    document.getElementById("mod-2-insc1").href = urls.insc_mod_2
    document.getElementById("mod-3-insc1").href = urls.insc_mod_3
    document.getElementById("mod-4-insc1").href = urls.insc_mod_4
    document.getElementById("mod-5-insc1").href = urls.insc_mod_5
    document.getElementById("mod-6-insc1").href = urls.insc_mod_6

    document.getElementById("bas-insc1").href = urls.insc_bas
    document.getElementById("bas-insc2").href = urls.insc_bas

    document.getElementById("adv-insc1").href = urls.insc_adv
    document.getElementById("adv-insc2").href = urls.insc_adv

    document.getElementById("mod-0-brochure1").href = urls.brochure_c
    document.getElementById("mod-0-brochure2").href = urls.brochure_c

    document.getElementById("bas-brochure1").href = urls.brochure_a
    document.getElementById("bas-brochure2").href = urls.brochure_a

    document.getElementById("adv-brochure1").href = urls.brochure_b
    document.getElementById("adv-brochure2").href = urls.brochure_b
}

function updateText(texts) {
    document.getElementById("mod-0-val1").innerHTML = `Gratis Primeras 3 unidades. Inversión:  $${texts.value_mod_0} Unidad 4 y 5 + Certificado`
    document.getElementById("mod-0-val2").innerHTML = `Gratis Primeras 3 unidades. Inversión:  
$${texts.value_mod_0} Unidad 4 y 5 + Certificado`
    document.getElementById("mod-0-val3").innerHTML = `Gratis Primeras 3 unidades. Inversión:  <br>$${texts.value_mod_0} Unidad 4 y 5 + Certificado`
    document.getElementById("mod-1-val1").innerHTML = `Inversión: $${texts.value_mod_1}`
    document.getElementById("mod-2-val1").innerHTML = `Inversión: $${texts.value_mod_2}`
    document.getElementById("mod-3-val1").innerHTML = `Inversión: $${texts.value_mod_3}`
    document.getElementById("mod-4-val1").innerHTML = `Inversión: $${texts.value_mod_4}`
    document.getElementById("mod-5-val1").innerHTML = `Inversión: $${texts.value_mod_5}`
    document.getElementById("mod-6-val1").innerHTML = `Inversión: $${texts.value_mod_6}`
    document.getElementById("bas-val1").innerHTML = `Inversión: ${texts.value_bas}. Aplican descuentos`
    document.getElementById("bas-val2").innerHTML = `Inversión: ${texts.value_bas}`
    document.getElementById("adv-val1").innerHTML = `Inversión: ${texts.value_adv}. Aplican descuentos`
    document.getElementById("adv-val2").innerHTML = `Inversión: ${texts.value_adv}`
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
        btn.disabled = true
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

getDates()
getURLs()
getText()