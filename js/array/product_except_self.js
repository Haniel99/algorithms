class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //[-1,0,1,2,3]
        let result = 1;
        let count_cero = 0; 
        let res = [];
        for (let n of nums) {
            if (count_cero<=1) {
                if (n!=0) {
                    result = result*n;
                }else{
                    count_cero++;
                }
            }else{
                break;
            }
        }

        if (count_cero> 1) {
            for (let n of nums) {
                res.push(0);
            }
            return res;
        }

        for (let n of nums) {
            if (count_cero==1) {
                res.push(n!=0?0:result);
            }else{
                res.push(result/n);
            }
        }

        return res;
    }


}

const solution = new Solution()

console.log(solution.productExceptSelf([-1, 0, 1, 2, 3]));

