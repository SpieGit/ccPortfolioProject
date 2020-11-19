const faProjects = document.getElementById('faProjects');
const faContact = document.getElementById('faContact');
const navContact = document.getElementById('navContact');
const navProjects = document.getElementById('navProjects');
const sidebar = document.getElementById('sidebar');
const sandwich = document.getElementById('sandwich__container');
const faBars = document.querySelector('.fa-bars')

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

const shiftLeft = () => {

    if (getComputedStyle(sidebar).right === '-250px') {
        sidebar.style.right = '-10px';
        sandwich.style.backgroundColor = 'rgba(255,255,255,0)'
    } else if (getComputedStyle(sidebar).right === '-10px') {
        sidebar.style.right = '-250px';
        sandwich.style.backgroundColor = ''
    }
}

[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('mouseover', rotateNeg90deg));
[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('mouseout', resetTransform));
[sandwich, faBars].forEach(arrElement => arrElement.addEventListener('click', shiftLeft));
