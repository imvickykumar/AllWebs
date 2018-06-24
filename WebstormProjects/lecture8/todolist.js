
// function getText(){
//     var m="hello";
//     return
//         m;
//     }
//
// var y=getText();
// console.log(y);

// window.onload=function() {
//     let inp=document.getElementById('inp');
//     let result=document.getElementById('result');
//     let btn=document.getElementById('btn');
//
//     let todoList=[];
//     btn.onclick=function () {
//         let todo=inp.value;
//        // console.log(todo);
//         todoList.push(todo);
//         display();
//
//     };
//     function display() {
//         let finalList="";
//         for(let i=0;i<todoList.length;i++){
//             finalList += '<li>${todoList[i]}</li>'
//         }
//         result.innerHTML="";
//         result.innerHTML=finalList;
//
//     }
// }


//to do list is an array of taskk;
window.onload = function() {
        let inp = document.getElementById('inp');
        let result = document.getElementById('result');
        let btn = document.getElementById('btn');

           // let todoList = [];
            todoList=JSON.parse(localStorage.getItem('todoList')) || [];
            display();
            btn.onclick = function() {
                //let todo = inp.value;
            let task={
                //object type
                 item:inp.value,           //this is new style of creating object;
                 done:false
                //JSON type object
                // "item":inp.value,           //this is new style of creating object;
                // "done":false
            };
                console.log(JSON.stringify(task));
                localStorage.setItem('todoList',JSON.stringify(task));
                // todoList.push(todo);
                todoList.push(task);
                //display();
            };

            function display() {
                    let finalList = "";
                    for(let i=0; i<todoList.length; i++) {

                                finalList += `<li>${todoList[i].item} </li>`
                            }
                    result.innerHTML = "";
                    result.innerHTML = finalList;
            }
    }