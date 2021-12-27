class Boat {
    constructor(x, y, width, height,boatPos){
        //Opciones del motor físico para el bote
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
    
    //Asignar cuerpo de la librería Matter
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("assets/boat.png");
    //Variable que guarda la posición del bote 
    this.boatPosition = boatPos;
    //Abregar cuerpo al mundo 
    World.add(world, this.body);
    }
    //Función para drale velocidad a la animación
    
    //Función para remover el barco 
    remove(index){
        //Función para ejecutar código después de 2 seg
        setTimeout( () => {
        //Remover cuerpo del barco del mundo 
        Matter.World.remove(world,boats[index].body);
        //Borrar barco de la matriz 
        delete boats[index];
        }, 2000 /*Tiempo en milisegundos*/ );
    }
    //Función para mostrar cuerpo 
    display(){
        var pos = this.body.position;
        

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, this.boatPosition, this.width,this.height);
        pop();
    }
}
