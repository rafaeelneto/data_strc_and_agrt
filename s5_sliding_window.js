// SLIDING WINDOW PATTERN

function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;

	for(let i = 0; i< num; i++) {
		maxSum += arr[i]
	}

	tempSum = maxSum;

	for (let i = num; i < arr.length; i++){
		tempSum = tempSum - arr[i-num] + arr[i];
		maxSum= Math.max(tempSum, maxSum)
	}
	return maxSum
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))