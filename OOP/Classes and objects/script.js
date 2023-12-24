class RailwayForm{
    submit(){
        alert(this.name + 'form submited');
    }
    cancel(){
        alert(this.name + ':"This form is cancelled"');
    }
    fill(name){
        this.name = name;
    }
}

let a = new RailwayForm()
let b = new RailwayForm()

a.fill('rohan')
console.log(a.submit())