


function merge_sort(arr = []) {

    if (arr.length == 1) {
        return arr;
    }
    let middle = parseInt(arr.length / 2);

    let left_arr = merge_sort(arr.slice(0, middle));
    let right_arr = merge_sort(arr.slice(middle, arr.length));

    return order_merge_sort(left_arr, right_arr);
}


function order_merge_sort(left_arr = [], right_arr = []) {
    let i = 0, y = 0;
    let len_left = left_arr.length - 1;
    let len_right = right_arr.length - 1;
    let arr = []
    while (i <= len_left && y <= len_right) {
        if (left_arr[i] < right_arr[y]) {
            arr.push(left_arr[i]);
            i++;
        } else {
            arr.push(right_arr[y]);
            y++;
        }
    }
    while (i <= len_left) {
        arr.push(left_arr[i]);
        i++;
    }

    while (y <= len_right) {
        arr.push(right_arr[y]);
        y++;
    }

    return arr;
}

let arr = [10, 7, 8, 9, 1, 5, 6, 2, 3, 4, 7, 22, 323];

let res = merge_sort(arr);

console.log(res);
