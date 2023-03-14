var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");        
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400); 

function disenharCircunferencia(x,y,radio){
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}    

function limpiarPantalla(){

    pincel.clearRect(0,0,900,400);

}

var x = 0
var sentido = 8;

function actualizarPantalla(){

    limpiarPantalla();
    if(x > 900){
        sentido = -8;
    }else if(x < 0){
        sentido = 8;
    }

    disenharCircunferencia(x,20,10);
    x = x + sentido;
}

setInterval(actualizarPantalla,100);