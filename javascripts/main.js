console.log('-- PREPROCESS --');
var $printTarget = document.getElementById("test_print_block");

console.log('-- START --');
var times3 = 3, times5 = 5, timesboth = times3*times5;

print('test');
print('test2');

function print(msg) {
	appendPrint(msg);
}

function normalPrint(msg) {
	$printTarget.innerText = msg;
}

function appendPrint(msg) {
	var tmpContent = $printTarget.innerText;
	tmpContent += msg + "\r";
	$printTarget.innerText = tmpContent;
}

// function AIPrint(msg) {
	// $printTarget.innerText = msg + "<span class='new_line'></span>";
// }