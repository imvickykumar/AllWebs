// function add(data) {
//    console.log("adding numbers");
//    data(function (a,b) {
//        console.log(a+b);
//
//    })
// }
//
// add(function (done) {
//     done(2,3);
//
// });




function imageTransform() {
    console.log("we have collected the images");
    filter(function () {
        console.log("Enhancement.....")

    })

}

imageTransform(function (enhancement) {
    console.log("doing filtering.....");
    setTimeout(function () {

        console.log("filtering")

    },5000)
    enhancement();
    console.log("enhancement is done.....")

})