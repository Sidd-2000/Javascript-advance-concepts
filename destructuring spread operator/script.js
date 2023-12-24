let arr = [2,5,4,6,3,6,2]
let [a, b,c,d,...arg] = arr
console.log(a, b, c,d)
console.log(arg);
let {e,f,g,...args} = {e:1,f:2,g:3,d:4}
// let  = set
console.log(e, f, g,args)

// spread operator

let arr1 = [3,6,3,6,7,34,8,9,9]
let obj = [...arr1]
console.log(obj)

function sum(v1,v2,v3){
    console.log(v1+v2+v3)
}

sum(...arr1)