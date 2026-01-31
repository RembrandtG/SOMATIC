const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

let toggle = true;

burger.addEventListener('click', () => {

  if (toggle) {
    menu.classList.add('menu-active');
    toggle = false;
    document.body.classList.add("scroll")
  } else {
    menu.classList.remove('menu-active');
    toggle = true;
    document.body.classList.remove("scroll")
  }
});

const sections = document.querySelectorAll('.page-section');
const zones = document.querySelectorAll('.zone');
const navItems = document.querySelectorAll('.nav-item');



const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      zones.forEach(z => z.classList.toggle('active', z.id === id));
      navItems.forEach(n => n.classList.toggle('active', n.dataset.target === id));
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => observer.observe(sec));

// Клики по навигации
navItems.forEach(item => {
  item.addEventListener('click', () => {    
    document.getElementById(item.dataset.target)
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const hScroll = document.getElementById('hScroll');



