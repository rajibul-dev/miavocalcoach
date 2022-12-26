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
          top: offsetPosition - 11,
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
const paypalButtons = {
  euro40: `<div id="smart-button-container">
  <div style="text-align: center;">
    <div id="paypal-button-container"></div>
  </div>
</div>
<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
<script>
function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'white',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"description":"Singular 30-minute voice lesson","amount":{"currency_code":"EUR","value":40}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {

        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');

      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();

</script>
`,
  euro80: `<div id="smart-button-container">
  <div style="text-align: center;">
    <div id="paypal-button-container"></div>
  </div>
</div>
<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
<script>
function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'white',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"description":"Singular 1 hour voice lesson","amount":{"currency_code":"EUR","value":80}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {

        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');

      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();

</script>`,
  euro120: `<div id="smart-button-container">
  <div style="text-align: center;">
    <div id="paypal-button-container"></div>
  </div>
</div>
<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
<script>
function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'white',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"description":"Package of 4 30-minute voice lessons","amount":{"currency_code":"EUR","value":120}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {

        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');

      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();

</script>`,
  euro240: `<div id="smart-button-container">
<div style="text-align: center;">
  <div id="paypal-button-container"></div>
</div>
</div>
<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"></script>
<script>
function initPayPalButton() {
paypal.Buttons({
  style: {
    shape: 'pill',
    color: 'white',
    layout: 'vertical',
    label: 'buynow',
    
  },

  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{"description":"Package of 4 one hour voice lessons","amount":{"currency_code":"EUR","value":240}}]
    });
  },

  onApprove: function(data, actions) {
    return actions.order.capture().then(function(orderData) {

      // Full available details
      console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

      // Show a success message within this page, e.g.
      const element = document.getElementById('paypal-button-container');
      element.innerHTML = '';
      element.innerHTML = '<h3>Thank you for your payment!</h3>';

      // Or go to another URL:  actions.redirect('thank_you.html');

    });
  },

  onError: function(err) {
    console.log(err);
  }
}).render('#paypal-button-container');
}
initPayPalButton();

</script>`,
};

const currency = document.querySelectorAll(".currency");
const prices = document.querySelectorAll(".dynamic-price");

const buyBtns = document.querySelectorAll(".buy-btn");

const checkoutEl = document.querySelector(".dynamic-checkout");
const paypalPopup = document.querySelector(".payment-popup");
const overlay2 = document.querySelector(".overlay2");
const closeBtn = document.querySelector(".close-btn");

const price40 = document.querySelector(".buy-btn-40");
const price80 = document.querySelector(".buy-btn-80");
const price120 = document.querySelector(".buy-btn-120");
const price240 = document.querySelector(".buy-btn-240");

const closePopup = function () {
  overlay2.classList.remove("overlay-open2");
  paypalPopup.classList.remove("popup-open");
  html.classList.remove("no-scroll");
};

buyBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    overlay2.classList.add("overlay-open2");
    paypalPopup.classList.add("popup-open");
    html.classList.add("no-scroll");
  });
});
[overlay2, closeBtn].forEach((element) => {
  element.addEventListener("click", closePopup);
});

async function fetchLocation() {
  let url = "https://ipinfo.io/json?token=3e985ec775d67c";
  let response = await fetch(url);
  let data = await response.json();
  return data.country;
}

async function getCountry() {
  const userCountry = await fetchLocation();

  if (userCountry === "US") {
    currency.forEach((cur) => (cur.textContent = "$"));
  }
}
getCountry();
