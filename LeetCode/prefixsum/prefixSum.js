const input = [10, 5, 3, 4, 5];

const i = 1;
const j = 3;

const computePrefixSum = (ar)=>{
    if(!ar.length) return ar;

    const prefixSum = [0];

    for(let i = 0; i< ar.length; i++){
        prefixSum[i+1] = prefixSum[i] + ar[i]
    }
    return prefixSum;
}

const getRangeSum = (prefixSum, left, right)=>{
    return prefixSum[right+1] - prefixSum[left]
}
const prefixSum = computePrefixSum(input);
console.log(prefixSum);
const res = getRangeSum(prefixSum, i, j);
console.log(res);