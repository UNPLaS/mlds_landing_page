const toggleActive = (e) => {
  let buttonActiveClass = "plas-button active rounded-4 d-block w-75 my-1 p-2";
  let buttonClass = "plas-button rounded-4 d-block w-75 my-1 p-2";

  let contenido = document.getElementById("contenido");
  let espanol = document.getElementById("espanol");
  let ingles = document.getElementById("ingles");
  let diapositivas_uncolab = document.getElementById("diapositivas_uncolab");
  let diapositivas_aprendizaje = document.getElementById(
    "diapositivas_aprendizaje"
  );

  if (e.target.id === "btn-contenido") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-espanol").className = buttonClass;
    document.getElementById("btn-ingles").className = buttonClass;
    document.getElementById("btn-diapositivas_uncolab").className = buttonClass;
    document.getElementById("btn-diapositivas_aprendizaje").className =
      buttonClass;
    if (contenido.style.display == "none") {
      contenido.style.display = "block";
      espanol.style.display = "none";
      ingles.style.display = "none";
      diapositivas_aprendizaje.style.display = "none";
      diapositivas_uncolab.style.display = "none";
    }
  } else if (e.target.id === "btn-espanol") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-contenido").className = buttonClass;
    document.getElementById("btn-ingles").className = buttonClass;
    document.getElementById("btn-diapositivas_aprendizaje").className =
      buttonClass;
    document.getElementById("btn-diapositivas_uncolab").className = buttonClass;
    if (espanol.style.display == "none") {
      espanol.style.display = "block";
      contenido.style.display = "none";
      ingles.style.display = "none";
      diapositivas_aprendizaje.style.display = "none";
      diapositivas_uncolab.style.display = "none";
    }
  } else if (e.target.id === "btn-ingles") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-contenido").className = buttonClass;
    document.getElementById("btn-espanol").className = buttonClass;
    document.getElementById("btn-diapositivas_uncolab").className = buttonClass;
    document.getElementById("btn-diapositivas_aprendizaje").className =
      buttonClass;
    if (diapositivas_uncolab.style.display == "none") {
      ingles.style.display = "block";
      contenido.style.display = "none";
      espanol.style.display = "none";
      diapositivas_uncolab.style.display = "none";
      diapositivas_aprendizaje.style.display = "none";
    }
  } else if (e.target.id === "btn-diapositivas_uncolab") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-contenido").className = buttonClass;
    document.getElementById("btn-espanol").className = buttonClass;
    document.getElementById("btn-ingles").className = buttonClass;
    document.getElementById("btn-diapositivas_aprendizaje").className =
      buttonClass;
    if (diapositivas_uncolab.style.display == "none") {
      diapositivas_uncolab.style.display = "block";
      contenido.style.display = "none";
      espanol.style.display = "none";
      ingles.style.display = "none";
      diapositivas_aprendizaje.style.display = "none";
    }
  } else if (e.target.id === "btn-diapositivas_aprendizaje") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-contenido").className = buttonClass;
    document.getElementById("btn-espanol").className = buttonClass;
    document.getElementById("btn-ingles").className = buttonClass;
    document.getElementById("btn-diapositivas_uncolab").className = buttonClass;
    if (diapositivas_aprendizaje.style.display == "none") {
      diapositivas_aprendizaje.style.display = "block";
      contenido.style.display = "none";
      espanol.style.display = "none";
      ingles.style.display = "none";
      diapositivas_uncolab.style.display = "none";
    }
  }
};

let btn_contenido = document.getElementById("btn-contenido");
let btn_espanol = document.getElementById("btn-espanol");
let btn_ingles = document.getElementById("btn-ingles");
let btn_diapositivas_uncolab = document.getElementById(
  "btn-diapositivas_uncolab"
);
let btn_diapositivas_aprendizaje = document.getElementById(
  "btn-diapositivas_aprendizaje"
);

btn_contenido.addEventListener("click", toggleActive, false);
btn_espanol.addEventListener("click", toggleActive, false);
btn_ingles.addEventListener("click", toggleActive, false);
btn_diapositivas_uncolab.addEventListener("click", toggleActive, false);
btn_diapositivas_aprendizaje.addEventListener("click", toggleActive, false);
