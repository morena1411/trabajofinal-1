let estado;
let iniciofondo, fondoinicio, titulo,flecha;
let texto = [];
let pantalla = [];
let flechaX, flechaY;
let contadorFinal = 0;
let transicionY;
let opacidad;


function preload () {
 
 titulo = loadImage ("data/titulo.png");
 flecha = loadImage ("data/flecha.png");
 fondoinicio = loadImage ("data/fondoinicio.jpeg");
 fondofinal = loadImage ("data/fondofinal.jpeg");
 fin = loadImage("data/fin.png");
 
  for (let i = 1; i <= 15; i++) {
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
    
    generarBoton(400, 410, 180, 45, texto[estado], true)
  }


if  ( estado == 1 ){
  image(pantalla[estado],0,0,width,height);
  generarTexto(10, 352, 778, 88, texto[estado], true);
  ;

}

if ( estado == 2) {
 image(pantalla[estado],0,0,width,height);
 generarTexto(10, 330, 778, 110, texto[estado], true);


}

if (estado == 3) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(20, 300, 760, 130, texto[estado], true);
  
}

if (estado == 3.1) {
  image(pantalla[3], 0, 0, width, height);

  generarPregunta (20, 310, 760, 120, "¿A Mario le resulta sospechoso?","Le parece que son solo coincidencias e ignora", "Le resulta muy raro y quiere saber más")
}

if ( estado == 4) {
 image(pantalla[estado],0,0,width,height);
 
 generarTexto(10, 335, 780, 108, texto[estado], true);

  

}

if ( estado == 5) {
 image(pantalla[estado],0,0,width,height);
 
 generarTexto(10, 335, 780, 108, texto[estado], true);

 

}

if ( estado == 5.1) {
 image(pantalla[5],0,0,width,height);
  
  generarPregunta ( 10, 320, 780, 120, "Las pruebas apuntan a que Delia era culpable.","Su amor es mayor: lo ignora e intenta protegerla", "Ir a cuestionar a Delia.")


}

if (estado == 6) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(10, 345, 780, 95, texto[estado], true);
  
}

if (estado == 7) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 335, 776, 106, texto[estado], true);
 
}

if (estado == 8) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 312, 776, 126, texto[estado], true);
  
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
  generarTexto(12, 328, 776, 105, texto[estado], true);
  
}

if (estado == 11) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 328, 776, 105, texto[estado], true);
  
}

if (estado == 12) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 332, 776, 105, texto[estado], true);
  
}
 
if (estado == 12.1) {
  image(pantalla[12], 0, 0, width, height);
 generarPregunta ( 12, 320, 776, 120, "Le quiere preguntar sobre los anónimos a Delia.", "Pregunta", "No pregunta");

}

if (estado == 13) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 332, 776, 95, texto[estado], true);
  
}

if (estado == 14) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(12, 338, 776, 105, texto[estado], true);
  
}

 if (estado == 15) {
  image(pantalla[estado], 0, 0, width, height);
  generarTexto(10, 312, 780, 130, texto[estado], true);
  
}
 
 if (estado == fin) {
      background(0);
   
    contadorFinal++;

  // el fondo entra desde abajo
  transicionY = map(contadorFinal, 0, 100, height, 0);

  if (transicionY < 0) {
    transicionY = 0;
  }

  image(fondofinal, 0, transicionY, width, height);

  // cuando el fondo llega a su lugar, aparece FIN y los creditos
  if (contadorFinal >= 100) {
    opacidad = map(contadorFinal, 100, 200, 0, 255);

    if (opacidad > 255) {
      opacidad = 255;
    }

    tint(255, opacidad);
    image(fin, 310, 30);
    noTint();

    fill(245, 240, 224, opacidad);
    textAlign(CENTER, CENTER);
    textSize(20);

    text("Realizado por", 400, 210);
    text("Matilde Massa y Morena Ramos", 400, 245);

    textSize(16);
    text('Basado en el cuento "Circe"', 400, 295);
    text("de Julio Cortázar", 400, 325);
  }

  // El botón aparece cuando termina la animación
  if (contadorFinal >= 200) {
    generarBoton(400, 410, 180, 45, "VOLVER");
  }
}

} // cierre draw

//funcion propia para detetcar posicionamiento de relacion mouse/boton

function boton (xBoton, yBoton,ancho, alto) {
  if(mouseX > xBoton - ancho / 2 && // el mouse no se fue por la izquierda
  mouseX < xBoton + ancho / 2 && // el mouse no se fue por la derecha
  mouseY > yBoton - alto / 2 // el mouse no se fue por arriba
  && mouseY < yBoton + alto / 2) { // el mouse no se fue por abajo
  return true;
  }
  else {
  return false;
  }
} 

// funcion propia para generar "ilustracion" del boton

function generarBoton(posX, posY, ancho, alto, texto) {
  
  rectMode(CENTER);
  
  if (boton (posX, posY, ancho,alto, texto)) { // si el mouse esta adentro del boton
    fill (45, 31, 22); // fondo marron oscuro
  }
  else {
   fill(205, 178, 130); //fondo beige
 }
  
  rect(posX, posY, ancho, alto, alto); // mismo valor de alto para redondear las esquinas, asi uso otro parametro

  
  if (boton (posX, posY, ancho,alto, texto)) {
    fill (205, 178, 130);
  }
  else {
   fill(45, 31, 22);
 }
  textAlign(CENTER, CENTER);
  textSize(20);
  text(texto, posX, posY);
  
}

// funcion propia para generar "ilustracion" de texto

function generarTexto(posX, posY, ancho, alto, texto, conFlecha) {

  rectMode(CORNER);
  fill(58, 40, 28, 220);
  rect(posX, posY, ancho, alto);

  fill(245, 240, 224);
  textAlign(LEFT, TOP);
  textSize(14);
  text(texto, posX + 15, posY + 15, ancho - 30, alto - 30);

  if (conFlecha == true) {
   flechaX = posX + ancho - flecha.width - 5; // (posX + ancho de caja de texto) - ancho de flecha - margen
  flechaY = posY + alto - flecha.height - 5; // (posY + alto de caja de texto) - alto de flecha - margen

  image(flecha, flechaX, flechaY);
  
}
}


// funcion propia para generar pregunta y opciones 

function generarPregunta(posXcaja, posYcaja, anchoCaja, altoCaja, pregunta, opcionA, opcionB) {
  
  generarTexto(posXcaja, posYcaja, anchoCaja, altoCaja, pregunta, false); // false porque no tiene flecha para pasar a la proxima pantalla
  
  generarBoton( posXcaja + anchoCaja / 2, // desde donde empieza la caja, sumamos medio ancho para que el boton quede en el medio
  posYcaja + altoCaja / 2, // / desde donde empieza la caja en Y, sumamos medio alto para ubicar el boton
  anchoCaja - 20,  // ubica el boton a mitad de la altura de la caja
  altoCaja / 4,  // su altura es un cuarto de la altura de la caja
  opcionA); // texto de la primera opcion
  
  generarBoton(posXcaja + anchoCaja / 2,  posYcaja + altoCaja - altoCaja / 5, anchoCaja - 20, altoCaja / 4, opcionB);

}

// funcion propia para generar cambio de estado

function cambiarEstado (actual, siguiente, posXboton, posYboton, anchoBoton, altoBoton) {
 if (estado == actual && boton (posXboton, posYboton, anchoBoton, altoBoton)) {
 estado = siguiente;
 }

}

function cambiarEstadoFlecha(actual, siguiente) {
  
  cambiarEstado(actual, siguiente, 
  flechaX + flecha.width / 2, // centro X de la flecha
  flechaY + flecha.height / 2, // centro Y de la flecha
  flecha.width, // ancho flecha
  flecha.height); // alto flecha

}

function mousePressed() {
  
  cambiarEstado(0, 1, 400, 410, 180, 45);

  if (estado == fin && contadorFinal >= 200) {
    if (boton(400, 410, 180, 45)) {
      estado = 0;
      contadorFinal = 0; // reiniciamos el contador para que la animacion se repita al llegar otra vez al final
    }
  }

  

 cambiarEstado(fin, 0, 400, 410, 180, 45);
  
   cambiarEstadoFlecha(15, fin);
  
  cambiarEstadoFlecha(14, fin);
  
  cambiarEstadoFlecha(13, 14);
  
  cambiarEstado(12.1, 15, 400, 406, 740, 30);
  cambiarEstado(12.1, 13, 400, 370, 740, 30);
  
  cambiarEstadoFlecha(12, 12.1);
  
  cambiarEstadoFlecha(10, 13);
  
  cambiarEstadoFlecha(11, 12);
  
  cambiarEstado(9, 11, 400, 406, 740, 30);
  cambiarEstado(9, 10, 400, 370, 740, 30);
  
  cambiarEstado(8.1, 11, 400, 406, 740, 30);
  cambiarEstado(8.1, 9, 400, 370, 740, 30);
  
  cambiarEstadoFlecha(8, 8.1);
  
  cambiarEstadoFlecha(7, 8);

  cambiarEstadoFlecha(6, 7);
  
  cambiarEstado(5.1, 11, 400, 406, 740, 30);
  cambiarEstado(5.1, 7, 400, 370, 740, 30);
  
  cambiarEstadoFlecha(5, 5.1);
  
  cambiarEstadoFlecha(4, 5);

  cambiarEstado(3.1, 4, 400, 406, 740, 30);
  cambiarEstado(3.1, 6, 400, 370, 740, 30);

  cambiarEstadoFlecha(3, 3.1);
  
  cambiarEstadoFlecha(2, 3);
  
  cambiarEstadoFlecha(1, 2);

  

// los ponemos al reves (primero el ultimo estado y al final el 1) para que cada clic avance una sola pantalla
// si van en orden (del 1 al final), un mismo clic puede pasar por varias de golpe

print(mouseX, mouseY, estado);

}
