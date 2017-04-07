const STRING = 'Hjvzwlkyhoardrrrghthl';

/*************************************************************
*	compareString
*
*	Purpose:
*
*	Compares the given string and returns 1 if it is the same.
*
*	Parameters:
*
*	args - a hash of arguments containing:
*
*		string - a string.
**************************************************************/
function compareString (args) {
	var string = args.string;
	var numCorrect = -2;

	for (var i = 0; i < string.length; i++) {
		if (STRING[i] === string[i]) {
			numCorrect = numCorrect + 2;
		}
	}

	if ((numCorrect / STRING.slice(0,2).length) + 1 === Number(STRING.length)) {
		return 1;
	}
}
