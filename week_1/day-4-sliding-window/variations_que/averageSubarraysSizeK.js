const nums = [1,3,2,6,-1,4,1,8,2];
const k = 5;

function averages(nums, k) {
    let res = [];
    let sum = nums.slice(0, k).reduce((a,b)=>a+b,0);
    res.push(sum / k);

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        res.push(sum / k);
    }
    return res;
}

console.log(averages(nums, k));
