var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var puedoDibujar = false;

//Variables to draw the palette
var xRojo = 0;
var xVerde  = 50;
var xAzul = 100;
var yCuadrados = 0;
var tamanhoCuadrados = 50;
var colorActual = "blue";

function dibujarCirculo(x,y,colorActual ) {

    if(puedoDibujar) {

        pincel.fillStyle = colorActual;
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2 * 3.14);
        pincel.fill();

    }
}

//Function to draw each of the squares of the palette
function dibujarCuadrado(x, y, tamanho, color) {

    pincel.fillStyle = color;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();

}

//Function to draw the color palette
function dibujarPaletaColores() {

    dibujarCuadrado(xRojo, yCuadrados, tamanhoCuadrados, 'red');
    dibujarCuadrado(xVerde, yCuadrados, tamanhoCuadrados, 'green');
    dibujarCuadrado(xAzul, yCuadrados, tamanhoCuadrados, 'blue');

}

function habilitarDibujar() {

    puedoDibujar = true;

}

function deshabilitarDibujar() {

    puedoDibujar = false;

}

//Function to delimit the area
function puedeDisenharArea(xCoordenada,yCoordenada){

    if ((xCoordenada >= 0 && xCoordenada < (3*tamanhoCuadrados+5)) && 
        (yCoordenada >=0 && yCoordenada < (tamanhoCuadrados+5))) {

        return false;

    } else{

        return true;

    }

}    

function capturarMovimientoDelMouse(evento){

    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if (puedeDisenharArea(x,y)){

            dibujarCirculo(x,y,colorActual);

    }

}

function seleccionarColor(evento) {

    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    //Each condition alters the color of the currentColor variable

    //We begin with the condition of the Y axis, which is common to all
    if (y > yCuadrados && y < (yCuadrados + tamanhoCuadrados)) {

        if(x > xRojo && x < (xRojo + tamanhoCuadrados)) {

            colorActual = "red";
            console.log(colorActual);

        } else if (x > xVerde && x < (xVerde + tamanhoCuadrados)) {

            colorActual = "green";

        } else if(x > xAzul && x < (xAzul + tamanhoCuadrados)) {

            colorActual = "blue";

        }            


    }


}

pantalla.onmousemove = capturarMovimientoDelMouse;

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

dibujarPaletaColores();

pantalla.onclick = seleccionarColor;