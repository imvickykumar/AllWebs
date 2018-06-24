//to write in the page and not to make some new window
// window.onload=function () {
//     var element = document.getElementById('node1');
//     var input = document.getElementById('inp');
//     console.log(element);
//
//
//     function getvalue() {
//
//         var x = input.value;
//
//         element.innerHTML=x;
//
//     }
//     window.a=getvalue;
// }


window.onload=function () {
    // var element = document.getElementById('node1');
    // var input = document.getElementById('inp');
    // console.log(element);


    function getvalue() {

        var x = document.getElementById('inp').value;     //this is whatever you have typed in the typing box;

        // element.innerHTML=x;        //this will change the "element" id with x's value
        //element.onclick=x;
        document.getElementById('node1').innerHTML=x;

    }
    window.a=getvalue;            //a is  function calling a function in window and value function is getvalue;
}




//Explaining the use of innerHTML;
//document.getElementById("demo").innerHTML = "";  // Replaces the content of <p> with an empty string

//document.getElementById("demo").innerHTML = "Paragraph changed!";//Change the HTML content of a <p> element with id="demo":