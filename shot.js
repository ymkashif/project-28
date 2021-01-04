class shot{
    constructor(bodyA,bodyB){
        var option={
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.03,
            length: 3,
        }
        this.pointB=pointB;
        this.shot=constraint.create(options);
        world.add(world,this.shot);
    }
    attach(body){
        this.shot.bodyA=body;

    }
    fly(){
        this.shot.bodyA=body;

    }
    display(){
        if(this.shot.bodyA){
            var pointA=this.shot.bodyA.position;
            var pointB=this.pointB;
            //strokeWeight(4);
            //line(pointA.x,pointA.y,pointB.x,pointB.y);
        
        }
    }
}