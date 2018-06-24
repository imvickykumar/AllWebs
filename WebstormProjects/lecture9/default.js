


function checkCount() {

    let a=5;
    count();

}

//This is a window here

function count() {

   console.log(this);

}

checkCount();