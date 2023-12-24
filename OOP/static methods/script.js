class animal{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("walk " + animal.capitalize(this.name)); // we can do this by using statis functions
    }
    // capitalize(){
    //     console.log(`${this.name[0].toUpperCase()}`)
    // }
    static capitalize(name){
        return name[0].toUpperCase() + name.substring(1,name.length);
    }
}

let a = new animal('siddharth')
a.walk()
// a.capitalize()

console.log(a.capitalize('siddharth')); // this will not work