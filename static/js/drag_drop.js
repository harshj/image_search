function drop(event) {
	event.preventDefault();
	var image = event.dataTransfer.getData("image");
    event.target.appendChild(document.getElementById(image));
}

function allowDrop(event) {
    event.preventDefault();
}