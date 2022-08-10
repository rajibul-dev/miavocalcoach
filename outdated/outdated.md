# Macky's lesson

## HTML

<section class="video-section">
<div class="video-container">
<picture class="video-action">
<source srcset="img/webp/thumbnail-2.webp" type="image/webp" />
<source srcset="img/thumbnail-2.jpg" type="image/jpg" />

<img
class="lesson-thumbnail"
src="img/lesson-thumbnail.jpg"
alt="MiaVocalCoach"
/>
</picture>

<div class="play-btn-box">
<i class="fa-solid fa-play play-btn"></i>
</div>
<video
class="video none"
src="video/lesson-recording--miavocalcoach.mp4"
controls
></video>
</div>
<p class="video-title">Macky's first (free) lesson</p>
</section>

# Old Testimonials style

## CSS

/_ ////////////////////
TESTIMONIALS SECTION
//////////////////// _/

.testimonials-section {
padding: 9.6rem 0;
padding-bottom: 15.6rem;
}

.testimonials-container {
max-width: 120rem;
margin: 0 auto;
padding: 0 8%;
}

.testimonials-heading {
font-size: 3.2rem;
text-align: center;
margin-bottom: 6.4rem;
font-weight: 500;
line-height: 1.3;

display: table;
margin-left: auto;
margin-right: auto;
padding: 1.6rem 6.4rem;
background-color: #fff0f6;
color: #c2255c;
border: 1.6px solid #c2255c;
box-shadow: 1rem 1rem 0 #e649804c;
border-bottom: none;
border-right: none;
}

.grid-testimonials {
display: grid;
gap: 4.8rem;
}

.message-box {
display: flex;
gap: 1.2rem;
flex-direction: column;
padding: 3% 7%;

background-color: #fff0f6;

box-shadow: 1rem 1rem 0 #e649804c;
border-radius: 10px;
}

.message {
font-size: 1.8rem;
line-height: 1.7;
letter-spacing: 0.4px;
font-weight: 500;
letter-spacing: 0.4px;
}

.student-name {
font-size: 1.8rem;
line-height: 1.7;
letter-spacing: 0.4px;
font-weight: 500;
text-align: end;
}

.message,
.student-name {
color: #c2255c;
}

# Patreon button

## HTML

<a
class="button"
href="https://www.patreon.com/MiaVocalCoach"
target="\_blank"
rel="noopener noreferrer"

>

<div class="icon-box">
<i class="fa-brands fa-patreon"></i>
</div>
<span class="social-span" unselectable="on"
  >Support me on Patreon!</span
>
</a>

# Old Homepage CTA section

## HTML

<section class="materials">
<div class="materials-container">
<h2 class="join-ov-heading">join one voice for free lessons</h2>
<div class="materials-grid">
<div class="material-blcok ov">
<picture>
<source srcset="img/webp/ov.webp" type="image/webp" />
<source srcset="img/ov.png" type="image/png" />

<img
class="ov-img"
src="img/ov.png"
alt="Join the One Voice Discord server for FREE 1-on-1 and group singing lessons, and access to a ton of resources, organized in a specific order so you can progress on your own in the safest and fastest way possible."
/>
</picture>

<div class="material-text">
<h3 class="h3">One Voice</h3>
<p class="material-info">
Join One Voice discord server for weekly free 1-on-1 and group
lessons; a resource library and a supportive community focused
around singing!
</p>
</div>
<a
class="btn"
href="https://discord.gg/TnPmEesEGV"
target="_blank"
rel="noopener noreferrer"
>Join One Voice</a
>
</div>
<div class="material-blcok bbs">
<picture>
<source srcset="img/webp/bbs.webp" type="image/webp" />
<source srcset="img/bbs.png" type="image/png" />

<img
class="ov-img"
src="img/bbs.png"
alt="Big Brain Singer Discord server"
/>
</picture>

<div class="material-text">
<h3 class="h3">Big Brain Singer</h3>
<p class="material-info">
Join BBS discord server to find other vocal coaches!
</p>
</div>
<a
class="btn"
href="https://discord.gg/bigbrainsinger"
target="_blank"
rel="noopener noreferrer"
>Join BBS</a
>
</div>
<div class="material-blcok private">
<picture>
<source srcset="img/webp/mia-pfp.webp" type="image/webp" />
<source srcset="img/mia-pfp.png" type="image/png" />

<img
class="mia-pfp"
src="img/mia-pfp.png"
alt="Mia - MiaVocalCoach"
/>
</picture>

<div class="material-text">
<h3 class="h3">Private Lessons</h3>
<p class="material-info">
Choose from many free AND paid options!
</p>
</div>
<a class="btn" href="lessons/" rel="noopener noreferrer"
>More info
</a>
</div>
<div class="material-blcok support">
<picture>
<source srcset="img/webp/support.webp" type="image/webp" />
<source srcset="img/support.png" type="image/png" />

<img
class="support-img"
src="img/support.png"
alt="MiaVocalCoach Patreon"
/>
</picture>

<div class="material-text">
<h3 class="h3">Support me on Patreon!</h3>
<p class="material-info">
You get exclusive perks and access to exclusive content!
</p>
</div>
<a
class="btn"
href="https://www.patreon.com/MiaVocalCoach"
target="_blank"
rel="noopener noreferrer"
>To Patreon!</a
>
</div>
</div>
</div>
</section>

## CSS

/_ ////////////////////
MATERIALS SECTION
//////////////////// _/

.materials {
padding: 9.1rem 0;
background-color: #f3f0ff;
}

.materials-container {
margin-bottom: 0;
padding: 0 6.4rem;
max-width: 130rem;
margin: 0 auto;
}

.heading-img {
display: block;
margin-left: auto;
margin-right: auto;
width: 57%;
margin-bottom: 3.2rem;
}

.join-ov-heading {
font-family: "Lato", sans-serif;
display: table;
text-align: center;
text-transform: uppercase;
font-size: 3.2rem;
font-weight: 900;
line-height: 1.3;

background: rgb(77, 56, 255);
background: linear-gradient(
45deg,
rgb(35, 98, 206) 0%,
rgb(247, 56, 164) 100%
);

text-shadow: 1.6px 1.6px 1.6px rgba(0, 0, 0, 0.1),
2px 2px 2px rgba(0, 0, 0, 0.1);
/_ box-shadow: 1.6px 2px 4px rgba(0, 0, 0, 0.2), 2px 3px 4px rgba(0, 0, 0, 0.2); _/
box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);

color: #fff;

padding: 1rem 2.8rem;
border-radius: 26px;
margin-left: auto;
margin-right: auto;
margin-bottom: 4.8rem;
}

.ov-img,
.mia-pfp,
.support-img {
height: 12.8rem;
width: 12.8rem;
border-radius: 50%;
}

.material-blcok {
display: grid;
grid-template-columns: auto;
align-items: center;
justify-items: center;
row-gap: 1.8rem;
}

.h3 {
text-align: center;
font-size: 2.4rem;
margin-bottom: 1.2rem;
font-weight: 700;
line-height: 1.4;
}

.material-info {
text-align: center;
font-size: 1.8rem;
line-height: 1.6;
letter-spacing: 0.4px;
font-weight: 400;
}

.btn {
font-family: "Lato", sans-serif;
font-size: 2rem;
display: inline-block;

background-color: #fa6c9d;

text-shadow: 1.6px 1.6px 1.6px rgba(0, 0, 0, 0.2),
2px 2px 2px rgba(0, 0, 0, 0.2);

box-shadow: 0px 1.6px 1.6px rgb(0 0 0 / 20%), 0px 2px 3px rgb(0 0 0 / 20%);

background-size: 500%;
background-position: left;

color: white;
font-weight: 700;
padding: 1.6rem 3.2rem;
border-radius: 20px;
grid-column: 1 / -1;
width: 43%;
justify-self: center;
text-align: center;

transition: all ease-in 0.05s;
}

.btn:link,
.btn:visited {
text-decoration: none;
}

.btn:hover,
.btn:active {
background-color: #e85488;
}

.ov {
grid-column: 1 / -1;
width: 50%;
justify-self: center;
}

.support {
grid-column: 1 / -1;
width: 50%;
justify-self: center;
}

.private {
grid-column: 1 / 2;
grid-row: 2 / 3;
}

.bbs {
grid-column: 2 / -1;
}

.materials-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3.19rem;
justify-items: center;
align-items: center;
}

.material-text {
padding: 0 2.4rem;
}

## Queries

/_ For keeping the buttons in one line _/
@media (max-width: 59.75em) {
.btn {
width: 44%;
}
.material-text:nth-child(2) {
width: 99%;
}
}
@media (max-width: 51.75em) {
.material-text:nth-child(2) {
width: 100%;
}
}

@media (max-width: 54.6em) {
.btn {
width: 44%;
}
}
@media (max-width: 53.38em) {
.btn {
width: 45%;
}
}
@media (max-width: 52.5em) {
.btn {
width: 46%;
}
}
@media (max-width: 51.5em) {
.btn {
width: 55%;
}
}
@media (max-width: 23em) {
.btn {
width: 70%;
}
}

# Pricing section

## HTML

<section class="pricing-section">
  <div class="pricing-container">
    <h2 class="pricing-heading">Pricing</h2>
    <div class="pricing-box">
      <div class="pricing-plans-grid">
        <div class="pricing-block">
          <h3 class="pricing-h3">First-time 15-minute meeting: Free</h3>
          <p class="pricing-description">
            Getting to know each other, understanding current abilities and setting future goals.
          </p>
        </div>
        <div class="pricing-block">
          <h3 class="pricing-h3">Singular lesson</h3>
          <p class="pricing-description">
            One hour lesson – <strong>60€</strong><br>
            30-minute lesson – <strong>35€</strong>
          </p>
        </div>
        <div class="pricing-block">
          <h3 class="pricing-h3">30 min Package of 4</h3>
          <p class="pricing-description">
            4 Lessons for the price of 3!<br>
            <s>140€</s> <strong>105€</strong> (26.25€ on average per lesson)
          </p>
        </div>
        <div class="pricing-block">
          <h3 class="pricing-h3">1 hour Package of 4</h3>
          <p class="pricing-description">
            4 Lessons for the price of 3!<br>
            <s>240€</s> <strong>180€</strong> (45€ on average per lesson)
          </p>
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/1dW-N6xyf7ATc6zCIL0rR1I63EN4A4U6JghhPA6xi2pM/viewform?edit_requested=true" class="to-the-form">Apply for paid lessons</a>
    </div>
  </div>
</section>

## CSS

/_ ////////////////////
PRICING SECTION
//////////////////// _/

.pricing-section {
background-color: #f3f0ff;
padding-bottom: 12.8rem; /_temp_/
}

.pricing-container {
max-width: 130rem;
margin: 0 auto;
padding: 0 5%;
}

.pricing-heading {
margin-bottom: 4.8rem;
text-align: center;
font-weight: 600;
font-size: 3.6rem;
letter-spacing: 0.6pt;
word-spacing: 0.3rem;
display: none;
}

.pricing-box {
background-color: #fff;
padding: 5rem;
padding-bottom: 5.5rem;
width: 85%;
margin: 0 auto;
/_ border: 1px solid #c2255c; _/
box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
border-radius: 6px;
transition: all 0.2s ease-out;
}

.pricing-box:hover {
transform: scale(1.02);
}

.pricing-plans-grid {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 3rem; /_temp_/
row-gap: 4rem;
}

.pricing-block {
}

.pricing-h3 {
font-size: 2.4rem;
margin-bottom: 1.6rem;
}

.pricing-description {
font-size: 1.915rem;
line-height: 1.8;
}

.pricing-box strong {
color: #c2255c;
font-size: 2rem;
letter-spacing: 1pt;
}

.pricing-box .to-the-form {
letter-spacing: 2pt;
word-spacing: 6pt;
text-transform: uppercase;
font-size: 2.4rem;
font-weight: 900;
background-color: #ee588c;
color: #fff;
padding: 1.7rem 0;
width: 100%;
text-align: center;
display: block;
margin: 0 auto;
border-radius: 14px;

margin-top: 4.5rem;
box-shadow: 0 2px 4px rgb(0, 0, 0, 0.4);

transition: all 0.1s ease-in;
}

.pricing-box .to-the-form:hover {
text-decoration: none;
background-color: #ff77a7;
}

# Consider section

## CSS

/_ ////////////////////
CONSIDER SECTION
//////////////////// _/

.consider-section {
padding: 4.8rem 0;
}

.consider-container {
max-width: 96rem;
margin: 0 auto;
padding: 0 8%;
}

.last-option,
.consider-message {
text-align: start;
max-width: 67.2rem;
}

/_ .consider-message {
} _/

.last-option {
font-size: 3.6rem;
margin-bottom: 2.4rem;
line-height: 1.3;
}

.ov-free,
.consider-message {
font-size: 1.915rem;
line-height: 1.7;
letter-spacing: 0.4px;
font-weight: 400;
}

/_ .ov-free {
} _/

.consider-message {
margin-bottom: 1.6rem;
}

/_ .inline-a {
} _/

.inline-a:link,
.inline-a:visited {
color: #c2255c;
font-weight: 500;
}

.inline-a:hover,
.inline-a:active {
text-decoration: underline;
text-underline-offset: 0.3rem;
}

# Might come in handy

## Heading hover effect

.testimonials-heading:hover {
-webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);
transform: skewY(2deg) skewX(15deg) scale(1.1);
text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
}

## Paid lessons feature

<li class="plan-feature-item">
  <i class="paid-icon fa-solid fa-circle-check"></i>
  <p class="plan-feature-p">
    We have lessons mainly with supervised if we went over the
    techniques that are currently applicable to you
  </p>
</li>
