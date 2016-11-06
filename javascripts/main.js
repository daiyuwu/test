var $printTarget = document.getElementById("test_print_block");

var times3 = 3, times5 = 5, timesboth = times3*times5;

for(i = 1; i <= 100; i++){
	print(doSomething(i));
}

function doSomething(input) {
	var output = "";
	
	if(0 == input % timesboth)
		output = "fizzbuzz";
	else if(0 == input % times5)
		output = "fizz";
	else if(0 == input % times3)
		output = "buzz";
	else
		output = input;

	return output;
}

function print(msg) {
	appendPrint(msg);
}

function normalPrint(msg) {
	$printTarget.innerText = msg;
}

function appendPrint(msg) {
	var tmpContent = $printTarget.innerText;
	if("" != tmpContent)
		tmpContent += "\r\n";
	tmpContent += msg;
	$printTarget.innerText = tmpContent;
}

// function AIPrint(msg) {
	// $printTarget.innerText = msg + "<span class='new_line'></span>";
// }