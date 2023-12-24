class animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " " + "is running with color " + this.color)
    }

    shout(){
        console.log(this.name + " " + "is looking " + this.color)
    }
}
class dog extends animal{
    bark(){
        console.log(this.name + " " + "barkign")
    }
    run(){
        super.run() // paritally override
        console.log(this.name + " " + "is not running"); // overridden
    }
}

let a = new animal('bruno','brown');
let b = new dog('buky','red')

b.bark();
b.run()