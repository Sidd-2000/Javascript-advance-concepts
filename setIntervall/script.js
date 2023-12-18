let a = setTimeout(() =>{
    alert('battry about to die');
},3000)

// clearTimeout(a);// clearTimeout for the setTimeout FUNCTION

const sum = (a,b) =>{ console.log('yes i am running',a + b)}

setTimeout(sum(3,5),3000);

setInterval(sum(5,6),5000)