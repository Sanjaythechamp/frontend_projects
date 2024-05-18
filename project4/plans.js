document.addEventListener('DOMContentLoaded',function(){

    var box = document.getElementById('heading');

    setTimeout(function(){
        box.classList.add('animation')
    },2000);

});


const element = document.getElementById('text2');

const element2 = "get your website online in three easy steps";
let index = 0;
function counter(){
   
if(index < element2.length){

    element.innerHTML += element2.charAt(index);
    index++;
    setTimeout(counter,200);
}
}
counter();