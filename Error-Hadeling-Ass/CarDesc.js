let carDescription = class carDet{
    constructor(y,c,m){
        this.year = y
        this.company = c
        this.model = m
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}.`
    }
}
let c1 = new carDescription(2022,"Skoda","Rapid")

console.log(c1.getDescription());