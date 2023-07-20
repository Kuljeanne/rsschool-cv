const PROJECTS_CONTAINER = document.querySelector(".projects");

const createNode = (tag, cls) => {
  const node = document.createElement(tag);
  node.classList.add(cls);

  return node;
};

const createProjectCard = ({ title, link, imgSrc, description }) => {
  const card = createNode("a", "project");
  card.href = link;
  card.target = "_blank";

  const img = createNode("div", "img");
  img.style.backgroundImage = `url(${imgSrc})`;

  const info = createNode("div", "project__info");

  const name = createNode("h5", "project__title");
  name.innerText = title;

  const descr = createNode("p", "project__description");
  descr.innerText = description;

  card.append(img, info);
  info.append(name, descr);

  return card;
};

data.map(({ title, link, imgSrc, description }) => {
  const projectNode = createProjectCard({ title, link, imgSrc, description });
  PROJECTS_CONTAINER.append(projectNode);
});


// mobile menu

const BURGER = document.querySelector(".burger");
const MENU = document.querySelector(".menu__list");

const mobileMenuHandler = () => {
  MENU.classList.toggle("menu__list_mobile");
};

BURGER.addEventListener("click", mobileMenuHandler);

window.addEventListener("click", (e) => {
  const closestParent = e.target.closest(".menu");
  console.log(!null);
  if (!closestParent && MENU.classList.contains("menu__list_mobile")) {
    MENU.classList.remove("menu__list_mobile");
  }
});
