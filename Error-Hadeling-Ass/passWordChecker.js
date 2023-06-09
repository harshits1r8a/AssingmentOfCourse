class user{
    constructor(u,p){
        this.userName = u
        this.password = p
    }

    // Getter 
    get getPassword(){
        return "*".repeat(this.password.length)
    }

    // setter
    set setPassword(pw){
        try{
            if(pw.length >= 8 && /[0-9]/.test(pw) && /[A-Z]/.test(pw)){
                this.password = pw
            }else{
                throw new Error("invalid password, Password should at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.")
            }
        }catch(error){
            console.log(error.message)
        }
    }
}

let user1 = new user("harshit","h8a1R")
console.log(user1.getPassword);

user1.setPassword = "Big1"
// console.log(user1.password);

console.log("_________________________");


let user2 = new user("Arpit","h8a1345R")
console.log(user1.getPassword);

user1.setPassword = "Big12345fg"
console.log(user1.password);