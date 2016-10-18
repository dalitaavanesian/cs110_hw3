const reverse = function(arr) {

	let reverseArray = [];

	for(let i = arr.length - 1; i >= 0; i--) {
		reverseArray.push(arr[i]);
	}

	return reverseArray;
};

console.log(reverse([1,2,3,4,5,6,7]));
