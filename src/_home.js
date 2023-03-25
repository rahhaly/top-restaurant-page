import { createElementWithClass } from './_functions';

const homePage = createElementWithClass('div', 'home-page');

const heroWelcome = createElementWithClass('div', 'hero__welcome');
const firstPara = createElementWithClass(
  'p',
  'p',
  'text-clr-400',
  'fs-400',
  'uppercase'
);
firstPara.textContent = 'Deliver whatever you want very fast';
const secPara = createElementWithClass(
  'p',
  'p',
  'text-clr-accent',
  'fw-bold',
  'fs-600',
  'letter-spacing-1'
);
secPara.textContent = 'Eat, Drink, Enjoy';
const thirdPara = (document.createElement('p').textContent =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
heroWelcome.append(firstPara, secPara, thirdPara);

const welcomeBtnWrapper = createElementWithClass('div', 'btn-wrapper');
const heroBtn = createElementWithClass('button', 'btn');
heroBtn.textContent = 'Explore';
heroBtn.id = 'explore-btn';
welcomeBtnWrapper.appendChild(heroBtn);
heroWelcome.appendChild(welcomeBtnWrapper);

const heroImgWrapper = createElementWithClass('div', 'hero__img-wrapper');
const heroImg = document.createElement('img');
heroImg.alt = 'food on the table';
heroImg.src = './imgs/micheile-henderson-unsplash.jpg';
heroImgWrapper.appendChild(heroImg);

homePage.append(heroWelcome, heroImgWrapper);

export default homePage;
