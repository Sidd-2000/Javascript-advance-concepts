console.log(a)
var a = 5; // hoisted
// const a = 5; // error
// let a = 5; // error

a1()    // function cannot be hoisted
const a1 = () => {
    console.log('hello world')
}
// a1()