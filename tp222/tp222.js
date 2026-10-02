let estado;
let iniciofondo, fondoinicio, titulo,flecha;
let texto = [];
let pantalla = [];


function preload () {
 
 titulo = loadImage ("data/titulo2.png");
 flecha = loadImage ("data/flecha.png");
 fondoinicio = loadImage ("data/fondoinicio.png");
 
  for (let i = 1; i <= 12; i++) {
    pantalla[i] = loadImage("data/pantalla" + i + ".jpeg");
  }
  
  texto = loadStrings ("data/parrafos.txt");
}



function setup() {
 createCanvas (800,450)
 textFont('Georgia'); 
 estado=0

}
 

function draw() {

  if (estado==0) {
    image(fondoinicio,0,0,width,height);
    
    image(titulo, 310, 0, 180, 150);
    
    generarBoton(400, 410, 180, 45, texto[estado])
  }


if  ( estado == 1 ){
  image(pantalla[estado],0,0,width,height);
  generarTexto(20, 30, 760, 80, texto[estado]);
  image(flecha, 690, 380, 100, 56);

}

if ( estado == 2) {
 image(pantalla[estado],0,0,width,height);
 generarTexto(20, 310, 760, 131, texto[estado]);
image(flecha, 690, 380, 100, 56);

}

if (estado == 3) {
  image(pantalla[3], 0, 0, width, height);
  generarTexto(20, 300, 760, 130, texto[estado]);
  image(flecha, 690, 380, 100, 56);
}

if (estado == 3.1) {
  image(pantalla[3], 0, 0, width, height);

  generarPregunta (20, 310, 760, 120, "¿A Mario le resulta sospechoso?","Le parece que son solo coincidencias e ignora", "Le resulta muy raro y quiere saber más")
}

if ( estado == 4) {
 image(pantalla[estado],0,0,width,height);
 
 generarTexto(10, 335, 780, 108, texto[estado]);

  image(flecha, 700, 395, 100, 56);

}

if ( estado == 5) {
 image(pantalla[estado],0,0,width,height);
 
 generarTexto(10, 335, 780, 108, texto[estado]);

  image(flecha, 700, 395, 100, 56);

}

if ( estado == 5.1) {
 image(pantalla[5],0,0,width,height);
  
  generarPregunta ( 10, 320, 780, 120, "Las pruebas apuntan a que Delia era culpable.","Su amor es mayor: lo ignora e intenta protegerla", "Ir a cuestionar a Delia.")


}

if (estado == 6) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(10, 335, 780, 108, texto[estado]);
  image(flecha, 700, 395, 100, 56);
}

if (estado == 7) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 335, 776, 106, texto[estado]);
  image(flecha, 700, 395, 100, 56);
}

if (estado == 8) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 312, 776, 126, texto[estado]);
  image(flecha, 700, 392, 100, 56);
}

if (estado == 8.1) {
  image(pantalla[8], 0, 0, width, height);
   generarPregunta ( 12, 320, 776, 120, "Mario nota que los Mañara no se alegran tanto por su relación con Delia.","Les pregunta que les sucede, si hay algún problema.", "Adivina que los gastos en las recetas los afligían y nada más.")

}

if (estado == 9) {
  image(pantalla[estado], 0, 0, width, height);
  generarPregunta ( 12, 320, 776, 120,texto [estado], "Los presiona a que le digan la verdad","Lo deja pasar asumiendo que es un tema delicado para ellos") 

  
}

if (estado == 10) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 328, 776, 105, texto[estado]);
  image(flecha, 700, 388, 100, 56);
}

if (estado == 11) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 328, 776, 105, texto[estado]);
  image(flecha, 700, 388, 100, 56);
}

if (estado == 12) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 328, 776, 105, texto[estado]);
  image(flecha, 700, 388, 100, 56);
}

}

//funcion propia para generar botones

function boton (xBoton, yBoton,ancho, alto) {
  if(mouseX > xBoton - ancho / 2 && mouseX < xBoton + ancho / 2 && mouseY > yBoton - alto / 2 && mouseY < yBoton + alto / 2) {
  return true;
  }
  else {
  return false;
  }
} 

function generarBoton(posX, posY, ancho, alto, texto) {
  
  rectMode(CENTER);
  fill(205, 178, 130);
  rect(posX, posY, ancho, alto, alto);

  fill(45, 31, 22);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, posX, posY);
  
}

function generarTexto (posX, posY, ancho, alto, texto){

 rectMode (CORNER);
  fill (58,40,28,220);
 rect(posX, posY, ancho, alto);
 
 fill(245,240,224);
 textAlign (LEFT, TOP);
 textSize (14);
 text (texto, posX + 15, posY+15, ancho-30, alto-30);

}

function generarPregunta(posXcaja, posYcaja, anchoCaja, altoCaja, pregunta, opcionA, opcionB) {
  
  generarTexto(posXcaja, posYcaja, anchoCaja, altoCaja, pregunta);
  
  generarBoton( posXcaja + anchoCaja / 2, posYcaja + altoCaja / 2, anchoCaja - 20, altoCaja / 4, opcionA);
  
  generarBoton(posXcaja + anchoCaja / 2, posYcaja + altoCaja - altoCaja / 5, anchoCaja - 20, altoCaja / 4, opcionB);

}

function cambiarEstado (actual, siguiente, posXboton, posYboton, anchoBoton, altoBoton) {
 if (estado == actual && boton (posXboton, posYboton, anchoBoton, altoBoton)) {
 estado = siguiente;
 }

}



function mousePressed() {
  
  cambiarEstado(11, 12, 400, 406, 740, 30);
  
  cambiarEstado(8.1, 11, 400, 406, 740, 30);
  cambiarEstado(8.1, 9, 400, 370, 740, 30);
  
  cambiarEstado(8, 8.1,700, 395, 100, 56);
  
  cambiarEstado(7, 8,700, 395, 100, 56);

  cambiarEstado(6, 7,700, 395, 100, 56);
  
  cambiarEstado(5, 5.1, 750, 423, 100, 56);
  
  cambiarEstado(4, 5, 750, 423, 100, 56);

  cambiarEstado(3.1, 4, 400, 406, 740, 30);
  cambiarEstado(3.1, 6, 400, 370, 740, 30);

  cambiarEstado(3, 3.1, 740, 408, 100, 56);
  
  cambiarEstado(2, 3, 740, 408, 100, 56);
  
  cambiarEstado(1, 2, 740, 408, 100, 56);

  cambiarEstado(0, 1, 400, 410, 180, 45);

// Los ponemos al reves (primero el ultimo estado y al final el 0) para que cada clic avance una sola pantalla.
// Si van en orden (del 0 al final), un mismo clic puede pasar por varias de golpe.

print(mouseX, mouseY, estado);

}
