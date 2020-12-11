class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
       // assign colors to the particle randomly
       
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke("green");
       // fill color for the particle


        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};