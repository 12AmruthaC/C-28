class Rope{
    constructor(bA, pB){
        
        var options={
            bodyA : bA,
            pointB: pB,
            stiffness: 0.004,
            length:20
        }
        this.chain = Matter.Constraint.create(options)
        this.pointB = pB
        World.add(world,this.chain)
    }
    fly(){
        this.chain.bodyA = null
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position//accessing the body A's x&y
        var pointB = this.pointB

        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }


}