async function siddharth(){
    let delhiweather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('5 deg');
        },1000)
    });
    
    let mumbaiweather = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve('21 deg');
        },5000)
    });

    console.log('fetching delhiweather')
let delw = await delhiweather
console.log('fetched delhiweather',delw)
console.log('fetching mumbaiweathe');
let mumw = await mumbaiweather
console.log('fetched mumbaiweathe',mumw);
    
}

// siddharth.then(() =>{
//     alert('siddharth')
// })  gives .then is not function
let a = siddharth()
a.then((value) =>{console.log('siddharth',value)})