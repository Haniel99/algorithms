// Url: https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    const map = {};

    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    
    let arr = Object.entries(map).map(([num, freq]) => [freq, parseInt(num)]);
    arr.sort((a, b) => b[0] - a[0]);
    
    return arr.slice(0, k).map(pair => pair[1]);
}


let res = topKFrequent([1, 1, 1, 2, 2, 3], 2); // [1, 2]
console.log(res);
