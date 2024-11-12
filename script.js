let div = document.querySelector(".a");
div.addEventListener(`scroll`, onclick);

function onclick(event) {
    let y = div.getBoundingClientRect().top;
    var viewportHeight = window.innerHeight;
    console.log("Element Y: " + y);
    console.log(viewportHeight);
    if (y == viewportHeight - 20) {
        div.style.backgroundColor = "red";
    }
}