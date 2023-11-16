
$(".directions li").prepend('<button class="hide-direction" aria-label="Hide step"><span aria-hidden="true">&#10004;</span></button>')

const buttons = document.getElementsByClassName("hide-direction");

for (const button of buttons) {
    button.onclick = function () { HideDirction(button) };
}

function HideDirction(button) {
    let DirItem = button.parentElement;
    DirItem.classList.toggle("hidden");
}

