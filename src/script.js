import './style.css';

/* Navbar*/
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar__link');

let activeLink = navLinks[0];
activeLink.classList.add('navbar__link_active');

/*Progress bars*/
const progress = document.querySelector('.about-me__skills');
const progressBarPercents = [90, 85, 90, 95, 85, 50, 55];
const progressLevel = document.querySelectorAll('.about-me__skill-level');
const progressValue = document.querySelectorAll('.about-me__description span');

document.addEventListener('scroll', () => {
  main();
});

main();

/*Applies styles to an active navbar link and fills the progress bars*/
function main() {
  if (window.scrollY + window.innerHeight >= progress.offsetTop) {
    progressBarPercents.forEach((percent, index) => {
      progressLevel[index].style.width = `${percent}%`;
      progressValue[index].textContent = percent;
    });
  }

  sections.forEach((section, index) => {
    if (window.scrollY >= section.offsetTop - 100) {
      if (activeLink !== navLinks[index]) {
        activeLink.classList.remove('navbar__link_active');
        navLinks[index].classList.add('navbar__link_active');
        activeLink = navLinks[index];
      }

      return;
    }
  });
}
