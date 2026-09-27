let estado;
let iniciofondo, titulo, pantalla1,pantalla2,pantalla3;
let texto = [];

function preload () {
 iniciofondo= loadImage ("data/iniciofondo.jpeg");
 titulo = loadImage ("data/titulocrema.png");
  pantalla1= loadImage ("data/pantalla1.jpeg");
  pantalla2= loadImage ("data/pantalla2.jpeg");
  pantalla3= loadImage ("data/pantalla3.jpeg");
 
}



function setup() {
 createCanvas (800,450)
 textFont('Georgia'); 
 estado=0
 texto[0]=""; // estado 0 no tiene texto
 texto[1]="Mario es una joven de 19 años que estaba enamorado de Delia, una muchacha que estaba de luto de sus últimos dos novios. Él no tenía tanta relación con su familia y andaba casi siempre solo. Ella, una chica fina y lenta en sus gestos. Vivía con sus padres, los Mañara. Una familia extraña y aislada, no eran de salir mucho de su casa."
 texto[2]= "Almagro era un barrio muy chusma: todo culpaban a Delia de asesinar a sus amados ya que era una chica rara. Mario creyó un tiempo que la gracia de Delia y sus vestidos apoyaban el odio de la gente. Se lo dijo a Madre Celeste: “La odian porque no es chusma como ustedes, como yo mismo”, y ni parpadeó cuando su madre hizo ademán de cruzarle la cara con una toalla. Después de eso fue la ruptura manifiesta; lo dejaban solo. Por lo que él decidió acercarse a Delia, iba a su casa y ella a veces salia, a veces la escuchaba reírse adentro, un poco malvadamente y sin darle esperanzas."
 texto[3]= "Luego de un tiempo, cuando los vecinos se olvidaron del caso, Mario seguía viendo a Delia dos veces por semana. Era ya verano y Delia quería salir a veces, iban juntos a las confiterías de Rivadavia o a sentarse en Plaza Once. Una tarde salieron a pasear y Mario notó una vez que un perro se apartaba cuando Delia iba a acariciarlo. Ella lo llamó y el perro vino manso, tal vez contento, hasta sus dedos. Según anécdotas de su familia ella tenía una extraña relación con los animales: de chica jugaba con arañas, las mariposas se acercaban a su pelo. Y una vez, Héctor le había regalado un conejo blanco, que falleció un día antes que él."

}
 

function draw() {

  if (estado==0) {
    image(iniciofondo,0,0,width,height);
    
    image(titulo, 360, 10,88.5,97.5);
    
    generarBoton(400, 410, 180, 45, "INICIAR")
  }


if  ( estado == 1 ){
  image(pantalla1,0,0,width,height);
  generarTexto(20, 30, 760, 80, texto[1]);

}

if ( estado == 2) {
 image(pantalla2,0,0,width,height);
 generarTexto(20, 310, 760, 131, texto[2]);


}

if ( estado == 3) {
 image(pantalla3,0,0,width,height);
 generarTexto(20, 310, 760, 131, texto[3]);


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
}

function keyPressed () {
  if (keyCode === ENTER){
  estado++; }


}
