$(document).foundation();

function handleMenuEvent () {
    var x = document.getElementById("main-menu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


