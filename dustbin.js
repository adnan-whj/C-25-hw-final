class binspec {
  constructor(x,y,width,height){
   var options={
      isStatic : true
   }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image=loadImage("dustbingreen.png");
   World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    stroke("pink");
    strokeWeight(4)
    fill("green");
    image(this.image,windowWidth-410,windowHeight-300,this.width+60,this.height+40);
  }

}