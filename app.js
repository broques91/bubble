const message = document.querySelector('p');
const pauseMessage = document.querySelector('.pause');
const score = document.querySelector('h3');
let counter = 0;
pauseMessage.style.display = 'none';

// Bulle

const bubbleMaker = () => {
    const bubble = document.createElement('span');
    bubble.classList.add('bubble');
    document.body.appendChild(bubble);

    // Taille
    const size = Math.random() * 200 + 100 + 'px';
    bubble.style.height = size;
    bubble.style.width = size;

    // Positionnement
    bubble.style.top = Math.random() * 100 + 50 + '%';
    bubble.style.left = Math.random() * 100 + '%';

    // Direction axe x
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left', Math.random() * 100 + '%');

    // Target
    bubble.addEventListener('click', () => {
        counter++;
        score.textContent = counter;
        bubble.remove();
    });

    // Durée de vie
    setTimeout(() => {
        bubble.remove();
    }, 8000);
};

// Etats

let interval;
let running = true;

const start = () => {
    interval = setInterval(bubbleMaker, 1000);
    running = true;
    message.style.visibility = 'hidden';
    pauseMessage.style.display = 'none';
};

const pause = () => {
    clearInterval(interval);
    running = false;
    message.textContent = 'Pause';
    message.style.visibility = 'visible';
    pauseMessage.style.display = 'block';
};

const reset = () => {
    clearInterval(interval);
    counter = 0;
    running = false;
    message.textContent = 'Press Enter to Start';
    pauseMessage.style.display = 'none';
};

// Commandes

window.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        start();
    } else if (e.key === 'p' || e.key === 'P') {
        pause();
    } else if (e.key === 'q' || e.key === 'Q') {
        if (confirm('Are you sure you want to quit ?')) {
            reset();
        } else {
            running = true;
        }
    }
});
