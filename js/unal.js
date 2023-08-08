
// document.getElementById("btnProyectos").onclick = function () {
//     var url = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
//     if (url === "lenguajes.html") {
//         location.href = "../proyectos/proyectos.html";
//     } else if (url === "educacion.html") {
//         location.href = "../proyectos/proyectos.html#listado2";
//     } else if (url === "embebidos.html") {
//         location.href = "../proyectos/proyectos.html#listado3";
//     } else if (url === "transporte.html") {
//         location.href = "../proyectos/proyectos.html#listado4";
//     } else if (url === "agricultura.html") {
//         location.href = "../proyectos/proyectos.html#listado5";
//     }
// };
// document.getElementById("btnPublicaciones").onclick = function () {
//     var url = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
//     if (url === "lenguajes.html") {
//         location.href = "../publicaciones.html";
//     } else if (url === "educacion.html") {
//         location.href = "../publicaciones.html#publicacion2";
//     } else if (url === "embebidos.html") {
//         location.href = "../publicaciones.html#publicacion3";
//     } else if (url === "transporte.html") {
//         location.href = "../publicaciones.html#publicacion4";
//     } else if (url === "agricultura.html") {
//         location.href = "../publicaciones.html#publicacion5";
//     }
// };


var nav = false;

function openNav() {
    document
        .getElementById("mySidebar")
        .style
        .right = "0px";
    document
        .getElementById("main")
        .style
        .right = "260px";
    document
        .getElementById("openbtnId")
        .style
        .backgroundPosition = "35px 0";
    nav = true;
}

/* Set the width of the sidebar to 0
and the left margin of the page content to 0 */

function closeNav() {
    document
        .getElementById("mySidebar")
        .style
        .right = "-260px";
    document
        .getElementById("main")
        .style
        .right = "0px";
    document
        .getElementById("openbtnId")
        .style
        .backgroundPosition = "0 0";
    nav = false;
}

function toggleNav() {
    nav ? closeNav() : openNav();
}

mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
