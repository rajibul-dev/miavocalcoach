"use strict";

//////////////////////////////////////
// Contact form expansion
//////////////////////////////////////
const textArea = document.querySelector("textarea");

textArea.addEventListener("keyup", (e) => {
  textArea.style.height = "";
  let setHeight = e.target.scrollHeight;
  textArea.style.height = setHeight + "px";
});

//////////////////////////////////////
// Making Mobile Navigation work
//////////////////////////////////////

const mobileNavContainer = document.querySelector(".mobile-nav-container");
const mobileNavBtnOut = document.querySelector(".nav-icon-outside");
const mobileNavIn = document.querySelector(".nav-icon-inside");
const overlay = document.querySelector(".overlay");
const html = document.querySelector("html");

function openNav() {
  mobileNavContainer.classList.add("mobile-nav-open");
  overlay.classList.add("overlay-open");
  html.classList.add("no-scroll");
}
function closeNav() {
  mobileNavContainer.classList.remove("mobile-nav-open");
  overlay.classList.remove("overlay-open");
  html.classList.remove("no-scroll");
}

mobileNavBtnOut.addEventListener("click", openNav);
overlay.addEventListener("click", closeNav);
mobileNavIn.addEventListener("click", closeNav);

//////////////////////////////////////
// Navigation Smooth scrolling
//////////////////////////////////////

// Back to top button
const toTop = document.querySelector(".btt");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 8200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

// Logo to homepage
const logoLink = document.querySelector(".logo-link");

logoLink.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

// Gathering navigation links
const firstNavLink = [];
const nonFirstallNavLinks = [];
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href.startsWith("#") && href !== "#about") nonFirstallNavLinks.push(link);
  if (href === "#about") firstNavLink.push(link);
});

// For about section nav link
firstNavLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    mobileNavContainer.classList.toggle("mobile-nav-open");
    overlay.classList.toggle("overlay-open");
    if (link.classList.contains("mobile-nav-links"))
      html.classList.toggle("no-scroll");
  });
});

// For all the other nav links
nonFirstallNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href2 = link.getAttribute("href");

    function scrollToTargetAdjusted() {
      const element = document.querySelector(href2);
      const headerOffset = document
        .querySelector("header")
        .getBoundingClientRect().height;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    scrollToTargetAdjusted();
    if (!link.classList.contains("paid-btn")) {
      mobileNavContainer.classList.toggle("mobile-nav-open");
      overlay.classList.toggle("overlay-open");
      if (link.classList.contains("mobile-nav-links"))
        html.classList.toggle("no-scroll");
    }
  });
});

//////////////////////////////////////
// Implementing US prices
// HANDLING PAYMENTS WITH PAYPAL
//////////////////////////////////////
let euroScript = document.querySelector("#paypal-script");
let usScript = document.createElement("script");
usScript.src =
  "https://www.paypal.com/sdk/js?client-id=AWlVsjH3FBAgYWGVKCzU_voA0e27xMcOTEqoGnU2967MUU_o1aiSpRWzBYIYRmdGW651kNba9Fwwxvq6&components=buttons&currency=USD";

const currency = document.querySelectorAll(".currency");
const prices = document.querySelectorAll(".dynamic-price");
const buyBtns = document.querySelectorAll(".buy-btn");

const checkoutEls = document.querySelectorAll(".dynamic-checkout");
const paypalPopup = document.querySelector(".payment-popup");
const overlay2 = document.querySelector(".overlay2");
const closeBtn = document.querySelector(".close-btn");

const eur40El = document.querySelector(".eur40");
const eur80El = document.querySelector(".eur80");
const eur120El = document.querySelector(".eur120");
const eur240El = document.querySelector(".eur240");

const usd40El = document.querySelector(".usd40");
const usd80El = document.querySelector(".usd80");
const usd120El = document.querySelector(".usd120");
const usd240El = document.querySelector(".usd240");

// For enabling USD for US people:
// async function fetchLocation() {
//   let url = "https://ipinfo.io/json?token=3e985ec775d67c";
//   let response = await fetch(url);
//   let data = await response.json();
//   return data.country;
// }

// async function getCountry() {
//   const userCountry = await fetchLocation();

//   if (userCountry === "US") {
//     currency.forEach((cur) => (cur.textContent = "$"));
//     euroScript.src =
//       "https://www.paypal.com/sdk/js?client-id=AWlVsjH3FBAgYWGVKCzU_voA0e27xMcOTEqoGnU2967MUU_o1aiSpRWzBYIYRmdGW651kNba9Fwwxvq6&components=buttons&currency=USD";

//     for (let i = 1; i <= 8; i++) {
//       createPayPalButton(`paypal-button-${i}`);
//     }
//     for (let i = 1; i <= 8; i++) {
//       document.getElementById(`paypal-button-${i}`).firstChild.style.display =
//         "none";
//     }
//   }
// }
// getCountry();

buyBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    let codeExecuted = false;

    checkoutEls.forEach((checkoutEl) => {
      // $40
      if (
        !codeExecuted &&
        button.classList.contains("buy-btn-40") &&
        checkoutEl.classList.contains("usd")
      ) {
        usd40El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // $80
      else if (
        !codeExecuted &&
        button.classList.contains("buy-btn-80") &&
        checkoutEl.classList.contains("usd")
      ) {
        usd80El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // $120
      else if (
        !codeExecuted &&
        button.classList.contains("buy-btn-120") &&
        checkoutEl.classList.contains("usd")
      ) {
        usd120El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // $240
      else if (
        !codeExecuted &&
        button.classList.contains("buy-btn-240") &&
        checkoutEl.classList.contains("usd")
      ) {
        usd240El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // €40
      else if (!codeExecuted && button.classList.contains("buy-btn-40")) {
        eur40El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // €80
      else if (!codeExecuted && button.classList.contains("buy-btn-80")) {
        eur80El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // €120
      else if (!codeExecuted && button.classList.contains("buy-btn-120")) {
        eur120El.classList.add("show-checkout");
        codeExecuted = true;
      }

      // €240
      else if (!codeExecuted && button.classList.contains("buy-btn-240")) {
        eur240El.classList.add("show-checkout");
        codeExecuted = true;
      }
    });

    overlay2.classList.add("overlay-open2");
    paypalPopup.classList.add("popup-open");
    html.classList.add("no-scroll");
  });
});

const closePopup = function () {
  overlay2.classList.remove("overlay-open2");
  paypalPopup.classList.remove("popup-open");
  html.classList.remove("no-scroll");
  checkoutEls.forEach((el) => el.classList.remove("show-checkout"));
};

[overlay2, closeBtn].forEach((element) => {
  element.addEventListener("click", closePopup);
});
