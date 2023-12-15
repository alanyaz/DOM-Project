var newParagraph = document.createElement("p");

newParagraph.textContent = "Create lasting memories and relive them all in a single, cherished space. [dynamically created]";

document.querySelector("main").appendChild(newParagraph);

var fragment = document.createDocumentFragment();

var templateParagraph = document.createElement("p");
templateParagraph.textContent = "This is a templated paragraph.";

for (var i = 0; i < 3; i++) {
	var clonedParagraph = templateParagraph.cloneNode(true);
	fragment.appendChild(clonedParagraph);
}


document.getElementById("subline").innerHTML = "Embark on a journey of rediscovery as you gather and savor a lifetime of precious memories, all conveniently housed in one special haven. Uncover the joy of reliving your cherished moments, seamlessly woven together in a single, treasured space designed just for you.";
document.querySelector("h1").style.color = "green";


var newParagraph = document.createElement("p");

newParagraph.textContent = window.location.href + " " + window.innerWidth + "PX";

document.querySelector("main").appendChild(newParagraph);
