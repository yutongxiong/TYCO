
var x = '';
for (var i = 0; i <= rooms.length -1 ; i++) {
    x += '<ul class="room_list" id="' + rooms[i].id + '">';
    x += '<li class="crop">';
    x += '<img src="'+ rooms[i].image +'">';
    x += '<h1>' + rooms[i].name + '</h1>';
    x += '<p>' + rooms[i].intro + '</p>';
    // x += '<a href="info.html">';
    //x += '<button class="btn_book">' + 'MORE INFO'  + '</button>';  
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
    x += '<button class="btn_book center">' + 'BOOK NOW'  + '</button>';  
    x += '</a>';
    x += '</div>';
    x += '</div>';
    x += '</div>';
    x += '</li>';
    x += '</ul>';
};
// console.log(x);
$('.room_container').append(x);

