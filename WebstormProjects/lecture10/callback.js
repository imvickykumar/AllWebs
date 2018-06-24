function phoneCall(otp) {
    console.log("can we order pizza");
    console.log("i need your otp");
    console.log("wait a second");
    otp();
    console.log("wait 2..... second");


}
//phoneCall();
phoneCall(function () {
    console.log("Received Otp");
    setTimeout(function () {

        console.log("payment is done");


    },1000)
    setTimeout(function () {

        console.log("Really are u on call");//asynchronous has never worked in order;


    },5000)
    console.log("still waiting");

});