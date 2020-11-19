class Polygon{

    constructor(x,y,radius){

        this.body = Bodies.circle(x , y , radius);

        World.add(world , this.body);

        this.image = loadImage("Hexagon.png");
 
        this.radius = radius;

    }

    display(){

        imageMode(CENTER);
        image(this.image , this.body.position.x , this.body.position.y , 40 , 25);

    }

}