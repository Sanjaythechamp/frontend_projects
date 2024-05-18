document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;   /* scroll is an event listener 
                        window.scrollX: This property returns the number of pixels that the document has been scrolled horizontally.
                        window.scrollY: This property returns the number of pixels that the document has been scrolled vertically.   
                        
                        This line retrieves the current vertical scroll position of the window in pixels using the window.scrollY property and assigns it to the variable scrollPosition.
    */        
  // console.log(scrollPosition);
  //  console.log("Scroll position:", scrollPosition);

    if (scrollPosition < window.innerHeight) {
        document.getElementById('section1').style.backgroundColor = 'white'; // for section 1
        //If the scroll position is less than the viewport height (window.innerHeight), it means the user is at or above the top of the page....
    } else if (scrollPosition < window.innerHeight * 2) {
        document.getElementById('section2').style.backgroundColor = 'black'; 
    } else if (scrollPosition < window.innerHeight * 3) {
        document.getElementById('section3').style.backgroundColor = 'white';  
    } else {
        document.getElementById('section4').style.backgroundColor = 'white';  
    }
});
