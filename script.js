// Setting global variables
let arraySize = 150;
let min = 3;
let max = 230;
let array = [arraySize];
let sortedArray = [arraySize];

// Call gen array
generateArray();

// Define gen array
function generateArray(){
    for (var i = 0; i < arraySize; i++) {
        array[i] = generateArrayValue();

        if (array[i] == array[i-1]){
            array[i] = generateArrayValue();
        }
    }
}

// Gen values
function generateArrayValue(){
    return Math.floor(Math.random() * (max-min) + min);
}

// Call sorting algo
bubbleSort();

// Define sorting algo
function bubbleSort(){
    sortedArray = Array.from(array);
    for (var i = 0; i < arraySize; i++){
        for (var j = 0; j < arraySize - 1; j++){
            if (sortedArray[j] > sortedArray[j+1]){
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j+1];
                sortedArray[j+1] = temp;
            }
        }
    }
}