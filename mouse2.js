//Estado del click
var estado=0;

//Color de linea
var colorLinea="blue";

var area=document.getElementById("area_de_dibujo");
var papel=area.getContext("2d");

//guardar coordenada en x
var x;
//guardad coordenada en y
var y;

//cuando presionas el mouse
document.addEventListener("mousedown",presionarMouse);

//cuando sueltas el click
document.addEventListener("mouseup",soltarMouse);

//cuando mueves el mouse
document.addEventListener("mousemove",dibujarMouse);

//dibujar el borde
dibujarLinea("red",0,0,300,0,papel);
dibujarLinea("blue",300,0,300,300,papel);
dibujarLinea("grey",300,300,0,300,papel);
dibujarLinea("yellow",0,300,0,0,papel);

//funcion para mousemove
function dibujarMouse(evento){
    //solo dibuja si el click esta presionado
    if(estado==1)
    {
        dibujarLinea(colorLinea,x,y,evento.layerX,evento.layerY, papel);
    }
    x= evento.layerX;
    y=evento.layerY;
}

//funcion para mousedown
function presionarMouse(evento){
    //click presionado
    estado=1;
    x1=evento.layerX;
    y1=evento.layerY;

}

//funcion para mouse up
function soltarMouse(evento){
    
    //click suelto
      estado=0;

    x1=evento.layerX;
    y1=evento.layerY;

}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();                  // Inicia el trazo
    lienzo.strokeStyle = color;          // Estilo de trazo (color)
    lienzo.lineWidth = 2;                // Ancho de la linea
    lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
    lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
    lienzo.stroke();                     // Dibuja con el estio de trazo
    lienzo.closePath();                  // Cierra el dibujo
  }

