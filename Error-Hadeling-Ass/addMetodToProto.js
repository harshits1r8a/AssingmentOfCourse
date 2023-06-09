class Student{
    constructor(n){
        this.name = n
    }
}

Student.prototype.printDetail = function() {console.log(`Hellow my name is ${this.name}`);}

// creating object

let std = new Student("Subham")
std.printDetail()