setup ();

function setup() {
    randomDish();
}

function randomDish() {
    /* TODO 1 */
    fetch("https://foodish-api.herokuapp.com/api/")
      .then(response => response.json())
      .then(data => updateFoodSrc(data.image));
}

function updateFoodSrc(src) {
    /* TODO 2 */
    let img = document.querySelector("img");
    img.src = src;
}