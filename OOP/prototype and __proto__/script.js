let a = {
    'name1': 'siddharth',
    'languages':'sfsfsfsfsf',
}

console.log(a)

let p = {
    run:() => {
        alert('siddharth')
    }
}
// a.run() // gives error message
// p.run(); 
p.__proto__ = {
    'name': 'golu'
}
console.log(p.name)
console.log(a.name1)
console.log(p.name1) // it gives undefined
p.__proto__ = a
console.log(p.name1)


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
Person.prototype.nationality = "English";
let b = new Person("John", "Doe", 50, "blue")
console.log(b.nationality)  // English