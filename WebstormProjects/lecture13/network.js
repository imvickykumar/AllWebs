
$(function () {
    let URL='http://numbersapi.com/'
    function NetworkCall(callback) {
        let value=$('#inp').val();
        $.ajax('${URL}${value}/math',{success:function (data) {
               // console.log(data)
               // dataType:"JSONP"
                callback(data);
            }})

    }
    $('#btn').on('click',function () {
        NetworkCall(function (data) {
            $('#result').append(data);

        });

    })

})