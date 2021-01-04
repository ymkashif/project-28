class stone{
    constuctor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.3

        }

        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("plucking_mangoes/stone.png");
        this.body=bodies.circle(x,y,this.r,options);
        world.add(world,this.body);

    }
    display()
    {
        var stonePos=this.body.position;
        Push()
        Translate(stonePos.x,stonePos.y);
        rotate(this.body.angle)
        Fill(255,o,255)
        image(this.image,0,0,this.r*2,this.r*2)
        Pop()
        
    }
}