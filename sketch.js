var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions=[];

var score=0;
var turn=0;

var gamestate="play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  textSize(35);
  text("SCORE : " +score,20,40);

  if(turn>=5){
    gamestate="end";
    textSize(60);
    text("GAME OVER!", 150,250);
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
   */
   /*
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

if(particle!=null){
  particle.display();
  if(particle.body.position.y>660){
    
    if(particle.body.position.x<300){
      score=score+500;
      particle=null;
    }
    else if(particle.body.position.x<550){
      score=score+200;
      particle=null;
    }
    else if(particle.body.position.x<650 && particle.body.position.x>550){
      score=score+100;
      particle=null;
    }
  }
}
}

function mousePressed(){
  if(gamestate!=="end"){
    turn++;
    particle=new Particle(mouseX,10,10);
  }
}