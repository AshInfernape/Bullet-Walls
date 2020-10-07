var bullet;
var wall ,  thickness;
var speed , weight;

function setup() {
  createCanvas(1600,1600);

  bullet = createSprite(30, 200, 50, 50);
  bullet.shapeColor = "white";

  wall =  createSprite(1300, 200, thickness, 800);
  wall.shapeColor = "white";

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet.velocityX = speed;
}

function draw() {
  background("black")
  //hasCollided(Lbullet , Lwall);
  if(hasCollided(bullet , wall))
  {
   bullet.velocityX = 0;
   var damage = 0.5 * speed * weight * speed/(thickness *thickness *thickness);
  
   if(damage<10)
   {
   wall.shapeColor = "green";
   }

   if(damage>10)
   {
     wall.shapeColor="red";
   }
  }
  drawSprites();
}

function hasCollided(Lbullet ,Lwall ){
bulletRightEdge = Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x ;

if(bulletRightEdge>=wallLeftEdge)
{
   return true
}
return false;

  }
