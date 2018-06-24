

$(function () {
    "use strict";
    let input=$('#inp');
    let btn=$('#btn');
    btn.on('click',function (data) {
        let value=input.val();
        console.log('in btn');
        let url=`http://localhost:4000/todos?todo=${value}`;
        $.ajax({'url':url,
        'type':'GET',
        'success':function (data) {
            console.log(data);
        }})

    })

})