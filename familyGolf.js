const clock = document.getElementById('textbox');
// document.querySelector('#clock')

setInterval(function(){
let date =new Date()
clock.innerHTML =date.toLocaleTimeString();

}, 1000);

const element = document.getElementById('text');
const elem = " get Up to 75% off on "
const elem2 = 'Hoster hosting'
 
let index = 0;
let index2 = 0;
function content(){
if(index < elem.length){
  element.innerHTML += elem.charAt(index);
  index++;
  setTimeout(content,100);
}
else{
    element.innerHTML += elem2.charAt(index2);
    index2++;
    setTimeout(content,100)
}
}
content();

document.addEventListener('DOMContentLoaded',function(){
var box = document.getElementById('box');

setTimeout(function(){
    box.classList.add('show')
},500)

setTimeout(function(){
  box.remove();
},5000)

})

document.addEventListener('DOMContentLoaded',function(){

  let scroll = document.querySelector(".cursor-effect")
  document.addEventListener("mousemove",function(e){
    let x = e.pageX;
    let y = e.pageY;

    scroll.style.left = (x+20)+"px";
    scroll.style.top = (y+20)+"px";
    
  });
});





