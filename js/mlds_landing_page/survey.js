const knowdledgeListURL = 'https://raw.githubusercontent.com/mindlab-unal/MLDS-knowledge-list/main/knowledge-list.json';
const prevBtn = document.getElementById("surveyPrevBtn");
const nextBtn = document.getElementById("surveyNextBtn");
const sendBtn = document.getElementById("surveySendBtn");
const backLPBtn = document.getElementById("backLPBtn");

let numPages = 0;
let currentPage = 0;
let knowdledgeMods = {}

/* Load data*/

async function getknowledgeList() {
    const response = await fetch(knowdledgeListURL);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const knowdledgeList = await response.json();
    return knowdledgeList;
}

function createknowledgeItem(knowledText, checkboxId) {
    const checkboxHtml = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="${knowledText}" id="${checkboxId}">
    <label class="form-check-label" for="${checkboxId}">${knowledText}</label>
</div>`;
    return checkboxHtml;
}

function concatKnowledItems(modNumber, moduleInfo) {
    const items = [...moduleInfo["primary"], ...moduleInfo["secondary"]];
    const knowledgeArray = [];
    for (let i = 0; i < items.length; i++) {
        knowledgeArray.push(createknowledgeItem(items[i], `cb-${modNumber}-${i}`));
    }
    return knowledgeArray;
}

function createModList(modNumber, moduleInfo, knowledgeExtraClasses = "") {
    const knowdledgeItems = concatKnowledItems(modNumber, moduleInfo);
    let checkboxItems = ""
    for (let item of knowdledgeItems) {
        checkboxItems += item + "\n"
    }
    const moduleList = `<div class="survey-knowledge">
    ${knowledgeExtraClasses ? "" : `<h2>Módulo ${modNumber}: ${moduleInfo["name"]}</h2>`}
    <div class="survey-knowledge-list ${knowledgeExtraClasses}">
        ${checkboxItems}
    </div>
</div>`;
    return moduleList;
}

function loadMod0(module0Info) {
    const mod0div = document.getElementById("mod-0-list");
    mod0div.innerHTML = createModList(0, module0Info, knowledgeExtraClasses = "d-flex justify-content-start")
}

async function loadLists() {
    try {
        knowdledgeMods = await getknowledgeList();
        const modsRow = document.getElementById("modRequirements");
        const numModules = Object.keys(knowdledgeMods).length;
        //Mod 0 is in first page, therefore subtract one
        numPages = parseInt((numModules - 1) / 3);
        currentPage = 1;

        loadMod0(knowdledgeMods["0"]);

        let htmlModContent = '';
        for (let i = 1; i < numModules; i++) {
            htmlModContent += `<div class="col-md-4 animation" ${i > 3 ? "hidden" : ""} id="mod-${i}-list">${createModList(i, knowdledgeMods[i])}</div>`;
        }

        modsRow.innerHTML = htmlModContent;

    } catch (error) {
        console.log(error);
    }
}

/* change page */

function updateSurvey() {
    toggleBtns();
    toggleKnowledgeList();
}

function toggleBtns() {
    if (currentPage < numPages) {
        nextBtn.removeAttribute("hidden");
    } else {
        nextBtn.setAttribute('hidden', 'true');
    }

    if (currentPage > 1 && currentPage <= numPages) {
        prevBtn.removeAttribute("hidden");
    } else {
        prevBtn.setAttribute('hidden', 'true');
    }

    if (currentPage === numPages) {
        sendBtn.removeAttribute("hidden");
    } else {
        sendBtn.setAttribute('hidden', 'true');
    }
}

function toggleKnowledgeList() {
    const minMod = currentPage * 3 - 2
    const maxMod = currentPage * 3
    const numModules = Object.keys(knowdledgeMods).length;
    const mod0div = document.getElementById("mod-0-list");

    if (currentPage <= numPages) {
        if (currentPage === 1) {
            setTimeout(() => { mod0div.removeAttribute("hidden") }, 200);
            setTimeout(() => {
                mod0div.classList.remove("hide");
            }, 100);
        } else {
            mod0div.classList.add("hide");
            setTimeout(() => {
                mod0div.setAttribute('hidden', 'true');
            }, 200);
        }



        for (let i = 1; i < numModules; i++) {
            let modeCol = document.getElementById(`mod-${i}-list`);
            if (i >= minMod && i <= maxMod) {
                setTimeout(() => { modeCol.removeAttribute("hidden") }, 200);
                setTimeout(() => {
                    modeCol.classList.remove("hide");
                }, 100);
            } else {
                modeCol.classList.add("hide");
                setTimeout(() => { modeCol.setAttribute('hidden', 'true'); }, 200);
            }
        }
    } else {
        hideAllKnowledgeList();
    }
}

/** result */

function getModResponses() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const responses = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            responses.push(checkbox.value);
        }
    });

    return responses;
}

function calcResult(responses) {
    const numModules = Object.keys(knowdledgeMods).length;
    const results = [];
    for (let i = 0; i < numModules; i++) {
        let resultMod = checkContent(responses, i);
        results.push(resultMod);
    }
    return results;
}

function checkContent(responses, modNumber) {
    const primaryKnowledge = knowdledgeMods[modNumber]['primary'];
    const secondaryKnowledge = knowdledgeMods[modNumber]['secondary'];
    let result = 0;
    /**
     * 0 Needs see module
     * 1 Has secondary knowledge, but still needs see module
     * 2 Has primary knowledge, can see next module, but see this module is good idea
     * 3 Has all items, can see the next module
     */

    if (isContained(responses, secondaryKnowledge)) {
        result += 1;
    }

    if (isContained(responses, primaryKnowledge)) {
        result += 2;
    }

    return result;
}

function isContained(arrayContainer, arrayContent) {
    return arrayContent.every(item => arrayContainer.includes(item));
}

function createResultText(results) {
    let htmlResponse = "";
    const recommendedMods = [];
    for (let i = 0; i < results.length; i++) {
        let points = results[i];
        if (points == 0) {
            htmlResponse += `<p>Te recomendamos que inicies con el <strong>módulo ${i}: ${knowdledgeMods[i]["name"]}</strong> de la <strong>línea ${knowdledgeMods[i]["line"]}</strong>, ya que hay conocimientos fundamentales que debes estudiar</p>`;
            recommendedMods.push(i);
            break
        }
        if (points == 1) {
            htmlResponse += `<p>Aunque ya posees algunos conocimientos relacionados, te recomendamos que inicies con el <strong>módulo ${i}: ${knowdledgeMods[i]["name"]}</strong> de la <strong>línea ${knowdledgeMods[i]["line"]}</strong></p>`;
            recommendedMods.push(i);
            break
        }

        if (points == 2) {
            if (i + 1 < results.length) {
                htmlResponse += `<p>Posees los conocimientos suficientes para ver el <strong>módulo ${i + 1}: ${knowdledgeMods[i + 1]["name"]}</strong> de la <strong>línea ${knowdledgeMods[i + 1]["line"]}</strong>, pero te recomendamos también ver el <strong>módulo ${i}: ${knowdledgeMods[i]["name"]}</strong> de la <strong>línea ${knowdledgeMods[i]["line"]}</strong> para reforzar tus conocimientos, ya que puedes tener dificultades en ciertos temas</p>`;
                recommendedMods.push(i + 1);
            } else {
                htmlResponse += `<p>Posees los conocimientos básicos del <strong>módulo ${i}: ${knowdledgeMods[i]["name"]}</strong> de la <strong>línea ${knowdledgeMods[i]["line"]}</strong>, pero te recomendamos ver su contenido para mejorar tu conocimiento</p>`;
                recommendedMods.push(i);
            }
        }

        if (i + 1 == results.length && recommendedMods.length == 0) {
            htmlResponse += `<p>Posees los conocimientos necesarios en todos los cursos. Puedes ver el curso que más te interese para mejorar tus habilidades. Pronto estaremos añadiendo más cursos que serán de tu interés</p>`
        }

    }
    return { htmlResponse: htmlResponse, recommendedMods: recommendedMods };
}

function hideAllKnowledgeList() {
    const mod0div = document.getElementById("mod-0-list");
    const modRequirements = document.getElementById("modRequirements");
    mod0div.classList.add("hide");
    modRequirements.classList.add("hide");

    setTimeout(() => {
        mod0div.setAttribute('hidden', 'true');
        modRequirements.setAttribute('hidden', 'true');
    }, 200);

}

function preselectLine(recommendedMods) {
    const interestForm = document.getElementById("interestForm");
    const firstRecommendedMod = recommendedMods[0];
    if (firstRecommendedMod > 3) {
        interestForm.value = "Linea avanzada";
    } else if (firstRecommendedMod > 0) {
        interestForm.value = "Linea basica";
    } else if (firstRecommendedMod === 0) {
        interestForm.value = "Introduccion programacion";
    } else {
        // Do nothing
    }

}

function showResults() {
    const responses = getModResponses();
    const results = createResultText(calcResult(responses));
    document.getElementById("result").innerHTML = `<h2>Resultado:</h2>${results["htmlResponse"]}`;
    preselectLine(results["recommendedMods"]);
    setTimeout(() => {
        document.getElementById("result").removeAttribute("hidden");
        document.getElementById("form").removeAttribute("hidden");
    }, 200);
}

/** setup page */

prevBtn.addEventListener("click", e => {
    currentPage -= 1;
    updateSurvey();
});

nextBtn.addEventListener("click", e => {
    currentPage += 1;
    updateSurvey();
});

sendBtn.addEventListener("click", e => {
    currentPage += 1
    updateSurvey();
    showResults();
});


loadLists();