let promise = new Promise(function(resolve, reject) {
    resolve(56)
})
console.log('hello world')
setTimeout(function() {
    console.log('hello world in 2 seconds');
},2000)
console.log('hello world three')
console.log(promise)


// fetch google.com home page >> google.com home page done 
// fetch data api
// fetch picture from the server
// print downloadig