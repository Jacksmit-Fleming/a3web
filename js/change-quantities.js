
const quanties = document.getElementsByTagName("span");

const quantityButtons = document.getElementsByClassName("quantity-button");

for (const quantityButton of quantityButtons) {
    quantityButton.onclick = function () { quantityChange(quantityButton) };
}

function quantityChange(button) {
    let batch = button.value;
    quanties[0].innerHTML = 1 * batch;
    quanties[4].innerHTML = 1 * batch;
    if (batch == 1) {
        quanties[1].innerHTML = '&frac34';
        quanties[2].innerHTML = '&frac12';
        quanties[3].innerHTML = '2&frac12';
    }
    if (batch == 2) {
        quanties[1].innerHTML = '1&frac12';
        quanties[2].innerHTML = 1;
        quanties[3].innerHTML = 5;
    }
    if (batch == 3) {
        quanties[1].innerHTML = '2&frac14';
        quanties[2].innerHTML = '1&frac12';
        quanties[3].innerHTML = '7&frac12';
    }
}


