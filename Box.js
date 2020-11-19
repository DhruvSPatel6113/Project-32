class Box {
  constructor(x, y){
    
    var options = {

      isStatic:false

    }

    this.body = Bodies.rectangle(x , y , 20 , 20 , options);

    World.add(world , this.body);

    this.width=20;
    this.height=20;

    this.visibility=255;

  }

  display(){

    var pos=this.body.position;

    if(this.body.speed<3){
    rectMode(CENTER);
    rect(pos.x , pos.y , this.width , this.height);

    }

    else{

      World.remove(world , this.body);

      push();

      this.visibility = this.visibility - 5;

      tint(255 , this.visibility);

      pop();

    }

  }

  score(){

    if(this.visibility<0 && this.visibility> -105){

      score++

    }

  }

};
