function sumFunction(num1){ 
    return function(num2){
        return num1+num2
    }
  }

console.log(sumFunction(2)(345));