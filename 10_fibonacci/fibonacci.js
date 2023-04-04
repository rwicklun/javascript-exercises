const fibonacci = function(fibonacciCount) {
    const sequence = [1, 1];
    if (isNaN(fibonacciCount) || +fibonacciCount < 1){
        return 'OOPS';
    }
    fibonacciCount = +fibonacciCount;
    if (fibonacciCount === 1 || fibonacciCount === 2) {
        return sequence[0];
    } else {
        let finalNumber = 0;
        for (let index = 2; index < fibonacciCount; index++) {
            const element = sequence[index-1]+sequence[index-2];
            sequence.push(element);
            finalNumber = element;
            
        }
        return finalNumber;
    }

};

// Do not edit below this line
module.exports = fibonacci;
