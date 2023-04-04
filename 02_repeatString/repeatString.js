const repeatString = function(string, num) {
    if (+num < 0) {
        return "ERROR";
    }
    let summedString = '';
    for (let index = 0; index < num; index++) {
        summedString += string;
        
    }
    return summedString;

};

// Do not edit below this line
module.exports = repeatString;
