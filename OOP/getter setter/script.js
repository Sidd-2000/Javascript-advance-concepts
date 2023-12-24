class animal{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log(this.name + " can walk"); // we can do this by using statis functions
    }
    get name(){
        return this._name;
    }
    set name(newname){
        this._name = newname;
    }
   
}
class dog extends animal{

}
let a = new animal('siddharth')
a.walk()
a.name = 'hitesh'
console.log(a.walk()); // 'hitesh' 
let b = new dog();
console.log(b instanceof animal)
console.log(a instanceof animal)