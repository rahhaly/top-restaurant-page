export function createElementWithClass(tag, ...classes) {
  const target = document.createElement(tag);
  for (let i = 0; i < classes.length; i++) target.classList.add(classes[i]);
  return target;
}
export function createSVG(viewBox, pathD, ...classes) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', viewBox);
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathD);
  svg.appendChild(path);
  for (let i = 0; i < classes.length; i++) svg.classList.add(classes[i]);
  return svg;
}
export function createLink(href, target, ...classes) {
  const link = document.createElement('a');
  link.href = href;
  link.target = target;
  for (let i = 0; i < classes.length; i++) link.classList.add(classes[i]);
  return link;
}

export function createListItem(text, num) {
  const item = document.createElement('li');
  const itemSpan = document.createElement('span');
  itemSpan.setAttribute('aria-hidden', 'true');
  itemSpan.textContent = num;
  item.appendChild(itemSpan);
  item.innerHTML += text;
  item.dataset.page = text.toLowerCase();
  return item;
}

export function createMenuCard(title, desc, svg) {
  const card = createElementWithClass('div', 'menu__card');

  const cardText = createElementWithClass('div', 'card__text');
  const cardTitle = createElementWithClass('p', 'card__title');
  cardTitle.textContent = title;
  const cardDesc = createElementWithClass('p', 'card__desc');
  cardDesc.textContent = desc;
  cardText.append(cardTitle, cardDesc);

  const svgWrapper = createElementWithClass('div', 'card__img-wrapper');
  svgWrapper.appendChild(svg);

  card.append(cardText, svgWrapper);
  return card;
}

export function createImg(src, alt, ...classes) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  for (let i = 0; i < classes.length; i++) img.classList.add(classes[i]);
  return img;
}
