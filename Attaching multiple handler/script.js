let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert('Please enter');
        resolve(1);
    },2000)
})

p1.then(()=>{
    console.log('congratulaiton');
})

p1.then(()=>{
    console.log('resovle again');
})