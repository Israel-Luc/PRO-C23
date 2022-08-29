const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

var plane;
var block1, block2;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;
var rotator1;
var rotator2;
var rotator3;
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var plane_options={
	isStatic: true
}

	plane = Bodies.rectangle(500,700,1200, 20, plane_options);
	World.add(world,plane); 

	Engine.run(engine);
	
	var block1_options={
		isStatic: true
	}
	var block2_options={
		isStatic: true
	}

	block1 = Bodies.rectangle(100, 400, 150, 20, block1_options);
  World.add(world,block1);
	block2 = Bodies.rectangle(400, 400, 150, 20, block2_options);
  World.add(world,block2);

	var rotator1_options={
		isStatic: true
	}
	var rotator2_options={
		isStatic: true
	}
	var rotator3_options={
		isStatic: true
	}

	rotator1 = Bodies.rectangle(250,200,150,20, rotator1_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,150,20, rotator2_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(250,200,150,20, rotator3_options);
	World.add(world,rotator3);

	var particle_options = {
	restitucion:0.4,
	friction:0.02
	}

	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle5);
}


function draw() {
	background("lightgreen");
  Engine.update(engine);
  
	fill("red");
	rectMode(CENTER);
  ellipseMode(RADIUS);

	Matter.Body.rotate(rotator1,angle1);
	push();
	translate(rotator1.position.x, rotator1.position.y);
	rotate(angle1);
	rect(0,0, 150,20);	
	pop();
	angle1 +=5;

	Matter.Body.rotate(rotator2,angle2);
	push();
	translate(rotator2.position.x, rotator2.position.y);
	rotate(angle2);
	rect(0,0, 150,20);	
	pop();
	angle2 +=7;

	Matter.Body.rotate(rotator3,angle3);
	push();
	translate(rotator3.position.x, rotator3.position.y);
	rotate(angle3);
	rect(0,0, 150,20);	
	pop();
	angle3 +=9;

	rect(plane.position.x, plane.position.y, 1200, 20);

	rect(block1.position.x, block1.position.y, 150, 20);
	rect(block2.position.x, block2.position.y, 150, 20);

	ellipse(particle1.position.x, particle1.position.y,20);
	ellipse(particle2.position.x, particle2.position.y,20);
	ellipse(particle3.position.x, particle3.position.y,20);
	ellipse(particle4.position.x, particle4.position.y,20);
	ellipse(particle5.position.x, particle5.position.y,20);

  drawSprites();
}