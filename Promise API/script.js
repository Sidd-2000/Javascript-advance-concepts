let p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("value 1")
    },1000)
});

// let p2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("value 2")
//     },2000)
// });
let p2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(new Error("Here is some error"))
    },2000)
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("value 3")
    },3000)
});

// p1.then((value) => { console.log(value) });
// p2.then((value) => { console.log(value) });
// p3.then((value) => { console.log(value) });


// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((value) => {
//     console.log(value);
// });

// // to run if any one is available

// let promises_setted = Promise.allSettled([p1, p2, p3])
// console.log(promises_setted)

// fisr promise 
// let promise_race = Promise.race([p1,p2,p3])
// console.log(promise_race)

// wait to resolve any one
let promise_any = Promise.any([p1,p2,p3])
console.log(promise_any)