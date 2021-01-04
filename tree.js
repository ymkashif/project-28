class tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.tree = bodies.rectangle(x,y,options);
        this.image = loadImage("plucking mangoes/tree.png")

    }
    display(){
        imageMode(CENTER);
        var pos1 = this.tree.position.x;
        var pos2 = this.tree.position.y;
         image(this.image,pos1,pos2,600,600);
    }
}