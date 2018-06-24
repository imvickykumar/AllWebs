/* Created by aayusharora on 12/31/17.
 */

    window.onload = function() {
        let inp = document.getElementById('inp');   //this is the way to chose the file from html or api file
        let result = document.getElementById('result');  //way for calling the document
        let btn = document.getElementById('btn');     //these are just the way of assigning the html id in javascript
                                                      //and perform some operation in it;

        let todoList = [];        //here todolist is an array so its store as list;
        btn.onclick = function () {
            let todo = inp.value;
            todoList.push(todo);   //so whatever we are writing in the box is being pushed;
            display();
        };

        function display() {                    //function to add the name in the todolist array;
            let finalList = "";
            for (let i = 0; i < todoList.length; i++) {

                finalList += `<li>${todoList[i]}</li>`  //scanning here the list of todolist;
            }
            result.innerHTML = "";    //here result is the list which is written in the todolists;
            result.innerHTML = finalList;    //so this result is given in the html page;

        }          //here the result is made confirm in the list so its not overriden;;
                   //understood the logic of result in both html and javascript;
                  //onclick is mostly wriiten along  with the button in html;;
                   //but here in javascript its written so that when it is clicked a push in todolist operates;
                  //so undertood the scope of btn also;
                  //inp is for whatever  we are writing in the box;
    }