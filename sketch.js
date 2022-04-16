var cat, mouse;
var catImg, mouseImg;
var cat1Img, cat2Img;
var mouse1Img, mouse2Img;
var bgImg;

function preload() {
    bgImg = loadImage("images/garden.png")
    catImg = loadAnimation("images/cat1.png");
    cat1Img = loadAnimation("images/cat2.png", "images/cat3.png");
    cat2Img = loadAnimation("images/cat4.png");

    mouseImg = loadAnimation("images/mouse1.png");
    mouse1Img = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse2Img = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("gatito", catImg);
    cat.scale = 0.2;

    mouse = createSprite(260,600);
    mouse.addAnimation("rata", mouseImg);
    mouse.scale = 0.15;

}

function draw() {
    background(bgImg);
    if(cat.x - mouse.x <(cat.width - mouse.width) /2){
        cat.velocityX = 0;
        cat.addAnimation("gatito2", cat2Img);
        cat.x = 300; 
        cat.scale = 0.2;
        cat.changeAnimation("gatito2");

        mouse.addAnimation("rata2", mouse2Img);
        mouse.scale = 0.15;
        mouse.changeAnimation("rata2");
    } 

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("caminando", cat1Img);
    cat.ChangeAnimation("caminando");

    mouse.addAnimation("quieto", mouse1Img);
    mouse.frameDelay = 25;
    mouse.changeAnimation("quieto");
    
  }


}
