/**
 * Created by ken on 15/8/17.
 */

 function menuControl(el){
    var kids = document.getElementById('mainMenu');
    for(var i = 0;i<kids.length;i++){
        kid[i].className = "close"
    }
    el.className = "open"
}
$(document).ready(function(){

    $('.mainMenu div').click(function () {
        $('.main div').hide();
        var tmp_div = $(this).parent().index();
        $('.main div').eq(tmp_div).show();
    });
    $('.main div').hide();

});