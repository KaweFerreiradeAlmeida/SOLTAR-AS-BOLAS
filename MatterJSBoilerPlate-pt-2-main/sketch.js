
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var circle_options={
	restitution:0.4
}
circulo=Bodies.circle(200,20,30,circle_options)
	Engine.run(engine);
  rentacle=Bodies.rectangle(250,200,150,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(circulo.position.x,circulo.position.y,30)
  drawSprites();
 rect(rentacle.position.x,rentacle.position.y,150,20)
}



