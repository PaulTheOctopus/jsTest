/*
 * Each Color Rect is a link <a>.
 * You need to make these links clickable, 
 * each link should color its own container (parent element with class name ‘.container’) 
 * into the color from data-color attribute.
 * 
 * Link ".animate-all" should animate color switching of each container, from left to right  
 * with time interval of 2 seconds.
 */

//Hope that I understood correctly
function colorizeContainer(div) {
    let color = div.dataset.color;
    //thought that it is most convenient way to get parent div
    let pEl = div.parentElement.parentElement.parentElement;
    let parentColor = pEl.style.backgroundColor;
    //change the color of the container to the data-color and backward
    if (parentColor != color) {
        pEl.style.backgroundColor = color;
    }else {
        pEl.style.backgroundColor = 'transparent';
    }
}

function animateAll() {
    //use colorizeContainer func to animate all containers simultaneously
    let as = document.getElementsByTagName("a");
    let asArr = [];
    asArr.push(as);
    for (let i = 0; i < 3; i++) {
        ((index) => {setTimeout( () => {colorizeContainer(asArr[0][i])}, 2000*i)})(i);
        ((index) => {setTimeout( () => {colorizeContainer(asArr[0][i+3])}, 2000*i)})(i);
        ((index) => {setTimeout( () => {colorizeContainer(asArr[0][i+6])}, 2000*i)})(i);
    }
}

