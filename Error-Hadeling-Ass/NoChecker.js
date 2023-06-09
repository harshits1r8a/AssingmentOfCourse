function numberChecker(arr){
    return (n)=>{
        return arr.includes(n)
    }
}

const arr_num = [1,2,5,3,7,9,12]
const checkNum  = numberChecker(arr_num)

console.log(checkNum(2));
console.log(checkNum(23));
console.log(checkNum(5));
