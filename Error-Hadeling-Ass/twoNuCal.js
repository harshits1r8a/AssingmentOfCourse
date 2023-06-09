class calculator{
    constructor(a,b){
        this.n1 = a
        this.n2 = b
    }
    static add(a,b){
        return a+b
    }
    sum(){
        return this.n1+this.n2
    }
}

let obj = new calculator(3,4)
console.log(obj.sum());
console.log(calculator.add(3,5));