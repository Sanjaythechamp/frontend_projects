document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {
        document.getElementById('diva').style.backgroundColor = 'red'; // Change color for diva
    } else if (scrollPosition < window.innerHeight * 2) {
        document.getElementById('divb').style.backgroundColor = 'black'; // Change color for divb
    } else if (scrollPosition < window.innerHeight * 3) {
        document.getElementById('divc').style.backgroundColor = 'white'; // Change color for divb
    } else {
        document.getElementById('divd').style.backgroundColor = 'white'; // Change color for divc
    }
});
