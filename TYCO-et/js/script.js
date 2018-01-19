// Usually we won't use x here, we use a more meaningful name e.g. appendRooms, which will be more meaningful when others try to read the code
// also, I added the model and make it hidden, here for easy access which I will explain in js file
// uncomment the console.log below, you will see that you get access to the rooms variable in data.js
// console.log(rooms);
var x = '';
for (var i = 0; i <= rooms.length -1 ; i++) {
	x += '<ul class="room_list" id="' + rooms[i].id + '">';
	x += '<li class="crop">';
	x += '<img src="'+ rooms[i].image +'">';
	x += '<h1>' + rooms[i].name + '</h1>';
	x += '<p>' + rooms[i].intro + '</p>';
	// x += '<a href="info.html">';
	//x += '<button class="btn_book">' + 'MORE INFO'  + '</button>';  // use class name such as more-info, because this is actually a more info button, so you don't mix with the other class
	x += '<button class="btn_more_info">' + 'MORE INFO'  + '</button>';
	// x += '<div id = "myModal" class="modal">';
	// x += '<div class="modal-content">';
	// x += '<span class = "close">';
	// x += '&times ';
	// x += '</span>';
	// x += '<p>' + rooms[i].intro + '</p>';
	// x += '</a>';
	x += '<div class="modal">';
	x += '<div class="modal-content">';
	x += '<span class="close">&times;</span>';
    x += '<div class = "room_detail">';
    x += '<ul class = "room_name">' + rooms[i].name + '</ul>';
    x += '<img class = "room1" src ="'+ rooms[i].image +'">';
    x += '<p>' + rooms[i].intro + '</p>';
    x += '<a href="booking.html">';
    x += '<button class="btn_book center">' + 'BOOK NOW'  + '</button>';  // this is the real button book, but because this name is exact the same as more-info, when we do jquery or css it'll be hard to tell which is which
    x += '</a>';
    x += '</div>';
    x += '</div>';
    x += '</div>';
	x += '</li>';
	x += '</ul>';
	};
// console.log(x);
$('.room_container').append(x);

var y = '';
for (var n = 0; n <= rooms.length -1 ; n++) {
	y += '<div class = "display_img">';
	y += '<img src ="'+ rooms[n].image +'">';
	y += '<form class = "display_text">';
	y += '<p>' + "ITEM NAME: " + rooms[n].name +'</p>';

	y += '<p>' + "DAILY/HOURLY: " + '</p>';
	y += '<input type="text" name = "daily">';
	y += '<p>' + "BOOKING DATE: " + '</p>';
	y += '<input type="text" name = "date">';
	y += '<a href="payment.html">';
	y += '<button class="btn_pay center">' + 'PAY NOW'  + '</button>';
	y += '</a>';
	y += '</div>';

};
// console.log(y);
$('.display_box').append(y);




