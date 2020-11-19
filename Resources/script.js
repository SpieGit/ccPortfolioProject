const faProjects = document.getElementById('faProjects');
const faContact = document.getElementById('faContact');
const navContact = document.getElementById('navContact');
const navProjects = document.getElementById('navProjects');
const sidebar = document.getElementById('sidebar');
const sandwich = document.getElementById('sandwich__container');

const rotateNeg90deg = event => {
    if (event.target.id === 'navProjects') {
        faProjects.style.transform = 'rotate(-90deg)';
    } else if (event.target.id === 'navContact') {
        faContact.style.transform = 'rotate(-90deg)';
    }
}

const resetTransform = event => {
    if (event.target.id === 'navProjects') {
        faProjects.style.transform = '';
    } else if (event.target.id === 'navContact') {
        faContact.style.transform = '';
    }
}

const shiftLeft = event => {
    
    if (getComputedStyle(sidebar).left === '250px') {
        sidebar.style.left = '10px';
    } else if (getComputedStyle(sidebar).left === '10px') {
        sidebar.style.left = '250px';
    }
}

[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('mouseover', rotateNeg90deg));
[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('mouseout', resetTransform));
sandwich.addEventListener('click', shiftLeft);
