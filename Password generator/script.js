class Password{
    constructor(){
        console.log("Welcome to password generator!");
        this.pass = "";
    }
    generatePassword(len){
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let number = "1234567890"
        let special = "!@#$%&'()*+,-./"
        if(len < 3){
            console.log("Your password must be at least 3 characters long")
        }
        else{
            let i = 0;
            while(i < len){
                this.pass += chars[Math.floor(Math.random(chars.length) * chars.length)];
                this.pass += number[Math.floor(Math.random(number.length) * number.length)];
                this.pass += special[Math.floor(Math.random(special.length) * special.length)];
                i+=3;
            }
        }
        return  this.pass;
    }
}
let p = new Password();
console.log(p.generatePassword(7))