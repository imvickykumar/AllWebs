// Here a new window is created//
// var y=window.prompt("hi tell me your name");
// console.log(y);
//
// //here the reply of the window is got//
// window.alert("your name is " + y);



//now doing the same using function;

 var y=window.prompt("hi tell me your name");
function hello() {
   // var y=window.prompt("hi tell me your name");

    return window.alert("your name is " + y);


}
console.log(hello());