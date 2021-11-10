
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bomb
var ground
var button


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  bomb = new Bomb(200,10,80,80)
  ground = new Ground(200,350,width,height/3)
  button = createButton("click to shoot")
  button.position(350,200)
  button.class("button")
  button.mouseClicked(shoot)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  bomb.show()
  ground.show()}

function shoot(){
  Matter.Body.applyForce(bomb.body,{x:0,y:0},{x:-1,y:0})
}