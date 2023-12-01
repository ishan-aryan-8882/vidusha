let showFace = false;
document.querySelector('button').addEventListener('click', function() {
    const brightElement = document.querySelector(".bright");
    brightElement.classList.toggle('reduceopacity');
    brightElement.classList.toggle('borderright');
    if (!showFace) {
        brightElement.style.background = 'rgb(183, 190, 143)';
        brightElement.style.backgroundImage = 'none';
    } else {
        let imgUrl = 'me.jpg';
        brightElement.style.backgroundImage = `url(${imgUrl})`;
        brightElement.style.backgroundSize = 'cover';
    }
    showFace = !showFace;
});
