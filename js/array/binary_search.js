/**
 * This function is used to search a target element in a sorted array using binary search algorithm.
 * The time complexity of this algorithm is O(log(n)).
 * @param {*} arr 
 * @param {*} target 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
function recursive_binary_search(arr = [], target, start, end) {
    let middle = start + parseInt((start + end) / 2);
    if (arr[middle] == target) {
        return middle;
    } else if (arr[middle] > target) {
        return recursive_binary_search(arr, target, start, middle - 1);
    } else {
        return recursive_binary_search(arr, target, middle + 1, end);
    }
}

/**
 * This function is used to search a target element in a sorted array using binary search algorithm.
 * The time complexity of this algorithm is O(log(n)).
 * 
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
function binary_search(arr = [], target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = start + parseInt((end - start) / 2);

        if (arr[middle] == target) {
            return middle;
        } else if (arr[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let index = binary_search(arr, 5); // 4
let index2 = recursive_binary_search(arr, 5, 0, arr.length - 1); // 4
if (index != -1 && index2 != -1) {
    console.log("Element found at index", index, index2);
    console.log("Element value", arr[index], arr[index2]);
    
} else {
    console.log("Element not found");
}
module.exports = binary_search;