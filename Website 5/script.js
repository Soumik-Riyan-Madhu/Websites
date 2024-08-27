function typeText(names, element, typingSpeed = 200, erasingSpeed = 20) {
    let nameIndex = 0;
    let charIndex = 0;

    function type() {
        if (nameIndex < names.length) {
            const currentName = names[nameIndex];

            if (charIndex < currentName.length) {
                element.textContent += currentName[charIndex];
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, 1400);
            }
        } else {
            // If all names are typed, restart the animation
            nameIndex = 0;
            setTimeout(type, 1000);
        }
    }

    function erase() {
        const currentName = names[nameIndex];

        if (charIndex > 0) {
            element.textContent = currentName.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            // Move to the next name
            nameIndex++;
            setTimeout(type, 1000);
        }
    }

    // Calculate the width of the longest word
    const maxWidth = names.reduce((max, name) => Math.max(max, name.length), 0);

    // Set the initial width to center the text
    element.style.width = `${maxWidth}ch`;

    // Start the typing animation
    type();
}
document.addEventListener("DOMContentLoaded", function () {
    const namesToType = ["HI THERE !", "I'M SOUMIK RIYAN MADHU", "A WEB DESIGNER & CODER"];
    const typingTextElement = document.getElementById("typing-text");
    typeText(namesToType, typingTextElement);
});
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    header.style.backgroundColor = scrollPosition > 250 ? '#29323c' : 'transparent';
});

menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});