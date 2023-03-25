import header from './_header';
import footer from './_footer';
import home from './_home';
import menu from './_menu';
import about from './_about';

export default function InitDisplay() {
  const body = document.getElementById('body');
  const main = document.createElement('main');
  main.classList.add('main-content', 'container');

  body.append(header, main, footer);

  const navPages = document.querySelectorAll('.primary-nav li');
  const loadActivePage = () => {
    const active = document.querySelector('.primary-nav li.active');
    main.textContent = '';
    if (active.dataset.page === 'home') main.appendChild(home);
    else if (active.dataset.page === 'menu') main.appendChild(menu);
    else if (active.dataset.page === 'about') main.appendChild(about);
  };
  loadActivePage();

  const setActive = (target) => {
    navPages.forEach((navItem) => navItem.classList.remove('active'));
    target.classList.add('active');
  };

  navPages.forEach((item) =>
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) return;
      setActive(e.target);
      loadActivePage();
    })
  );

  const exploreBtn = document.getElementById('explore-btn');
  exploreBtn.addEventListener('click', () => {
    const menu = document.querySelector('[data-page=menu]');
    setActive(menu);
    loadActivePage();
  });

  const toggleNav = () => {
    if (primaryNav.dataset.expanded != 'true')
      primaryNav.dataset.expanded = 'true';
    else primaryNav.dataset.expanded = 'false';
  };
  const primaryNav = document.querySelector('.primary-nav');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  mobileNavToggle.addEventListener('click', toggleNav);
}
