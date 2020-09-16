function changeForm(link) {
    activeChange(link);
    let name = link.textContent.toLowerCase();
    
    let currentForm = document.getElementById(name);
    
    let forms = document.getElementsByClassName('form');
    for (let i = 0; i < forms.length; i++) {
        if (!forms[i].classList.contains('hide')) {
            forms[i].classList.add('hide')
        }
    }

    if (currentForm.classList.contains('hide')) {
        currentForm.classList.remove('hide');
    }
}

function activeChange(link) {
    let links = document.getElementsByClassName('active');
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('active');
    }

    if (!link.classList.contains('active')) {
        link.classList.add('active');
    }
}

function showCollapse() {
    let navbar = document.getElementById('navbar');
    let nav = navbar.getElementsByClassName('nav');
    nav[0].classList.toggle('hide');
}

window.onresize = function () {
    let navbar = document.getElementById('navbar');
    let sidebar = document.getElementById('sidebar');

    if (window.innerWidth < 991) {
        sidebar.classList.add('hide');
        navbar.classList.remove('hide');
    }
    if (window.innerWidth > 990 && sidebar.classList.contains('hide')) {
        sidebar.classList.remove('hide');
        navbar.classList.add('hide');
    }
}

window.onload = function () {
    let navbar = document.getElementById('navbar');
    let sidebar = document.getElementById('sidebar');

    if (window.innerWidth < 991) {
        sidebar.classList.add('hide');
        navbar.classList.remove('hide');
    }
    if (window.innerWidth > 990 && sidebar.classList.contains('hide')) {
        sidebar.classList.remove('hide');
        navbar.classList.add('hide');
    }
};