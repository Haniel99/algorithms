
function partition(arr, start, end) {
    let pivot = arr[end];
    let i, y;
    for (i = start, y = start - 1; i <= end; i++) {
        if (arr[i] <= pivot) {
            y++;
            if (arr[y] > arr[i]) {
                let aux = arr[y];
                arr[y] = arr[i];
                arr[i] = aux;
            }
        }

    }

    return y;
}

/**
 * 
 * This function is used to sort an array using quick sort algorithm.
 * @param {*} arr 
 */
function quick_sort(arr = [], start, end) {
    if (end > start) {
        let index_pivot = partition(arr, start, end);
        quick_sort(arr, start, index_pivot - 1);
        quick_sort(arr, index_pivot + 1, end);
    }
}

let arr = [10, 7, 8, 9, 1, 5, 6, 2, 3, 4, 7, 22, 323, 12, 77, 55, 21, 88, 33];

quick_sort(arr, 0, arr.length - 1);

console.log(arr);
