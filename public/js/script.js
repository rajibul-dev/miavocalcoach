"use strict";

//////////////////////////////////////
// Navigation Smooth scrolling.
//////////////////////////////////////

// Back to top button
const toTop = document.querySelector(".btt");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 6500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gathering navigation links
let firstNavLink;
const nonFirstallNavLinks = [];
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (href.startsWith("#") && href !== "#about") nonFirstallNavLinks.push(link);
  if (href === "#about") firstNavLink = link;
});

// For about section nav link
firstNavLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// For all the other nav links
nonFirstallNavLinks.forEach((link2) => {
  link2.addEventListener("click", (e) => {
    e.preventDefault();
    const href2 = link2.getAttribute("href");

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
