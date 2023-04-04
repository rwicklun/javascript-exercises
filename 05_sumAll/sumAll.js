const sumAll = function(sumStart, sumEnd) {
    if (typeof(sumStart) !== "number" || typeof(sumEnd) !== "number" || +sumStart < 0) {
        return "ERROR";
    }
    if (sumStart > sumEnd) {
        let temp = sumStart;
        sumStart = sumEnd;
        sumEnd = temp;
    }
    let sum = 0;
    for (let index = +sumStart; index <= +sumEnd; index++) {
        sum += index;
        
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
