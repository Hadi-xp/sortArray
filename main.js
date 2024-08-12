// my variables
let myArray = [10,5,9];


function sortArray(array){
    let arrayLenght = array.lenght;

    for(let i = 0; i < arrayLenght-1; i++){
        for(let j = 0; j < arrayLenght-1-i; j++){
            if(array[j] > array[j+1]){
                let swap = array[j];
                array[j] = array[j+1];
                array[j+1] = swap;
            }
        }
    }
    return array
}

console.log(sortArray(myArray));