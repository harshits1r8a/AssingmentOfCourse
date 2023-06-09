function convertToNo(str){
    try{
        let num = Number(str)

        if(isNaN(num)){
            throw new Error("Invalid number")
        }
        return num
    }catch(error){
        return error.message
    }
}

console.log(convertToNo("aa"));