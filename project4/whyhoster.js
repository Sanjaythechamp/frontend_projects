
const element = document.getElementById('lovehoster');


const element2 = "here is why you love with love hoster";
let index = 0;
function counter(){
if(index < element2.length){
    element.innerHTML += element2.charAt(index);
    index++;

    setTimeout(counter,100);
}
}
counter();