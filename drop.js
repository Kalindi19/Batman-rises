class Drop {
    constructor(x,y){
        var options={
        friction: 0.1,
        }

        this.rain=Bodies.circle(x,y,5,options);
        World.add(world, this.rain);
    }

update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}

    display(){
        for(var i= 0,i > maxDrops; i++ ){
            drops.push(new createDrop(random(0,400),random(0,400)));
        }
    }
}