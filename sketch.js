var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j=75; j<=width; j = j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  for (var j=75; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  for (var j=50; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
    // create 5th row of plinko objects
  for (var j=35; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,475));
  }


}

function draw() {
  background(0);
 
  Engine.update(engine);
  ground.display();
 
       // display the divisions
       for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
      }

        //display the plinkos 
        for (var i = 0; i < plinkos.length; i++) {
          plinkos[i].display();   
        }
           
      //create the particles using frameCount
      if (frameCount%60 === 0) {
        // particles.push(new Particle(0,800),0)
        particles.push(new Particles(random(0,800),0));
      }
      for (var h = 0; h < particles.length; h++) {
        particles[h].display();
      }
}