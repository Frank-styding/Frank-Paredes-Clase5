class Rectangulo{
    constructor(alto,largo){
        this.alto = largo;
        this.alto = alto;
    }
    area(){
        return this.alto * this.largo;
    }
    perimetro(){
        return this.largo * 2 + this.alto * 2
    }
    imprimir(){
        console.log("area:" + this.area() + " - "+"perimetro:"+ this.perimetro())
    }
}

class Circulo{
    constructor(radio){
        this.radio = radio;
    }
    area(){
        return this.radio * this.radio *  Math.PI
    }
    perimetro(){
        return this.radio * 2 * Math.PI
    }
    imprimir(){
        console.log( "area:" + this.area() + " - " + "perimetro:" + this.perimetro())
    }
}

let circulo = new Circulo(5);
circulo.imprimir();

let rectangulo = new Rectangulo(200,300);
rectangulo.imprimir();