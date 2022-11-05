"use strict";

//////////////////////////////////////
// Making Mobile Navigation work
//////////////////////////////////////

const mobileNavContainer = document.querySelector(".mobile-nav-container");
const mobileNavBtnOut = document.querySelector(".nav-icon-outside");
const mobileNavIn = document.querySelector(".nav-icon-inside");
const overlay = document.querySelector(".overlay");
const html = document.querySelector("html");

function openCloseNav() {
  mobileNavContainer.classList.toggle("mobile-nav-open");
  overlay.classList.toggle("overlay-open");
  html.classList.toggle("no-scroll");
}

mobileNavBtnOut.addEventListener("click", openCloseNav);
overlay.addEventListener("click", openCloseNav);
mobileNavIn.addEventListener("click", openCloseNav);

//////////////////////////////////////
// Navigation Smooth scrolling
//////////////////////////////////////

// Back to top button
const toTop = document.querySelector(".btt");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 8000) {
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

      if (href2 === "#calendly") {
        window.scrollTo({
          top: offsetPosition - 44,
          behavior: "smooth",
        });
      } else if (href2 === "#pricing") {
        window.scrollTo({
          top: offsetPosition + 30,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    scrollToTargetAdjusted();
    mobileNavContainer.classList.toggle("mobile-nav-open");
    overlay.classList.toggle("overlay-open");
    if (link.classList.contains("mobile-nav-links"))
      html.classList.toggle("no-scroll");
  });
});

//////////////////////////////////////
// Implementing US prices
//////////////////////////////////////
const currency = document.querySelectorAll(".currency");
const prices = document.querySelectorAll(".dynamic-price");

async function fetchText() {
  let url = "https://ipinfo.io/json?token=3e985ec775d67c";
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data.country);

  // data.country = "US";
  if (data.country === "US") {
    currency.forEach((cur) => (cur.textContent = "$"));
  }
}
fetchText();
