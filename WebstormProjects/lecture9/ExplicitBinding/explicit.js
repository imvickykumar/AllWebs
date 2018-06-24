//  var fruit={
//     name:"Apple"
//  }
//
//  var car={
//
//     name:"BMW"
//  }
//
//  function getObject() {
//     console.log(this);
//
//  }
//
//  var number={a: 6, b: 2}
//  function Multiply(c,d) {
//     console.log(this.a*this.b*c*d);
//
//  }
//
//  //Multiply.call(number,6,7);
// Multiply.apply(number,[6,7]);
//
//  // getObject.call(fruit);
//  // getObject.call(car);



var fruit={
    name:"Apple"
}

var car={

    name:"BMW"
}

function getObject() {
    console.log(this);

}

var number={a: 6, b: 2}
function Multiply(c,d) {
    console.log(this.a*this.b*c*d);

}

// Multiply.call(number,6,7);
// Multiply.apply(number,[6,7]);

getObject.call(fruit);
 getObject.call(car);