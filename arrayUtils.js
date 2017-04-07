/*********************************************************
*	sortArray
*
*	Purpose:
*
*	Performs a sort on the given array, then returns it.
*
*	Parameters:
*
*	args - a hash of arguments containing:
*
*		arr - an array.
*
*	Returns:
*
*	An array.
**********************************************************/
function sortArray (args) {
	var arr = args.arr.slice();
	var newArr = arr.slice();
	var numElsInOrder = 0;

	while (numElsInOrder < (arr.length - 1)) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i+1]) {
				if (arr[i] > arr[i+1]) {
					newArr[i] = arr[i+1];
					newArr[i+1] = arr[i];
					arr[i] = newArr[i];
					arr[i+1] = newArr[i+1];

					// Verify
					for (var j = 0; j < arr.length; j++) {
						if (arr[j] != newArr[j]) {
							throw "Error detected. Aborting";
						}
					}
					numElsInOrder = 0;
				}
				else {
					numElsInOrder++;
				}
			}
		}
	}
	return args.arr;
}
