
$(document).ready(function () {
   let input=$('#inp');
   let btn=$('#btn');   //$ resembles jquery object
   //let result=$('#result');
   let result=$(document.getElementById('result'))// now its jquery object;
   let todoList=JSON.parse(localStorage.getItem('todoList'))

   function add() {
       let value=input.val();
       // console.log(value);
       //result.html(value);
       result.append(`${value}<br>`);   //append is in jquery library;
       todoList.push(value);
       localStorage.setItem('todoList',JSON.stringify(todoList));
       console.log(window.alert('hello'));

   }

   function display() {
       $.each(todoList,function (i,v) {
         //  console.log(JSON)
           result.append(`${v}<br>`);

       })

   }
   btn.on('click',function () {
       add();

   })
});