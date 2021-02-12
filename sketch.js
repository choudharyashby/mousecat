var cat,catImg2,catImg3,catImg;
var mouse,mouse_running;
var jungle,jungleImg;
 
function preload() {
    //load the images here
    mouse_running = loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    catImg = loadImage("tomOne.png");
    catImg2 = loadAnimation("tomTwo.png");
    catImg3 = loadAnimation("tomThree.png");
    jungle = loadImage("garden.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    jungle = createSprite(400,400);
    jungle.addImage(jungleImg);

    cat = createSprite(200,200,50,50);
    cat.addImage(catImg);
    
    mouse = createSprite(60,362,100,100);
    mouse.addAnimation("running",mouse_running); 

    }                                

function draw() {

    background("white");

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/width)
    {
       cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
        cat.velocityX = 0;
    }

    keyPressed();
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
    }
    text(mouseX + ','+ mouseY,10,45);
}