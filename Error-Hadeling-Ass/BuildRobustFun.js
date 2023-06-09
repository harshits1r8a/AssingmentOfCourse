

function getPerson(obj){
    try{
        if( typeof obj !== "object" || obj === null || !("name" in obj) || !("age" in obj)){
            throw new Error("Invalid Parameter type.")
        }
        return `Name : ${obj.name} , Age : ${obj.age}`
    }catch(error){
        return error.message
    }
}


console.log(getPerson({name:"arpit"}));
console.log(getPerson({name:"arpit",age : 22}));
console.log(getPerson(["Harshit", 22]));
console.log(getPerson({}));

