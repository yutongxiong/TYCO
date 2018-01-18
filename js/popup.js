// uncomment the console.log below, you will see that you get access to the rooms variable in data.js
// console.log(rooms);

/*as you can see in the html, there are a few .btn_more_info BUT
* we are using $(this) here....this would help a lot because it only defines the .btn_more_info you clicked and not the others
* */
$('.btn_more_info').on('click', function(e){
    e.preventDefault();
    // uncomment below, and see what's in the console...
    // console.log($(this));
    // inside the console, you might see something like r.fn.init[button.btn_more_info]
    // click on it then you'll see something like 0:button.btn_more_info
    // either click on it, or just highlight it
    // if you click on it, it'll bring you to the html and show which button you just clicked,
    // if you highlight it, you should be able to see which button you clicked too but won't bring you to html
    $(this).next().show();  // ok now, since $(this) is the button, in html, what's after the button? it's the modal you want to display, show() means display: block in css
});

$('.close').on('click', function(e){
    e.preventDefault();
    // this is pretty similar to the above on click function
    // but using closest() meaning it will go up the html dom tree and find the closest dom that has class modal, then hide() =  display: none
    $(this).closest('.modal').hide();
});

