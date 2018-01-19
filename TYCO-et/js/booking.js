// this function is not made by me, it's from
// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// get the room id from cookie
var roomId = getCookie('room-id');
// console.log(roomId);
var y = '';

// if room id exists, run the loop
// find the matching id, and then append the room info
// if room id is not found, change the title name
if (roomId){
    for (var n = 0; n <= rooms.length -1 ; n++) {
        if (rooms[n].id == roomId){
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
        }
    }
} else {
    $('.title_name').find('h2').text('Please Choose A Room First')
}

// console.log(y);
$('.display_box').append(y);

// remove cookie
document.cookie = "room-id=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";