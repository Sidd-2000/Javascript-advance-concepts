let a = () =>{
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(786)
        }, 3000);
})
}

let f = async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
}

// f(); or do this

(async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})();