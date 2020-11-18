const faProjects = document.getElementById('faProjects');
const faContact = document.getElementById('faContact');
const navContact = document.getElementById('navContact');
const navProjects = document.getElementById('navProjects');

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

[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('mouseover', rotateNeg90deg));
[navProjects, navContact].forEach(arrElement => arrElement.addEventListener('mouseout', resetTransform));

