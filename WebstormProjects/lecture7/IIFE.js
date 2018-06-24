//whatever variable is in the curly braces can dbe used as an objedt, except for functions;

//var userEnteriee={};  //this is the creation of the oject

var blog=(function () {   //we r creating a module of blog containing two functions//blog is window scope
    "use strict";
    var userEnteriee={};  //this is an object;

    function main() {
        function profileDetails() {              //[0]
            //this is a private function
            let name="aayush";
            let email="aayush@codingblock.com";
            return[name,email];


        }

        function blogEnteries() {                 //[1]
            //this is the public function;
            let post=["hello", "fake","not sure"];
            return post;

        }
        return [profileDetails,blogEnteries]  //[0,1]


    }
    var enteries=main();             //here variable enteries is declared  and value is main() function
    userEnteriee.blog=enteries[0];  //userEnteries object having blog element;example x.name; x.blog;
    return userEnteriee;            //where blog is key and enteries[1] is the value assigned;


})();   //this is new style of function calling.

// blogEnteries();
 console.log(blog.blog());  // we here use () since the key is calling a function or value is function;
 //console.log(userEnteriee.blog());