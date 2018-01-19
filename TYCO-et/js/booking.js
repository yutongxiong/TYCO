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
