class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.04,length:15
        }
    
        this.chain=Constraint.create(options);
        World.add(world,this.chain)

    }
    display(){

        var boA= this.chain.bodyA.position;
        var boB=this.chain.bodyB.position;

        strokeWeight(4);
        line(boA.x,boA.y,boB.x,boB.y);
    }


}