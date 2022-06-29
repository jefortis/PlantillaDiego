var canvas;
var erojo,erojoAnimation;
var eazul,eazulAnimation;
var enemigo,enemigosGroup;
var nave;
var naveImg;
var fondo,fondoImg;
var bala,balaImg;
var score = 0;


function preload(){
  
  erojoAnimation= loadAnimation("./image/enemigo_rojo.png","./image/enemigo_rojo_der_abajo.png","./image/enemigo_rojo_izq_abajo.png");
  eazulAnimation= loadAnimation("./image/enemigo_azul.png","./image/enemigo_azul_der_abajo.png","./image/enemigo_azul_izq_abajo.png");
  naveImg=loadImage("./image/space.png");
  fondoImg=loadImage("./image/fondo.jpg");
  balaImg=loadImage("./image/bala.png");
  
}

function setup() {
  //canvas = createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(1510,750);
 

  for (var c = 0; c<8; c++) {
    enemigo= createSprite(250+150*c,50,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5

  

    enemigo= createSprite(250+150*c,150,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5

    enemigo= createSprite(250+150*c,250,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5

    enemigo= createSprite(250+150*c,350,150,125);
    enemigo.addAnimation("eazul",eazulAnimation);
    enemigo.scale=2.5
   
  }
  

  nave=createSprite(750,600,100,100);
  nave.addImage("nave1",naveImg);
  nave.scale=0.2;
  
  bala=createSprite(750,500,50,50);
 // bala.addImage("bala",balaImg);
  bala.scale=.000001;
  
 enemigosGroup = new Group();
 enemigosGroup.add(enemigo);
  
}

function draw() {
  background(fondoImg);
  textSize(20);
  text("Puntuacion:"+ score,50,50);
 




  if (keyDown("space")) {
    createbala();  
  }

 if (keyIsDown(LEFT_ARROW)) 
   {
      nave.x=nave.x -8;
   }
 
   if (keyIsDown(RIGHT_ARROW)) 
   {
      nave.x=nave.x +8;
   }

  if(enemigo.isTouching(bala)){
enemigosGroup.destroyEach();
  score = score +1;


}
  drawSprites();
}
function createbala() {
  var bala= createSprite(750,600,100,100);
  bala.addImage(balaImg);
  bala.x =nave.x;
  bala.velocityY = -3;
bala.scale = 0.5;
}
