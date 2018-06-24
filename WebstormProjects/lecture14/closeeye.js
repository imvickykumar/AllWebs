$(document).ready(function () {
    let eye=$('.eye')

    eye.on('click',function () {
        console.log($(this));
       // $(this).css({'background-color':'white'})
        $(this).toggleClass('open');

    })

})