var car , wall
var speed,weight
function setup() {
  createCanvas(1600,400);
  car=createSprite(200, 200, 50, 50);
  wall=createSprite(1200,200,60,100)

  

  speed = random(25,31)
  weight = random(400,1500)

  car.velocityX=speed
}

function draw() {
  background("black")

  if(car.isTouching(wall) ) 
    {car.velocityX=0
    
    var deformation = 0.5 * weight * speed * speed / 22509 ;
    
    if (deformation>180){
    car.shapeColor="red"
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
    } 
    if (deformation<100){
      car.shapeColor="green"
    }
  }
    drawSprites();
} 