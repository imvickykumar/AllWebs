

function character(name,weapon){
    this.name=name;
    this.weapon=weapon;


    // this.change=function change(nam) {
    //     this.name=nam;
    //     console.log(this.name);
    // }

    // character.prototype.change=function(sb){
    //     console.log(this);
    // }

    character.prototype.change=function(changedname){
        this.name=changedname;
        console.log(this.name);
    }
}

var superman=new character('superman','laser-eye');
var wonderwoman =new character('wonderwoman','shield');
superman.change('tortoise');
wonderwoman.change('xyz');

//In console
// [1,2,3].map(function(x){
//     return Math.pow(x,4);
// })