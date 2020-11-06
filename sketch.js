var thickness,wall;
var bullet,speed,weight; 




function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,100,30);
  wall= createSprite(1500,200,60,height/2);
  bullet.velocityX=speed;
 

  

  



    
}

function draw() {
  background(0); 

  if (hascollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
      wall.shapeColor=rgb(250,0,0);

    }
    if (damage<10){
      wall.shapeColor=rgb(0,225,0);
    }
  }

  


 



hascollided();
  drawSprites();

}  
function hascollided( lbullet , lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return  true
  }
  return   false;

} 