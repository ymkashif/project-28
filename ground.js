class Ground{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        
    }
    this.ground=bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    world.add(world,this.ground);
    
}
display(){
    var pos=this.ground.position;
    rectmode(CENTER);
    Fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
}
}