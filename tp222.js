let estado;
let iniciofondo, titulo, pantalla1,pantalla2,pantalla3;
let texto = [];
let pantalla = [];

function preload () {
 iniciofondo= loadImage ("data/iniciofondo.jpeg");
 titulo = loadImage ("data/titulocrema.png");

  for (let i = 1; i <= 4; i++) {
    pantalla[i] = loadImage("data/pantalla" + i + ".jpeg");
  }
}



function setup() {
 createCanvas (800,450)
 textFont('Georgia'); 
 estado=0
 texto[0]=""; // estado 0 no tiene texto
 texto[1]="Mario es una joven de 19 años que estaba enamorado de Delia, una muchacha que estaba de luto de sus últimos dos novios. Él no tenía tanta relación con su familia y andaba casi siempre solo. Ella, una chica fina y lenta en sus gestos. Vivía con sus padres, los Mañara. Una familia extraña y aislada, no eran de salir mucho de su casa."
 texto[2]= "Almagro era un barrio muy chusma: todo culpaban a Delia de asesinar a sus amados ya que era una chica rara. Mario creyó un tiempo que la gracia de Delia y sus vestidos apoyaban el odio de la gente. Se lo dijo a Madre Celeste: “La odian porque no es chusma como ustedes, como yo mismo”, y ni parpadeó cuando su madre hizo ademán de cruzarle la cara con una toalla. Después de eso fue la ruptura manifiesta; lo dejaban solo. Por lo que él decidió acercarse a Delia, iba a su casa y ella a veces salia, a veces la escuchaba reírse adentro, un poco malvadamente y sin darle esperanzas."
 texto[3]= "Con el tiempo, Mario notó que la relación de Delia con los animales era extraña: de chica jugaba con arañas y las mariposas se le acercaban al pelo. Una vez un perro se apartó de ella, pero luego vino manso hasta sus dedos. Y un conejo blanco que le había regalado Héctor falleció un día antes que él."

}
 

function draw() {

  if (estado==0) {
    image(iniciofondo,0,0,width,height);
    
    image(titulo, 360, 10,88.5,97.5);
    
    generarBoton(400, 410, 180, 45, "INICIAR")
  }


if  ( estado == 1 ){
  image(pantalla[estado],0,0,width,height);
  generarTexto(20, 30, 760, 80, texto[1]);

}

if ( estado == 2) {
 image(pantalla[estado],0,0,width,height);
 generarTexto(20, 310, 760, 131, texto[2]);


}

if ( estado == 3) {
 image(pantalla[estado],0,0,width,height);
  
 generarTexto(20, 290, 760, 100, texto[3]);

textStyle(BOLD);
textAlign(CENTER, TOP);
textSize(17);
fill(245, 240, 224);
text("¿A Mario le resulta sospechoso?", 400, 360);
textStyle(NORMAL);

generarBoton(280, 410, 140, 32, "SÍ");
generarBoton(520, 410, 140, 32, "NO");

}

if ( estado == 4) {
 image(pantalla[estado],0,0,width,height);
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

function generarBoton(posX, posY, ancho, alto, texto) {
  rectMode(CENTER);
  fill(58, 40, 28);
  rect(posX, posY, ancho, alto, alto);

  fill(245, 240, 224,220);
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
  if (estado == 0 && boton(400, 410, 90)) {
    estado = 1;
  }
  
  if (estado == 3 && boton(280, 410, 64) ) {
    estado = 4;
  }
}

function keyPressed () {
  if (keyCode === ENTER){
  estado++; }


}
