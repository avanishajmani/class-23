class Ground {
    constructor(x,y,width,height) {
        var groundoptions = {
            isStatic:true
          }
          this.ground = Matter.Bodies.rectangle(x,y,width,height,groundoptions)  
          Matter.World.add(myworld,this.ground);
         this.width = width
         this.height = height
    }
    display(){
        rectMode(CENTER)
        rect(this.ground.position.x , this.ground.position.y,this.width,this.height);
    }
}