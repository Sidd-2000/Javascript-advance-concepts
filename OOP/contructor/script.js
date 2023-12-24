class railway {
    Submit(){
        console.log("submit")
    }
    cancel(){
        console.log("cancel")
    }
    constructor(){
        console.log("constructor called")
    }
    
}

let a = new railway();
let b= new railway()

class railway1 {
    Submit(){
        console.log("submit"+this.address)
    }
    cancel(){
        console.log("cancel"+this.name)
    }
    constructor(name, address){
        console.log("constructor called name = " + name+ " address = " + address)
        this.name = name;
        this.address = address;
    }
    
}

let a1 = new railway1('siddharth','kalwa');
let b1= new railway1('hitesh','bhandup')
a1.Submit()