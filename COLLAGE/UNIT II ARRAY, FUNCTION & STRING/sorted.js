var index = 0;
var studentName = new Array();

function sortNames(){
	var readName = document.sorting.readNames.value;
	studentName[index] = readName;
	index++;
	studentName.sort();
	document.sorting.displayNames.value = studentName.join("\n");
}