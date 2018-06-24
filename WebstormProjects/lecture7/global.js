

//"use strict"
// f=8; //scope is window
//
// console.log(f);


function hello() {   //the scope of hello is window
    console.log(bhello);
    if(true){
       // let y=5;
        const z=8;
        //z=4;
        var x=6;
        console.log(bhello);
        let mhello =function mhello() {      //its inside the block of if;

        }
    }
    function bhello(){

    }
    var uhello=function uhello() {

    }
    console.log(x);
    console.log(y);
    console.log(z);

}
hello();