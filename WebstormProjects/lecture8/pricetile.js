//to write in the page and not to make some new window
window.onload=function () {
    var element = document.getElementById('node1');
    var km = document.getElementById('input1');
    console.log(element);
    var element = document.getElementById('node2');
    var time = document.getElementById('input2');
    console.log(element);


    var elementmain = document.getElementById('node3');


    function getvalue() {

        var x = km.value;
        var z= time.value;
        if(x>=0 && x<=5)
        {
            var y=x*20;
            if(z>=0 && z<=15)
            {
                var m=z*0;
            }
            if(z>15 && z<=30)
            {
                var m=z*10;
            }
            if(z>30)
            {
                var m=z*15
            }
        }
        if(x>5 && x<=20)
        {
            var y=x*40;
            if(z>=0 && z<=15)
            {
                var m=z*0;
            }
            if(z>15 && z<=30)
            {
                var m=z*10;
            }
            if(z>30)
            {
                var m=z*15
            }
        }
        if(x>20)
        {
            var y=x*50;
            if(z>=0 && z<=15)
            {
                var m=z*0;
            }
            if(z>15 && z<=30)
            {
                var m=z*10;
            }
            if(z>30)
            {
                var m=z*15
            }
        }


        var price=y+m;
        elementmain.innerHTML=price;
       //  element.onload=price;
       //   return price;
        //element.blur=price;

    }
    window.a=getvalue;
}