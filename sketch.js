var garden, gardenImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;

function preload() {
    // load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup() {
    createCanvas(1000, 600);
    //create tom and jerry sprites here
    garden = createSprite (300, 300, 300, 300);
    garden.addImage("garden", gardenImg);

    cat = createSprite(500, 470)
    cat.addImage("cat", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(100, 500)
    mouse.addImage("mouse", mouseImg1);
    mouse.scale = 0.08;
}

function draw() {

    background(255);
    // Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.addAnimation("cat sitting", catImg3);
        cat.changeAnimation("cat sitting");
        cat.velocityX = 0;
        mouse.addAnimation("mouse standing", mouseImg3);
        mouse.changeAnimation("mouse standing");
        mouse.scale = 0.09;
    }

    drawSprites();
}


function keyPressed() {

  // For moving and changing animation write code here

if (keyCode === LEFT_ARROW) {
    cat.velocityX = -3.5;
    cat.addAnimation("cat running", catImg2);
    cat.changeAnimation("cat running");
    cat.scale = 0.18;
    mouse.addAnimation("mouse teasing", mouseImg2);
    mouse.changeAnimation("mouse teasing");
} 

}
