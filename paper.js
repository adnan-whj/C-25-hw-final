/*class Paper{
    constructor(x,y,radius){
     var options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 1.2
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
    // this.image=loadImage("paper (1).png");
     World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     fill("white");
     circle(pos.x,pos.y,this.radius);
     //image(this.image,pos.x,pos.y,this.radius);
    }

}*/
class Paper{
    constructor(x,y,radius){
     var options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 1.2
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = radius;
     this.image=loadImage("paper (1).png");
     World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;

     fill("blue");
     image(this.image,pos.x,pos.y-100,this.radius);

    }

}