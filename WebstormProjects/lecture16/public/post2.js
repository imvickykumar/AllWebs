$(document).ready(function () {

    let btn=$('#btn');


 function sendTodo() {
     let data=$('#inp').val();
     let result=$('#result');

     $.post({'url':'/todolist',
         'data':data,
         'success':function (data) {
             console.log(res);
             result.append(res+'\n')
         }
     });
     getList();

 }
 function getList() {
     $.get({'url':'/todoList',
     'success':function (data) {
         console.log(data);
     }})

 }
 //@param id
    function deleteItem(id) {
        console.log(this);
    }

 btn.on('click',(function () {
     addTodo();

 }))

});