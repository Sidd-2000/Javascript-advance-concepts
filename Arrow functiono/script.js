let a = (name,age) =>{ console.log(name,age)}

a('siddharth',21)

const b = {
    name: 'siddharth',
    age:21,
    run:function(){
        setTimeout(() => {
            console.log(`siddharth ${this.name}`)
        }, 2000);
    
    }
}
b.run();