
var y = '';
for (var n = 0; n <1 ; n++) {
	y += '<div class = "display_img">';
	y += '<img src ="'+ rooms[1].image +'">';
	y += '<form class = "display_text">';
	y += '<p>' + "ITEM NAME: " + rooms[1].name +'</p>';
	y += '<br>';
	y += '<p>' + "DAILY/HOURLY: " + '</p>';
	y += '<input type="text" name = "daily">';
	y += '<br>';
	y += '<p>' + "BOOKING DATE: " + '</p>';
	y += '<input type="text" name = "date">';
	y += '</form>';
	y += '<a href="payment.html">';
	y += '<button class="btn_pay">' + 'PAY NOW'  + '</button>';
	y += '</a>';
	y += '</div>';

};
// console.log(y);
$('.display_box').append(y);