var array = [1, 2, 3, 4];

function calculateSum(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0); // Initial value is 0
}

function calculateProduct(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        return accumulator * currentValue;
    }, 1); // Initial value is 1
}

console.log(calculateSum(array));      
console.log(calculateProduct(array));  
