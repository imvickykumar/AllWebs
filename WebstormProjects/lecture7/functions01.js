

function parent(){
    //closure

    var x=2;
    var y=3;
    var functionArray=[];
    function child1() {

        console.log("child value1",x+y);

    }
    function child2() {

        console.log("child value2",x+y);

    }
    function child3() {

        console.log("child value3",x+y);

    }
    functionArray[0]=child1;
    functionArray[1]=child2;
    functionArray[2]=child3;
    return functionArray;




}
var y=parent();
//y[0]();
console.log(y);

//parent();