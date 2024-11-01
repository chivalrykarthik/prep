const findTwoSum = (ar, target)=>{
    if(!ar.length) return ar;

    let left = 0;
    let right = ar.length-1;

    while(left < right){
        const sum = ar[left] + ar[right]
        if(sum === target){
            return [left, right];
        }
        else if(sum > target){
            right = right -1;
        } else {
            left = left + 1;
        }
    }
    return [];
}


const nums = [1, 2, 3, 4, 6];
const target = 6;
const result = findTwoSum(nums, target);
console.log(result); // Output: [1, 3]
