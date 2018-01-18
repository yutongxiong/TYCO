var rooms = [ 
	{name: "GALAXY FANTASY", 
	intro: "Space and galaxy theme, wonderful light effect. <br>King size bed, no window.",
	image:"img/room1.jpg"}, 

	{name: "LOST IN PARIS", 
	intro: "Painted wall, decorated with mirror. <br>Queen size bed, no window.",
	image:"img/room2.jpg"},

	{name: "SAMURAI & BUSHIDO", 
	intro: "Acient Japanese castle style decorated. <br>Monster size bed, City view.",
	image:"img/room3.jpg"},

	{name: "ABOVE THE CLOUD", 
	intro: "Huge mirror on the ceiling,  painted wall. <br>Queen size bed, no window.",
	image:"img/room4.jpg"},

	{name: "THE ROULETTE", 
	intro: "Walls of mirror, advanced audio system. <br>Monster size bed, no window.",
	image:"img/room5.jpg"},

];
for (var j = 0; j <= rooms.length -1 ; j++) {
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn_book")[j];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 

btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


};

