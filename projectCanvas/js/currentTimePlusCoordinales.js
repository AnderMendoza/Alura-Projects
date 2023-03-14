var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");    
pincel.fillStyle = "grey";
pincel.fillRect(0,0,900,460); 

function mostrarMensaje(evento){
    var x = evento.pageX - pantalla.offsetLeft; //pos x
    var y = evento.pageY - pantalla.offsetTop; //pos y
    var d = new Date(); //crea una variable de tipo date
    var hora = checkTime(d.getHours()) + ":" + checkTime(d.getMinutes()) + ":" + checkTime(d.getSeconds());
    //Check if the number of hours, minutes or seconds has a single digit,
    //positive case adds the zero in front to obtain the desired format 00:00:00
    function checkTime(i){
        if (i<10){
            i="0" + i;
        }
        return i;
    }

    alert("La hora es: " + hora + " y las coordenadas son: x=" + x + ", y=" + y);
}

//Here comes the function call with the onclick event
pantalla.onclick = mostrarMensaje