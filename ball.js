class paper {
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.2,
            friction : 0.4,
            density:0.8
        }
        this.image = loadImage("sprites25/paper.png");
        this.scale = 1.0;
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.visibility = 255;
        World.add(world,this.body);
    }
    display(){
        //if(this.body.x>510&&this.body.y>538){
          //  World.remove(world,this.body);
            //push ();
            //tint(255,this.visibility-5);
            //pop ();
       // }
        //var pos = this.body.position;
     
        //ellipseMODE(CENTER);
        //fill ("pink");
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

    }
}