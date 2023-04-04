const reverseString = function(inputString) {
    let reversedString = "";
    reversedString = inputString.split('').reverse().join('');
        
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
