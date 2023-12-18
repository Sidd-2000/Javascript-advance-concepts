let promise = new Promise(function(resolve, reject) {
    console.log('promise is pending')
    setTimeout(function(){
        console.log('I am promised and fulfilled')
        resolve(true)
    },5000)
})

let promiseRej = new Promise(function(resolve, reject) {
    console.log('promise is pending')
    setTimeout(function(){
        console.log('I am promised and fulfilled')
        reject(new Error('I am promised and fulfilled'))
    },5000)
})

// to get value
promise.then((value)=>{
    console.log(value)
})

// to catch errors
promiseRej.catch((value)=>{
    console.log(value)
},(err)=>{
    console.log(err)
})