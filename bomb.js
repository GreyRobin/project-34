class Bomb{
   constructor(x,y,w,h){
      let options = {
 restitution: 0.08
};

this.body = Bodies.rectangle(x,y,w,h,options)
this.w = w;
this.h = h;

World.add(world, this.body);
}
show() {
 var pos = this.body.position;
 var angle = this.body.angle
 push();
 translate(pos.x, pos.y);
 rotate(angle);
 ellipseMode(CENTER);
 fill("#8d6e63");
 ellipse(0, 0, this.w, this.h);
 pop();
}
}