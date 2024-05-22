
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#bEnviardatos").click(function(event){
        event.preventDefault(); // Prevenir el envío del formulario

        var nombre = $("#itnombre").val();
        var correo = $("#itmail").val(); // Cambiado de #itcorreo a #itmail
        var asunto = $("#itasunto").val();

        var valid = true; // Bandera para verificar validación

        if(nombre == ""){
            $("#mensaje1").fadeIn();
            valid = false;
        } else {
            $("#mensaje1").fadeOut();
        }

        if(correo == "" || !expr.test(correo)){
            $("#mensaje2").fadeIn();
            valid = false;
        } else {
            $("#mensaje2").fadeOut();
        }

        if(asunto == ""){
            $("#mensaje3").fadeIn();
            valid = false;
        } else {
            $("#mensaje3").fadeOut();
        }

        if(valid){
            // Si todo es válido, puedes proceder a enviar el formulario
            // Aquí puedes agregar código para enviar el formulario, por ejemplo, usando AJAX
            // o simplemente dejar que el formulario se envíe normalmente.
            $("#miformulario").submit();
            $("#popup").fadeIn();
    setTimeout(function() {
        $("#popup").fadeOut();
    }, 3000);

            document.getElementById('miformulario').reset();
        }
    });
});







let currentSlide = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + items.length) % items.length;
    items[currentSlide].classList.add('active');
    updateCarousel();
}

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
});



let app = document.getElementById('typewriter');
 
    let typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
    });
     
    typewriter
      .pauseFor(2500)
      .typeString('Estudiante de Informatica')
      .pauseFor(200)
      .deleteChars(10)
      .start();
      
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("ingles");
        habilidades[4].classList.add("empatia");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("colaboracion");
        habilidades[7].classList.add("manejo");
        
        // Añadir estrella después de la animación
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].addEventListener("animationend", function() {
                addStarAfterAnimation(habilidades[i]);
            });
        }
    }
}

// Función para agregar una estrella después de la animación
function addStarAfterAnimation(element) {
    var star = document.createElement("span");
    star.innerHTML = "★"; // Aquí puedes ajustar el contenido de la estrella según tu preferencia
    star.classList.add("star"); // Aplica estilos CSS necesarios
    element.appendChild(star);
}



// Detectar el desplazamiento para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}



