var tom , jerry , house , both



function setup() {
  createCanvas(400, 400);
  tom.loadImage("download(14).jpg");
  jerry.loadImage("download(1).jpg");
  house.loadImage("download(15).jpg");
  both.loadImage("download(5).jpg");


  tom = createSprite(400, 200, 50, 50);
  jerry = createSprite(200, 100, 30, 30);
  

}

function draw() {
  background("house");
  tom.x=World.mouseX;
  tom.y=World.mouseY; 
  drawSprites();
  if(tom.x-jerry.x<tom.width/2+jerry.width/2 && jerry.x-tom.x<tom.width/2+jerry.width/2 && tom.y-jerry.y<tom.height/2+jerry.height/2 && jerry.y-tom.y<tom.height/2+jerry.height/2){
    tom.addAnimation="tom";
    jerry.addAnimation="jerry";
  }
  else 
 {
   tom.addAnimation="both";
   jerry.addAnimation="both";
 }
}

