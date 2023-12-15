const momentTitleselectByID = document.getElementById("momentTitle");
const momentDateselectBySelector = document.querySelector("#momentDate");

var parentElement = document.getElementById("momenttable");

var firstChild = parentElement.firstChild;

var tableData = document.querySelectorAll("td");

tableData.forEach(function(td) {
	td.classList.add("highlight");
});



var button = document.getElementById("uploadButton");

button.addEventListener("click", function() {
	button.style.backgroundColor = "lightblue";
});

button.addEventListener("mouseover", handleMouseOver);

function handleMouseOver() {
	button.style.backgroundColor = "lightgreen";
}



var form = document.getElementById("momentform");
form.addEventListener("submit", function (event) {
	if (!form.checkValidity()) {
		event.preventDefault();
		alert("Please fill in the required fields correctly.");
	}
});
