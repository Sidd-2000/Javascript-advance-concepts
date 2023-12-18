// map function
let arr = [45,23,21]
let a = arr.map((value)=>{
    console.log(value)
    return value + 1;
})
// it gives [46, 24, 22]
// map makes new array with existing array
let b = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + 1;
})
console.log(b)

/* 45 0 (3) [45, 23, 21]
   23 1 (3) [45, 23, 21]
   21 2 (3) [45, 23, 21]
*/

// filter function
let arr1 = [45,23,21]
var c = arr1.filter((x) => {
        return x = 21;
})
console.log(c)

// output
// [45, 23]

// reduce function
let arr2 = [45,23,21]
let d = arr2.reduce((x, y) =>{
    return x + y;
})
console.log(d)

// we can also do this by that way
let func = (x ,y) =>{
    return x + y;
}
let e = arr2.reduce(func)
console.log(e)
// output
// 89