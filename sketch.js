var myengine
var myworld
var ground
var ball


function setup() {
  createCanvas(800,400);
 myengine = Matter.Engine.create();
 myworld = myengine.world;

 ground = new Ground(400,370,800,30)
 ball = new Box(230,100,50,50)
 ball1= new Box(200,200,50,50)
}


function draw() {
  background("blue")

  Matter.Engine.update(myengine)

  console.log(ground);
  

  
  
ground.display()
ball.display()
ball1.display()

//ground1.display()


  
}