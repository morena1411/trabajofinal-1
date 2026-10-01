let estado;
let iniciofondo, fondoinicio, titulo,flecha;
let texto = [];
let pantalla = [];

function preload () {
 iniciofondo= loadImage ("data/iniciofondo.jpeg");
 titulo = loadImage ("data/titulo2.png");
 flecha = loadImage ("data/flecha.png");
 fondoinicio = loadImage ("data/fondoinicio.png");
 
  for (let i = 1; i <= 4; i++) {
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
    
    generarBoton(400, 410, 180, 45, texto[0])
  }


if  ( estado == 1 ){
  image(pantalla[estado],0,0,width,height);
  generarTexto(20, 30, 760, 80, texto[1]);
  image(flecha, 665, 367, 120, 68);

}

if ( estado == 2) {
 image(pantalla[estado],0,0,width,height);
 generarTexto(20, 310, 760, 131, texto[2]);
image(flecha, 665, 367, 120, 68);

}

if ( estado == 3) {
 image(pantalla[estado],0,0,width,height);
  
 generarTexto(20, 270, 760, 100, texto[3]);
 
  generarBoton(280, 400, 140, 30, "SÍ");
  generarBoton(520, 400, 140, 30, "NO");

}

if ( estado == 4) {
 image(pantalla[estado],0,0,width,height);
 
 generarTexto(10, 335, 780, 108, texto[4]);

  image(flecha, 700, 395, 100, 56);

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

function mousePressed() {
  if (estado == 0 && boton(400, 410, 180, 45)) {
    estado = 1;
  }
  
 if ( (estado == 1 || estado == 2) && boton(725, 401, 120, 68)) {
  estado++;
    }
  
  if (estado == 3 && boton(280, 400, 140, 30) ) {
    estado = 4;
  }
  
  
}

function keyPressed () {
  if (keyCode === ENTER){
  estado++; }


}
