//Previo a funciones
	var newClass = 0;
	var convalue = 0;

function ammunition(estilo1,estilo2,number){
  	var estail = estilo1+' '+estilo2;
	var frontPage = document.getElementsByTagName('body')[0].className = estail;
    if (document.getElementsByClassName('plas-title').length > 0)
        document.getElementsByClassName('plas-title')[0].className = 'content-title m-0 plas-title plas-title-' + number;
    document.querySelectorAll('.card').forEach(elem => {
        elem.className = 'card h-auto w-100 ' + estail;
    })
    document.querySelectorAll('.mlds-section').forEach(elem => {
        elem.className = 'mlds-section ' + estail;
    })
    if (number !== 2) {
        document.querySelectorAll('.info-hover-black').forEach(elem => {
            elem.className = 'info-hover-white info-hover-mutable';
        })
        document.querySelectorAll('.text-dark').forEach(elem => {
            elem.className = 'carousel-item-plas text-light';
        })
    } else {
        document.querySelectorAll('.info-hover-mutable').forEach(elem => {
            elem.className = 'info-hover-black';
        })
        document.querySelectorAll('.text-light').forEach(elem => {
            elem.className = 'carousel-item-plas text-dark';
        })
    }
  	console.log(estail);
}

//Agregar y remover clases al body

function hasClass(el, className)
{	
    if (el.classList)
        return el.classList.contains(className);
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className)
{	
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className))
        el.className += " " + className;
}

function removeClass(el, className)
{
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

//Desplegar pestaÃ±a

function hasAccess(detail, className)
{	
    if (detail.classList)
        return detail.classList.contains(className);
    return !!detail.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function openAccess(detail, className)
{	
    if (detail.classList)
        detail.classList.add(className)
    else if (!hasClass(detail, className))
        detail.className += " " + className;
}

function closeAccess(detail, className)
{
    if (detail.classList)
        detail.classList.remove(className)
    else if (hasClass(detail, className))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        detail.className = detail.className.replace(reg, ' ');
    }
}

function accesstab() {
  		var mainwin = document.getElementsByClassName("detalle")[0];
        if (document.getElementById("panel-accesibilidad").style.display === 'none' ) {
            document.getElementById("panel-accesibilidad").setAttribute("style", "display:block");
          	openAccess(mainwin,"accesibility-on");            	
        } else if (document.getElementById("panel-accesibilidad").style.display === 'block') {
          	document.getElementById("panel-accesibilidad").setAttribute("style", "display:none");
          	closeAccess(mainwin,"accesibility-on");
        }
  		var clase1 = "mainwin";
    };

// Herramienta Zoom

function cambiarTamanioLetra(movement) {

    var percent = document.getElementById("letter-percent").value;
  	
    switch (movement) {
        case '+':
            if (percent != '200%') {
                newPercent = parseFloat(percent) + 10;
            }
            break;
        case '-':
            if (percent != '100%') {
                newPercent = parseFloat(percent) - 10;
            }
            break;
    }
	newClass;
  	(function () {
		//console.log('antes es '+newClass);
      	newClass = "tamanio-letra-" + newPercent;
		}) ();
  	document.getElementById("letter-percent").value = newPercent + "%";
	//console.log(newClass);
	varload();
}
// fin de zoom inicial


// Invertir colores

function invertirColores(recover = false) {
    var css = 'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); }',
        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
        
    if (!window.counter) {
        window.counter = 1;
    } else {
        window.counter++;
        if (window.counter % 2 == 0) { var css = 'html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }' }
    };

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

// Fin Invertir colores

//Cambiar Contrastes

function cambiarContrastes(number) {
  	convalue;
  	(function () {
  		//console.log('antes es '+convalue);
      	convalue = "contraste-"+number;
		}) ();  
	//console.log(convalue);
	varload(number);
}

function restaurarContraste(){
  var contra = document.getElementsByTagName('body')[0];
  contra.removeAttribute("class");
  if (document.getElementsByClassName('plas-title').length > 0)
    document.getElementsByClassName('plas-title')[0].className = 'content-title m-0 plas-title';
  document.querySelectorAll('.card').forEach(elem => {
      elem.className = 'card h-auto w-100';
  })
  document.querySelectorAll('.mlds-section').forEach(elem => {
      elem.className = 'mlds-section bg-white';
  })
  document.querySelectorAll('.info-hover-mutable').forEach(elem => {
      elem.className = 'info-hover-black';
  })
  document.querySelectorAll('.text-light').forEach(elem => {
      elem.className = 'carousel-item-plas text-dark';
  })
}
//Fin de cambiar contrastes

//Reset
function defaultConfig() {
  	//restaurar texto  
  	document.getElementById("letter-percent").value = "100%";
  	newClass = 0;
  	convalue = 0;
  	//restaurar de contraste
	restaurarContraste();  
  	//restaurar de Invertir
    head = document.getElementsByTagName('head')[0],
	style = document.createElement('style');
    var css = 'html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}
    //console.log("Configuracion por defecto");

//Inicializar

function varload(number){
  	ammunition(newClass,convalue,number);
  	//console.log(newClass+" "+convalue)
}


window.onload = function(){
  document.getElementById("pestania-accesibilidad").addEventListener( 'click', accesstab);
  document.getElementById("pestania-accesibilidad-mobile").addEventListener( 'click', accesstab);
}


  
