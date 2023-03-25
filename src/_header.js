import { createElementWithClass, createListItem } from './_functions';

const header = document.createElement('header');
header.setAttribute('id', 'primary-header');
header.classList.add('primary-header');

const logo = createElementWithClass('div', 'logo');

const logoImg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
logoImg.classList.add('logo__icon');
logoImg.setAttribute('viewBox', '0 0 1024 1024');
const logoIconPath = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'path'
);
logoIconPath.setAttribute(
  'd',
  'M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z'
);
logoImg.appendChild(logoIconPath);

const logoText = document.createElement('span');
logoText.textContent = 'Restaurant';

logo.appendChild(logoImg);
logo.appendChild(logoText);

const hr = createElementWithClass('div', 'header__hr');
const navToggleBtn = createElementWithClass('button', 'mobile-nav-toggle');
const nav = createElementWithClass('nav', 'primary-nav');
nav.dataset.expanded = 'false';
const navList = createElementWithClass(
  'ul',
  'nav__list',
  'underline-indicators',
  'uppercase'
);
navList.setAttribute('role', 'list');

const firstListItem = createListItem('Home', '01');
firstListItem.classList.add('active');

const secondListItem = createListItem('Menu', '02');

const thirdListItem = createListItem('About', '03');

navList.append(firstListItem, secondListItem, thirdListItem);
nav.append(navList);

header.append(logo, hr, nav, navToggleBtn);

export default header;
