class persion{
    constructor(n = "Unknown", age=0){
        this.Name = n
        this.Age = age
    }

    getDetail(){
        return `Name : ${this.Name} , Age : ${this.Age}`
    }
}

let p1 = new persion("Harshit", 22)
let p2 = new persion()

console.log(p1.getDetail());
console.log(p2.getDetail());