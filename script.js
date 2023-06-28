// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if(!e.target.matches('.dropbtn')) {
        var myDropDown = document.getElementById("myDropdown");
        if (myDropDown.classList.remove('show')) {
            myDropDown.classList.remove('show');
        }
    }
}

// When the user clicks on the button, 
// toggle between hiding and showing the dropdown content 
function myFunction(){
    document.getElementById("myDropdown").classList.toggle('show');
}