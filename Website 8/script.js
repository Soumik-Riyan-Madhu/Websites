document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector('#header');
    var headerPlaceholder = document.getElementById('header-placeholder');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition >= header.offsetHeight) {
            header.classList.add('header-transparent');
            headerPlaceholder.style.display = 'block';
        } else {
            header.classList.remove('header-transparent');
            headerPlaceholder.style.display = 'none';
        }
    });

    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1.5 + 'px';
    });

    window.addEventListener('scroll', handleScroll);

    var navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection(link);
        });
    });
});

function handleScroll() {
    var sections = document.querySelectorAll('section');
    var scrollPosition = window.scrollY;

    sections.forEach(function (section) {
        var sectionTop = section.offsetTop - 50;
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(section.id);

            // Add 'active' class to the corresponding link in the navigation
            document.querySelector('.navigation a[href="#' + section.id + '"]').classList.add('active');
        } else if (scrollPosition >= sections[sections.length - 1].offsetTop) {
            setActiveLink(sections[sections.length - 1].id);
            // Disable scrolling down at the end of the page
            disableScroll();
        } else if (scrollPosition < 50) {
            setActiveLink('header');
            // Enable scrolling when scrolling up from the top
            enableScroll();
        } else {
            // Enable scrolling when scrolling up from other sections
            enableScroll();
        }
    });
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 150;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top <offset + height) {
             navLinks.forEach(links => {
                 links.classList.remove('active');
                 document.querySelector('header nav a[href*=' + id +']').classList.add('active')
             });
         };
    });
};

function scrollToSection(link) {
    var targetId = link.getAttribute('href');
    var targetSection = document.querySelector(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });

        setActiveLink(targetId);

        // Add a little extra space after scrolling to the last section
        if (targetSection === document.querySelectorAll('section')[document.querySelectorAll('section').length - 1]) {
            window.scrollBy(0, 2500);
        }
    }
}

function disableScroll() {
    // Disable scrolling down
    document.body.style.overflowY = 'hidden';
}

function enableScroll() {
    // Enable scrolling
    document.body.style.overflowY = 'scroll';
}
