class Roof {

    constructor(x,y,width,height) {
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true})
        this.width = width
        this.height = height
        this.body = Bodies.circle(x,y,25,options)
        World.add(world, this.body)

    }

    display() {
        push()
        ellipseMode(RADIUS)
        fill(128,128,128)
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height,25)
        pop()
    }
}