// Get payment popup element to ascend buttons as child
const paymentPopupEl = document.querySelector(".payment-popup");

// create the pricing credentials object
const pricingDetails = [
  // Euro dollar instences
  {
    currency: "eur",
    currencySymbol: "€",
    amount: 40,
    heading: "Singular 30-minute voice lesson",
  },
  {
    currency: "eur",
    currencySymbol: "€",
    amount: 80,
    heading: "Singular 1 hour voice lesson",
  },
  {
    currency: "eur",
    currencySymbol: "€",
    amount: 120,
    heading: "Package of 4 30-minute voice lessons",
  },
  {
    currency: "eur",
    currencySymbol: "€",
    amount: 240,
    heading: "Package of 4 one hour voice lessons",
  },
];

pricingDetails.forEach((pricing, index) => {
  const { currency, amount, currencySymbol, heading } = pricing;
  const instenceNum = index + 1;

  const html = `<div class="dynamic-checkout ${currency}${amount}">

      <h3 class="pop-up-price"><span class="currency">${currencySymbol}</span>${amount}</h3>
      <p class="pop-up-item-name">${heading}</p>

      <div id="paypal-button-container">
        <div id="paypal-button-${instenceNum}" />
      </div>

    </div>`;

  // add the html to the target place
  const placeholder = document.createElement("div");
  placeholder.innerHTML = html;
  const node = placeholder.firstElementChild;
  paymentPopupEl.appendChild(node);

  function createPayPalButton(containerId) {
    paypal
      .Buttons({
        style: {
          height: 55,
          size: "large",
          shape: "pill",
          color: "white",
          label: "buynow",
          layout: "vertical",
          tagline: false,
        },
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
                secret:
                  "EA0xL-MkKok2t5hU4m1gRRcEVN3qc3g-ZcBmFV1z_jDP8lFKaR3jQ_VuZ9DVFnOPdVXXLf9qjsKJvh52",
                description: heading,
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert("Transaction completed by " + details.payer.name.given_name);
          });
        },
      })
      .render(`#${containerId}`);
  }

  createPayPalButton(`paypal-button-${instenceNum}`);
});
