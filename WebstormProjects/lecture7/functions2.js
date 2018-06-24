function getX() {
    var x=5;

    var todolist=[];
    function getY(){
        var y=7
        console.log("inside ",x);
        todolist[0]=y;
    }
    //console.log(y);   //no scope outside;
    console.log(todolist); //but this has scope outside.
    console.log("outside",x);
    //getY();
    window.getY=getY; //for elements in window;
}

getX(); //unless you define or call getX() here then only you can make window for gety to get called;
getY(); //this cannot be defined alone unless getX() is called so that window is made for getY();