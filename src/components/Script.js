const circles = document.querySelectorAll('circle');
const progress = document.getElementById('progressBar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let counter = 1;

next.addEventListener('click', () => {
    counter++;

    if (counter > circles.length) {
        counter = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    counter--;

    if (counter < 1) {
        counter = 1;
    }

    update();
});

const update = () => {

};