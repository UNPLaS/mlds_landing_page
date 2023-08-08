const toggleActive = (e) => {
  let buttonActiveClass = "plas-button active rounded-4 d-block w-75 my-1 p-2";
  let buttonActiveClassTransporte = "plas-button active rounded-4 d-block w-100 my-1 p-2";
  let buttonClass = "plas-button rounded-4 d-block w-75 my-1 p-2";
  let buttonClassTransporte ="plas-button rounded-4 d-block w-100 my-1 p-2"

  let lenguajes = document.getElementById("publicacion1");
  let educacion = document.getElementById("publicacion2");
  let embebidos = document.getElementById("publicacion3");
  let transporte = document.getElementById("publicacion4");
  let agricultura = document.getElementById("publicacion5");

  let lenguajes_title = document.getElementById("title-lenguajes");
  let educacion_title = document.getElementById("title-educacion");
  let embebidos_title = document.getElementById("title-embebidos");
  let transporte_title = document.getElementById("title-transporte");
  let agricultura_title = document.getElementById("title-agricultura");

  if (e.target.id === "btn-lenguajes") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-educacion").className = buttonClass;
    document.getElementById("btn-embebidos").className = buttonClass;
    document.getElementById("btn-transporte").className = buttonClassTransporte;
    document.getElementById("btn-agricultura").className = buttonClass;
    if (lenguajes.style.display == "none") {
      lenguajes.style.display = "block";
      educacion.style.display = "none";
      embebidos.style.display = "none";
      transporte.style.display = "none";
      agricultura.style.display = "none";
    }

    if (lenguajes_title.style.display == "none") {
      lenguajes_title.style.display = "block";
      educacion_title.style.display = "none";
      embebidos_title.style.display = "none";
      transporte_title.style.display = "none";
      agricultura_title.style.display = "none";
    }
  } else if (e.target.id === "btn-educacion") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-lenguajes").className = buttonClass;
    document.getElementById("btn-embebidos").className = buttonClass;
    document.getElementById("btn-transporte").className = buttonClassTransporte;
    document.getElementById("btn-agricultura").className = buttonClass;

    if (educacion.style.display == "none") {
      educacion.style.display = "block";
      lenguajes.style.display = "none";
      embebidos.style.display = "none";
      transporte.style.display = "none";
      agricultura.style.display = "none";
    }

    if (educacion_title.style.display == "none") {
      educacion_title.style.display = "block";
      lenguajes_title.style.display = "none";
      embebidos_title.style.display = "none";
      transporte_title.style.display = "none";
      agricultura_title.style.display = "none";
    }
  } else if (e.target.id === "btn-embebidos") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-lenguajes").className = buttonClass;
    document.getElementById("btn-educacion").className = buttonClass;
    document.getElementById("btn-transporte").className = buttonClassTransporte;
    document.getElementById("btn-agricultura").className = buttonClass;

    if (embebidos.style.display == "none") {
      embebidos.style.display = "block";
      lenguajes.style.display = "none";
      educacion.style.display = "none";
      transporte.style.display = "none";
      agricultura.style.display = "none";
    }

    if (embebidos_title.style.display == "none") {
      embebidos_title.style.display = "block";
      lenguajes_title.style.display = "none";
      educacion_title.style.display = "none";
      transporte_title.style.display = "none";
      agricultura_title.style.display = "none";
    }
  } else if (e.target.id === "btn-transporte") {
    document.getElementById(e.target.id).className = buttonActiveClassTransporte;
    document.getElementById("btn-lenguajes").className = buttonClass;
    document.getElementById("btn-educacion").className = buttonClass;
    document.getElementById("btn-embebidos").className = buttonClass;
    document.getElementById("btn-agricultura").className = buttonClass;

    if (transporte.style.display == "none") {
      transporte.style.display = "block";
      lenguajes.style.display = "none";
      educacion.style.display = "none";
      embebidos.style.display = "none";
      agricultura.style.display = "none";
    }

    if (transporte_title.style.display == "none") {
      transporte_title.style.display = "block";
      lenguajes_title.style.display = "none";
      educacion_title.style.display = "none";
      embebidos_title.style.display = "none";
      agricultura_title.style.display = "none";
    }
  } else if (e.target.id === "btn-agricultura") {
    document.getElementById(e.target.id).className = buttonActiveClass;
    document.getElementById("btn-lenguajes").className = buttonClass;
    document.getElementById("btn-educacion").className = buttonClass;
    document.getElementById("btn-transporte").className = buttonClassTransporte;
    document.getElementById("btn-embebidos").className = buttonClass;

    if (agricultura.style.display == "none") {
      agricultura.style.display = "block";
      lenguajes.style.display = "none";
      educacion.style.display = "none";
      transporte.style.display = "none";
      embebidos.style.display = "none";
    }

    if (agricultura_title.style.display == "none") {
      agricultura_title.style.display = "block";
      lenguajes_title.style.display = "none";
      educacion_title.style.display = "none";
      transporte_title.style.display = "none";
      embebidos_title.style.display = "none";
    }
  }
};

let btn_lenguajes = document.getElementById("btn-lenguajes");
let btn_educacion = document.getElementById("btn-educacion");
let btn_embebidos = document.getElementById("btn-embebidos");
let btn_transporte = document.getElementById("btn-transporte");
let btn_agricultura = document.getElementById("btn-agricultura");

btn_lenguajes.addEventListener("click", toggleActive, false);
btn_educacion.addEventListener("click", toggleActive, false);
btn_embebidos.addEventListener("click", toggleActive, false);
btn_transporte.addEventListener("click", toggleActive, false);
btn_agricultura.addEventListener("click", toggleActive, false);


if(location.hash === "#educacion"){
  btn_educacion.click();
}
else if (location.hash === "#transporte"){
  btn_transporte.click();
}
else if (location.hash === "#agricultura"){
  btn_agricultura.click();
}
else if (location.hash === "#embebidos"){
  btn_embebidos.click();
}
