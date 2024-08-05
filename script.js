// відкриття телефонного меню
const iconBurger = document.querySelector(".menu-item");
const menuBody = document.querySelector(".container-menu");
const mainBody = document.querySelector("body");

iconBurger.addEventListener("click", function (e) {
  iconBurger.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  mainBody.classList.toggle("disactive");
});

// i do not know why do i need it
if (iconBurger.classList.contains("._active")) {
  iconBurger.classList.remove("_active");
  menuBody.classList.remove("_active");
  mainBody.classList.remove("disactive");
}

//плавна прокрутка
const allLinks = document.querySelectorAll("li[data-goto]");
if (allLinks.length > 0) {
  allLinks.forEach((allLinks) => {
    allLinks.addEventListener("click", scroleToLink);

    function scroleToLink(e) {
      const oneLink = e.target;
      if (
        oneLink.dataset.goto &&
        document.querySelector(oneLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(oneLink.dataset.goto);
        const goLength = gotoBlock.getBoundingClientRect().top + pageYOffset;

        window.scrollTo({
          top: goLength,
          behavior: "smooth",
        });

        iconBurger.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        mainBody.classList.toggle("disactive");
        e.preventDefault();
      }
    }
  });
}

const screenWidth = screen.width;

const footerBlock = document.querySelector(".container-button");
const buttonMore = document.createElement("button");

if (screenWidth <= 760) {
  footerBlock.appendChild(buttonMore);
  buttonMore.innerHTML = "MORE";
  buttonMore.className = "button-more";
}

const contentFooter = document.querySelector(".content-footer");
const containerFooter = document.querySelector(".container-footer");

buttonMore.addEventListener("click", function showInfo(e) {
  containerFooter.classList.toggle("_active");
  contentFooter.classList.toggle("_active");
});

if (buttonMore.classList.contains("._active")) {
  buttonMore.classList.remove("_active");
  contentFooter.classList.remove("_active");
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker зареєстрований:", registration);
      })
      .catch((registrationError) => {
        console.log(
          "Service Worker реєстрація зазнала невдачі:",
          registrationError
        );
      });
  });
}
