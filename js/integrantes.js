const toggleActive = (e) => {
  let buttonActiveClass = "plas-button active rounded-4 d-block w-100 my-1 p-2";
  let buttonClass = "plas-button rounded-4 d-block w-100 my-1 p-2"
  
  let profesores = document.getElementById("profesores");
  let doctorado = document.getElementById("doctorado");
  let maestria = document.getElementById("maestria");

  if (e.target.id === "btn-profesores") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-doctorado").className = buttonClass;
    document.getElementById("btn-maestria").className = buttonClass;

    if (profesores.style.display == "none") {
        profesores.style.display = "block";
        doctorado.style.display = "none";
        maestria.style.display = "none";
    }


  } else if (e.target.id === "btn-doctorado") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-profesores").className = buttonClass;
    document.getElementById("btn-maestria").className = buttonClass;

    if (doctorado.style.display == "none") {
        doctorado.style.display = "block";
        profesores.style.display = "none";
        maestria.style.display = "none";
    }

  } else if (e.target.id === "btn-maestria") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-profesores").className = buttonClass;
    document.getElementById("btn-doctorado").className = buttonClass;
    
    if (maestria.style.display == "none") {
        maestria.style.display = "block";
        doctorado.style.display = "none";
        profesores.style.display = "none";
    }

  }
};
let btn_profesores = document.getElementById("btn-profesores");
let btn_doctorado = document.getElementById("btn-doctorado");
let btn_maestria = document.getElementById("btn-maestria");
btn_profesores.addEventListener("click", toggleActive, false);
btn_doctorado.addEventListener("click", toggleActive, false);
btn_maestria.addEventListener("click", toggleActive, false);
