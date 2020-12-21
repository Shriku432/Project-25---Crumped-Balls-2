class paper
  {

   constructor(x,y,r)
   {
     var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2 
     
     
     }

// change 
     this.image=loadImage("paper.png");
     this.x=x;
     this.y=y;
     this.r=r
     this.body=Bodies.circle(this.x,this.y,this.r,options)
     World.add(world,this.body);
   
   
   }
    display()
   {
   var paperpos=this.body.position;
   image(this.image,paperpos.x,paperpos.y,50,50)
   
   }



 }
