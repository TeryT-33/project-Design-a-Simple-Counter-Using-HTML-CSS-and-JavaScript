// This script changes the background color of the webpage when a color is clicked from the color palette.
function bgchange(color){
    let colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"]
    document.body.style.background = colorarray[color];
    document.body.style.transition = "background 1.5s ease-in-out";
}

var colorarray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"];
var colorbox = document.getElementById("colorbox");

colorarray.forEach(function(color,index){
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function(){
        bgchange(index);
    });
    colorbox.appendChild(span);
});