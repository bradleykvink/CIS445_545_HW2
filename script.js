window.addEventListener("scroll", scrollFunction);
window.addEventListener("load", initToggle);
const root = window.document.documentElement;

function scrollFunction() {
    const button = document.getElementById("scroll-top");
    if (window.scrollY > 100 && button) {
        button.style.left = "2rem";
    } else {
        button.style.left = "-14rem";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------------------------------------------
// Day and Night Mode

function initToggle() {
    const day = document.getElementById("day-mode");
    const night = document.getElementById("night-mode");

    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }

    console.log(day, night)
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        day.style.opacity = "100%";
        night.style.opacity = "0%";
    } else {
        night.style.opacity = "100%";
        day.style.opacity = "0%";
    }
}

function toggleMode() {
    const day = document.getElementById("day-mode");
    const night = document.getElementById("night-mode");

    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
        root.classList.add('dark');
        root.classList.remove('light');
        night.style.opacity = "100%";
        day.style.opacity = "0%";
    } else {
        localStorage.setItem('theme', 'light');
        root.classList.add('light');
        root.classList.remove('dark');
        day.style.opacity = "100%";
        night.style.opacity = "0%";
    }
}