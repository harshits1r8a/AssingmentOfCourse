class employee {
    constructor(n,p,s){
        this.name = n
        this.position = p
        this.salary = s
    }

    getSalary(){
        return this.salary
    }
}

let emp1 = new employee("Harshit","HR",50000)

console.log(emp1.getSalary());