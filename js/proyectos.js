const toggleActive = (e) => {
    let buttonActiveClass = "plas-button active rounded-4 d-block w-75 my-1 p-2";
    let buttonActiveClassTransporte = "plas-button active rounded-4 d-block w-100 my-1 p-2";
    let buttonClass = "plas-button rounded-4 d-block w-75 my-1 p-2";
    let buttonClassTransporte ="plas-button rounded-4 d-block w-100 my-1 p-2"
  
    let lenguajes = document.getElementById("proyectos1");
    let educacion = document.getElementById("proyectos2");
    let embebidos = document.getElementById("proyectos3");
    let transporte = document.getElementById("proyectos4");
    let agricultura = document.getElementById("proyectos5");
  
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
  