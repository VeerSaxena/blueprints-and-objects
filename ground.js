class Ground{
   
    // properties
    constructor(x,y,width,height){
         //special member function of class - to store properties
         var options ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,options);
        //height and width are not a property of matter body
        this.width = width; // catched width(object) in this.width
        this.height = height;
        World.add(world,this.body);
    }
    
// function/methods
 display(){

    fill ("orange");
    stroke ("orange");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y,this.width,this.height);  
 }

}