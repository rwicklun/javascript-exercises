const removeFromArray = function(inputArray, ...deleteArray) {
    deleteArray.forEach(element => {
        for (let index = 0; index < inputArray.length; index++) {
            if (element === inputArray[index]){
                inputArray.splice(index, 1);
            }
            
        }
    });
    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
