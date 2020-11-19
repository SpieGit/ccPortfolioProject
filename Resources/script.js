const faProjects = document.getElementById('faProjects');
const faContact = document.getElementById('faContact');
const navContact = document.getElementById('navContact');
const navProjects = document.getElementById('navProjects');
const sidebar = document.getElementById('sidebar');
const sandwich = document.getElementById('sandwich__container');
const faBars = document.querySelector('.fa-bars');
const header = document.querySelector('.header');
const contact = document.querySelector('.contact__container');
const contactLi = document.querySelector('.contact__container li');

const rotate90deg = event => {
    if (event.target === navProjects) {
        if (getComputedStyle(faProjects).transform !== 'none') {
            faProjects.style.transform = '';    
        } else {
            faProjects.style.transform = 'rotate(-90deg)';
        }
    } else if (event.target == navContact) {
        if (getComputedStyle(faContact).transform !== 'none') {
            faContact.style.transform = '';
            contact.style.display = 'none';
        } else {
            faContact.style.transform = 'rotate(-90deg)';
            contact.style.display = 'block';
        }
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

[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('click', rotate90deg));
[sandwich, faBars].forEach(arrElement => arrElement.addEventListener('click', shiftLeft));