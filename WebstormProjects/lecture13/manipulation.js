
$(function () {
    let parent=$('#par');
    let clickable=$('#clickable');
    clickable.on('click',function (event) {
        console.log(event.target);
        $(event.target).parent().parent().css({'color':'red',
            'background-color':'blue'});


    })
    // clickable.parent().parent().css({'color':'red',
    //     'background-color':'blue'});


   // let child1=parent.children('#child1').parent();
    //console.log(children);
    //child1.css('color','red');


});