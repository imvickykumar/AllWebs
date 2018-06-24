

var fruit={
    name:"Apple",
    taste:"sweet",
    update:function (name) {
        this.name=name;
        console.log(this);

    }
}

function getFruit() {
   // console.log(fruit.name);
    fruit.update("kiwi");

}

// function update(name) {
//     fruit.name=name;
//     console.log(fruit);
//
// }
// update("kiwi");
//
   getFruit();