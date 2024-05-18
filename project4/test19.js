document.addEventListener("DOMContentLoaded", function () {
    const cursorTrail = document.querySelector(".cursor-trail");
  
    document.addEventListener("mousemove", function (e) {
      const x = e.pageX;
      const y = e.pageY;
  
      cursorTrail.style.left = x + "px";
      cursorTrail.style.top = y + "px";
    });
  });
  
  document.addEventListener("DOMContentLoaded",function(){
 let scroll = document.getElementById('curso2');
 
 document.addEventListener("mousemove",function(e){
    
    const x = e.pageX;
    const y= e.pageY;
    scroll.style.left = (x + 30) + "px";
    scroll.style.top = (y+30)+"px"
 });


  });