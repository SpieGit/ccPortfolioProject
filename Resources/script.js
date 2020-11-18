const faAngleDown = document.getElementById('faAngleDown');
const sub = document.getElementById('sub')

const rotate180deg = event => {
    if (getComputedStyle(sub).display === 'none') {
        event.target.style.transform = 'rotate(180deg)';
        sub.style.display = 'block';
    } else {
        event.target.style.transform = '';
        sub.style.display = 'none';
    }
}

faAngleDown.addEventListener('click', rotate180deg);
