/**
 * Design an algorithm to encode a list of strings to a single string.
 * The encoded string is then decoded back to the original list of strings.
 * Please implement encode and decode.
 */
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = strs.map(str => `${str.length}#${str}`).join("");
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let output = []
        // 4#neet4#code4#love3#you
        while (i < str.length) {
            let j = i;
            while (str[j] != "#") {
                j++;
            }
            let s_len =  parseInt(str.slice(i,j));
            output.push(str.slice(j+1,j+1+s_len));
            i = j+1+s_len;
        }
        return output;
    }
}

let sol = new Solution();

let encoded = sol.encode(["nesasasasasa##et","#sasasasda43dase3121","2212133s##love","you"]);
console.log(encoded); // 4#neet4#code4#love3#you
 

let decoded = sol.decode(encoded);
console.log(decoded); // [ 'neet', 'code', 'love', 'you' ]
 