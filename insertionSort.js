/*
The function insertionSort takes an array arr as an argument. It begins by looping through each element in the array starting from the first index (0). For each element, it does the following:


1. It stores the current element in the variable numberToInsert. This is the number that we want to insert in the correct position in the sorted portion of the array.

2. It then initializes another loop with the variable j starting from i - 1, which is the index before the current element. This loop moves backwards through the array (decrementing j), as long as j is not less than 0 and the element at index j is greater than numberToInsert. This loop is looking for the correct position to insert numberToInsert.

3. Inside this inner loop, it shifts the element at index j one position to the right (to j + 1). This makes room for numberToInsert.

4. After the inner loop finishes, it inserts numberToInsert at the correct position (j + 1).

5. This process repeats for each element in the array, gradually building up the sorted portion of the array.

Finally, after all elements have been sorted, the function returns the sorted array.
*/

const insertionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j;
        for(j = i - 1; j > -1 && arr[j] > numberToInsert; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}