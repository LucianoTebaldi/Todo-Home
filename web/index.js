const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", () =>{
        navMenu.classList.toggle("nav-menu_visible");
    
    if (navMenu.classList.contains("nav-menu_visible")){
    navToggle.setAttribute("aria-label","Cerrar menu");
    } else {
    navToggle.setAttribute("aria-label", "Abrir menu")
    }
    }); 
/* manejo de el carrusel por btn  */
const btnleft = document.querySelector(".btn-left"),
    btnright = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    slidersection = document.querySelectorAll(".imgslider");

/* funciones que van a ir moviendo las imagenes  */

/* activador de las funciones  */
/* variable que va a contener el / */
btnright.addEventListener("click", e => movetoright())
btnleft.addEventListener("click", e => movetoleft())

setInterval(() => {
    movetoright()
}, 3000);
/* variable que contiene el desplazamiento  */
let operacion = 0,
    counter = 0 ,
    widthImg = 100 / slidersection.length;
/* funciones para el moviento del carrusel */ 
function movetoright() {
    if (counter >= slidersection.length-1){
        counter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition ="none"
        return;
    }
        counter++;

        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease 0.6s"
    }
    



function movetoleft() {
    counter--;
    if (counter < 0) {
        counter = slidersection.length - 1;
        operacion = widthImg * (slidersection.length - 1);
        console.log(operacion);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease 0.6s";
        slider.style.transition ="none"
        return;
    }
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease 0.6s";
    };
var comentariosguardos=[];
var comentarios;
let listaHTML = "<ul>";

    function mandar(){

    comentario = document.getElementById("comentario").value;
    comentariosguardos.push(comentario)
    if(comentariosguardos.length >=2){
        comentariosguardos.shift()
        
    }};
    for (let i = 0; i <comentariosguardos.length; i++) {

        listaHTML += "<li>" + comentariosguardos + "</li>";
    listaHTML += "</ul>";
    document.getElementById("ver").innerHTML = listaHTML
    }

    function comprar() {
        var escritorio = document.getElementById("escritorio");
        var banco = document.getElementById("banco");
        var mesaE = document.getElementById("mesa-exterior");
        var zapatero = document.getElementById("mesa");
        var mesa = document.getElementById("zapatero");
    };
