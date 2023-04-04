const palindromes = function (inputString) {
    if (typeof inputString !== "string") {
        return "ERROR";
    }
    let checkArray = inputString.toLowerCase().replace(/[^A-Za-z0-9]/g, '').split('');
    for (let index = 0; index < checkArray.length; index++) {
        if (checkArray[index] !== checkArray[(checkArray.length - 1 - index)]){
            return false;
        }
        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
