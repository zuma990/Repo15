// Only change code below this line
const product = (...args) => {
    
    // Only change code above this line
    return args.reduce((a, b) => a * b, 1);
    }
    console.log(product(4, 3, 10, 2));// Change this line
    module.exports = product;