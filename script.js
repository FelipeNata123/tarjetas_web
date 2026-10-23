let currentIndex = 0;
const slider = document.getElementById('slider');
const buttons = [document.getElementById('btn-0'), document.getElementById('btn-1'), document.getElementById('btn-2')];
const cards = [document.getElementById('card-0'), document.getElementById('card-1'), document.getElementById('card-2')];

function goToCard(index) {
    currentIndex = index;
    slider.style.transform = `translateX(-${index * 100 / 3}%)`;
    buttons.forEach((btn, i) => {
        btn.className = 'nav-btn';
        cards[i].classList.remove('active');
        if (i === index) {
            cards[i].classList.add('active');
            if (index === 0) btn.classList.add('active-green');
            if (index === 1) btn.classList.add('active-yellow');
            if (index === 2) btn.classList.add('active-red');
        }
    });
}

// Control por gestos Swipe en pantalla táctil
let touchStartX = 0, touchEndX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, false);
document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50 && currentIndex < 2) goToCard(currentIndex + 1);
    if (touchEndX > touchStartX + 50 && currentIndex > 0) goToCard(currentIndex - 1);
}, false);