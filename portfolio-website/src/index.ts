export { Components, JSX } from './components';

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("nav ul li a");

document.onscroll = () =>
{
    var y = scrollY;
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (y >= sectionTop - 10) 
        {
            current = section.getAttribute("id"); 
        }
    });

    navlinks.forEach((link) => {

        link.classList.remove("active");

        if (link.classList.contains(current)) 
        {
            link.classList.add("active");
        }
    });
};