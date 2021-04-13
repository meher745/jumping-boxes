var canvas;
var music;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1=createSprite(10,570,180,30);
    s1.shapeColor="yellow"
    s2=createSprite(200,570,180,30);
    s2.shapeColor="purple"
    s3=createSprite(400,570,180,30);
    s3.shapeColor="blue";
    s4=createSprite(600,570,230,30);
    s4.shapeColor="green";
    
    //create box sprite and give velocity
    box=createSprite(random(20,270),100,40,40);
    box.velocityX=5;
    box.velocityY=9;
    box.shapeColor="white";
    //box.setVelocity(5,-5);

}

function draw() {
    background(100);
    drawSprites();
    //create edgeSprite
    
    var edges=createEdgeSprites();
    box.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box)&&box.bounceOff(s1)){
        box.shapeColor="yellow"
        //box.collide(s1);
    }
    if(s2.isTouching(box)&&box.bounceOff(s2)){
        box.shapeColor="purple"
        //box.velocityX=-5;
    }
    if(s3.isTouching(box)&&box.bounceOff(s3)){
        box.shapeColor="blue"
        //music.play();
    }
    if(s4.isTouching(box)&&box.bounceOff(s4)){
        box.shapeColor="green"
    }
    
}
