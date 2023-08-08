const toggleActive = (e) => {
  let buttonActiveClass = "plas-button active rounded-4 d-block w-75 my-1 p-2";
  let buttonClass = "plas-button rounded-4 d-block w-75 my-1 p-2";

  let contenido = document.getElementById("contenido");
  let documento = document.getElementById("documento");
  let diapositivas = document.getElementById("diapositivas");

  if (e.target.id === "btn-contenido") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-documento").className = buttonClass;
    document.getElementById("btn-diapositivas").className = buttonClass;
    if (contenido.style.display == "none") {
      contenido.style.display = "block";
      documento.style.display = "none";
      diapositivas.style.display = "none";
    }
  } else if (e.target.id === "btn-documento") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-contenido").className = buttonClass;
    document.getElementById("btn-diapositivas").className = buttonClass;

    if (documento.style.display == "none") {
      documento.style.display = "block";
      contenido.style.display = "none";
      diapositivas.style.display = "none";
    }
  } else if (e.target.id === "btn-diapositivas") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-contenido").className = buttonClass;
    document.getElementById("btn-documento").className = buttonClass;

    if (diapositivas.style.display == "none") {
      diapositivas.style.display = "block";
      contenido.style.display = "none";
      documento.style.display = "none";
    }
  }
};

let btn_contenido = document.getElementById("btn-contenido");
let btn_documento = document.getElementById("btn-documento");
let btn_diapositivas = document.getElementById("btn-diapositivas");

btn_contenido.addEventListener("click", toggleActive, false);
btn_documento.addEventListener("click", toggleActive, false);
btn_diapositivas.addEventListener("click", toggleActive, false);
