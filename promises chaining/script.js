// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//        console.log('Resolved promise')
//        resolve(56) 
//     }, 2000);
// })

// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) =>{
//        setTimeout(() => { resolve("promise 2")},2000)
//     })
//     return p2
// }).then((value) =>{
//     console.log('We are done')
//     return 2
// }).then((value) =>{
//     console.log('now we are pakka done')
// })

const loadscript = (src) =>{
    return new Promise((resolve, reject) =>{
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src
    document.body.appendChild(script)
    script.onload = (script) =>{
        resolve("Script loaded")
    }
    script.onerror = () =>  { reject(0) }
});
};

let p1 = new Promise((resolve, reject) =>{
    loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
})

p1.then(() =>{
    console.log("Your script is loaded");
})