var values = [1, 60, 34, 30, 20, 5];

function filterLessThan20(arr) {
    return arr.filter(function(value) {
        return value >= 20;
    });
}

console.log(filterLessThan20(values)); // Output: [60, 34, 30, 20]
