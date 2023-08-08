const toggleActive = (e) => {
    let buttonActiveClass = "plas-button active rounded-4 d-block w-100 my-1 p-2";
    let buttonClass = "plas-button rounded-4 d-block w-100 my-1 p-2"

    let turing = document.getElementById("turing");
    let compilers = document.getElementById("compilers");

    if (e.target.id === "btn-turing") {
        document.getElementById(e.target.id).className = buttonActiveClass;
        document.getElementById("btn-compilers").className = buttonClass;

        if (turing.style.display == "none") {
            turing.style.display = "block";
            compilers.style.display = "none";
        }


    } else if (e.target.id === "btn-compilers") {
        document.getElementById(e.target.id).className = buttonActiveClass;
        document.getElementById("btn-turing").className = buttonClass;

        if (compilers.style.display == "none") {
            compilers.style.display = "block";
            turing.style.display = "none";
        }

    }
};
let btn_turing = document.getElementById("btn-turing");
let btn_compilers = document.getElementById("btn-compilers");

btn_turing.addEventListener("click", toggleActive, false);
btn_compilers.addEventListener("click", toggleActive, false);

