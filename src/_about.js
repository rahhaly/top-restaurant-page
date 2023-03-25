import { createElementWithClass, createSVG, createImg } from './_functions';

const about = createElementWithClass('div', 'about-page');
const aboutHero = createElementWithClass('div', 'about-hero');
const heroHeader = createElementWithClass('div', 'about-hero__header');
const heroIcon = createSVG(
  '0 0 1024 1024',
  'M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z',
  'about-hero__icon'
);
const heroTitle = createElementWithClass('p', 'about-hero__title');
heroTitle.textContent = 'The Restaurant';
heroHeader.append(heroIcon, heroTitle);
aboutHero.appendChild(heroHeader);

const aboutContact = createElementWithClass('div', 'about-contact');
const story = createElementWithClass('div', 'story');
const storyTitle = createElementWithClass('h2', 'story-title');
storyTitle.textContent = 'Our Story';

const storyPar = document.createElement('p');
storyPar.textContent =
  ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem omnis error quasi, asperiores eius officiis temporibus blanditiis qui, aspernatur numquam obcaecati quibusdam tempora suscipit, itaque libero ducimus? Voluptatibus, velit esse!';
story.append(storyTitle, storyPar);

const locationGroup = createElementWithClass('div', 'contact__contact-group');
const locationIcon = createImg(
  './icons/location-svgrepo.svg',
  'location icon',
  'contact-group__icon'
);
const locationPar = document.createElement('p');
locationPar.textContent = 'Lorem, ipsum dolor.';
locationGroup.append(locationIcon, locationPar);

const phoneGroup = createElementWithClass('div', 'contact__contact-group');
const phoneIcon = createImg(
  './icons/phone-svgrepo.svg',
  'phone icon',
  'contact-group__icon'
);
const phonePar = document.createElement('p');
phonePar.textContent = '+1 134 343 678';
phoneGroup.append(phoneIcon, phonePar);

aboutContact.append(story, locationGroup, phoneGroup);

about.append(aboutHero, aboutContact);
export default about;
