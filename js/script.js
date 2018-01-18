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



var x = '';
for (var i = 0; i <= rooms.length -1 ; i++) {
	x += '<ul class="room_list">';
	x += '<li class="crop">';
	x += '<img src="'+ rooms[i].image +'">';
	x += '<h1>' + rooms[i].name + '</h1>';
	x += '<p>' + rooms[i].intro + '</p>';
	// x += '<a href="info.html">';
	x += '<button class="btn_book">' + 'MORE INFO'  + '</button>';
	// x += '<div id = "myModal" class="modal">';
	// x += '<div class="modal-content">';
	// x += '<span class = "close">';
	// x += '&times ';
	// x += '</span>';
	// x += '<p>' + rooms[i].intro + '</p>';
	// // x += '</a>';
	x += '</li>'	
	x += '</ul>';
	
	};


console.log(x);
$('.room_container').append(x);

y = '';
for (var n = 0; n <= rooms.length -1 ; n++) {
	y += '<div class = "room_detail">';
	y += '<ul class = "room_name">' + rooms[n].name + '</ul>';
	y += '<img class = "room1" src ="'+ rooms[n].image +'">';
	y += '<p>' + rooms[n].intro + '</p>';
	y += '<a href="booking.html">';
	y += '<button class="btn_book center">' + 'BOOK NOW'  + '</button>';
	y += '</a>';
	y += '</div>';
	
};
// function myFunction() {
// 			for (var n = 0; n <= rooms.length -1 ; n++) {
// 				if document.getElementsByClassName("room1") === rooms[n].image {
// 					console.log(rooms[n].intro);
// 					break;
// 				}	
// 	};
// };
$('.modal-content').append(y);




