const popup = document.getElementById("popup");
const title = document.getElementById("popup-title");
const main = document.getElementById("main");
const welcomeOfferSection = document.getElementById("welcomeOfferSection");
const stepsSection = document.getElementById("stepsSection");

const popupAnimationClasses = [
  { name: "popup_show", element: popup },
  { name: "main_hide", element: main },
  { name: "title_show", element: title },
];

if (localStorage.getItem("showPopup")) {
  animatePopup();
}

const imageWheelButton = document.getElementById("imageWheelButton");
const wheelArrow = document.getElementById("wheelArrow");
const externalWheel = document.getElementById("externalWheel");
const insideWheel = document.getElementById("insideWheel");

const wheelAnimationClasses = [
  { name: "welcome-offer-section__wheel-arrow_rotate", element: wheelArrow },
  {
    name: "welcome-offer-section__wheel-external_rotate",
    element: externalWheel,
  },
  { name: "welcome-offer-section__wheel-inside_rotate", element: insideWheel },
];

function addAnimationClasses(animationArray) {
  animationArray.forEach(({ name, element }) => element.classList.add(name));
}

function handleSpinButtonClick() {
  localStorage.setItem("showPopup", true);

  imageWheelButton.style.animation = "none";

  addAnimationClasses(wheelAnimationClasses);
}

function hideBlocks(blocks) {
  blocks.forEach((block) => (block.style.display = "none"));
}

function animatePopup() {
  hideBlocks([welcomeOfferSection, stepsSection]);
  addAnimationClasses(popupAnimationClasses);
}

imageWheelButton.addEventListener("click", handleSpinButtonClick);

insideWheel.addEventListener("animationend", animatePopup);

function addQueryParamsToLinks() {
  const joinLink = document.getElementById("joinLink");
  const logoLink = document.getElementById("logoLink");

  const links = [joinLink, logoLink];

  links.forEach((link) => {
    const currentURL = window.location.href;
    const [_, queryString] = currentURL.split("?");
    const params = new URLSearchParams(queryString);

    if (params) {
      const paramsString = params.toString();

      link.href = `${link.href}?${paramsString}`;
    }
  });
}

addQueryParamsToLinks();
