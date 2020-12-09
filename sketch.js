var wall;
var car;




function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,50,20);
  //car.shapecolor(blue);
  
  speed = random(55,90)
  weight = random(500,1500);
  car.velocityX =10;


  wall = createSprite(683,197,35,100);

}

function draw() {
  background("blue"); 
  fill("black");
  //text(mouseX+","+mouseY,mouseX,mouseY);
   

 


 if(car.x-wall.x < (car.width+wall.width)/2)
 
 {
  


    car.velocityX = 0;
        car.x = wall.x-20;
        var damage = (0.5*weight*speed*speed)/2250;
        if(damage >180)
        {
          car.shapeColor = "red"
        }

        if(damage < 80)
        {
          car.shapeColor = "yellow"
        }
        if(damage < 180 && damage  > 80){
          car.shapeColor = "green"

        }

        

 }



  drawSprites();
}