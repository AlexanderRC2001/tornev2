let menu = document.querySelector(".menu");
let cabeza = document.querySelector(".cabeza");
let img = document.querySelector(".img");
let estado_menu = false;

// Función para verificar el ancho del cuerpo y cerrar el menú si es necesario
function checkBodyWidthAndCloseMenu() {
    const bodyWidth = document.body.clientWidth;
    if (bodyWidth <= 989) {
        // Cuando el ancho del cuerpo es menor o igual a 989px
        img.style.marginTop = "60px";
        cabeza.style.height = "50px";
        estado_menu = false;
    } else if (bodyWidth >= 990) {
        // Cuando el ancho del cuerpo es mayor o igual a 990px
        img.style.marginTop = "0";
        cabeza.style.height = "70px";
    }
}

// Función para alternar la expansión del menú
function desplegar() {
    if (!estado_menu) {
        cabeza.style.height = "200px";
        img.style.marginTop = "0px";
        estado_menu = true;
    } else {
        cabeza.style.height = "50px";
        img.style.marginTop = "60px";
        estado_menu = false;
    }
}

// Event listener para el clic en el menú
menu.addEventListener("click", desplegar);

// Event listener para ajustar los estilos al cambiar el tamaño de la ventana
window.addEventListener('resize', checkBodyWidthAndCloseMenu);

// Verificar inicialmente y establecer los estilos adecuados basados en el ancho del cuerpo
checkBodyWidthAndCloseMenu();