

//creating the loop
for(var i=0; i<100; i++) {
    //creating a "div" element
    var elem=document.createElement("square");
    //styling element
    elem.style.height="20px";
    elem.style.width="20px";
    elem.style.float="left";
    //generating three random colors
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //using this string to create a background color
    elem.style.background="rgb(" + r + "," + g + "," + b + ")";
    document.body.appendChild(elem);
}