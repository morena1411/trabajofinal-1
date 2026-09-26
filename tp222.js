let estado;
let iniciofondo, titulo, pantalla1;

function preload () {
 iniciofondo= loadImage ("data/iniciofondo.jpeg");
 titulo = loadImage ("data/titulocrema.png");
  pantalla1= loadImage ("data/pantalla1.jpeg");
}



function setup() {
createCanvas (800,450)
 textFont('Georgia'); 
estado=0

}
 

function draw() {

  if (estado==0) {
    image(iniciofondo,0,0,width,height);
    
    image(titulo, 360, 10,88.5,97.5);
    
    rectMode(CENTER);
    fill(26, 20, 16, 200);
    stroke(193, 160, 118);
    strokeWeight(2);
    rect(400, 410, 180, 45, 8);

    noStroke();
    fill(245, 240, 224);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("INICIAR", 400, 410);
  }


if  ( estado == 1 ){
  image(pantalla1,0,0,width,height);

}

}
//funcion propia para generar botones

function boton (xBoton, yBoton, radio) {
  if(dist(mouseX,mouseY,xBoton, yBoton) < radio) {
  return true;
  }
  else {
  return false;
  }
} 

function mousePressed() {
  if (estado == 0 && boton(400, 410, 90)) {
    estado = 1;
  }
}
