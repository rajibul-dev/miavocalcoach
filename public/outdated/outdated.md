# If bug comes

## The nav opens weiredly

// if (link.classList.contains("paid-btn")) {
// mobileNavContainer.classList.remove("mobile-nav-open");
// overlay.classList.remove("overlay-open");
// html.classList.remove("no-scroll");
// }

# Old Pricing Section

## HTML

    <section id="pricing" class="pricing-section">
      <div class="pricing-container">
        <div class="pricing-box">
          <h2 class="pricing-heading plan-heading">Paid Lesson Options</h2>
          <div class="plans">
            <div class="plan-flex">
              <div class="plan-text">
                <h3>Singular 30 minute Lesson</h3>
                <p>A short session to get you going in the right direction!</p>
              </div>
              <span class="price"><span class="euro currency">€</span><span class='dynamic-price'>40</span>
            </div>
            <div class="plan-flex">
              <div class="plan-text">
                <h3>Singular One hour Lesson</h3>
                <p>Enough time for us to give plenty of attention to technique, supervised practice and/or song work!</p>
              </div>
              <span class="price"><span class="euro currency">€</span><span class='dynamic-price'>80</span>
            </div>
            <div class="plan-flex">
              <div class="plan-text">
                <h3>30 minute Package of 4</h3>
                <p>
                  4 Lessons for the price of 3!<br>
                  <s><span class="currency">€</span><span class='dynamic-price'>160</span></s> <strong><span class="currency">€</span><span class="dynamic-price">120</span></strong> (<span class="currency">€</span><span class="dynamic-price">30</span> on average per lesson)
                </p>
              </div>
              <span class="price"><span class="euro currency">€</span><span class='dynamic-price'>120</span>
            </div>
            <div class="plan-flex">
              <div class="plan-text">
                <h3>1 hour Package of 4</h3>
                <p>
                  4 Lessons for the price of 3!<br>
                  <s><span class="currency">€</span><span class="dynamic-price">320</span></s> <strong><span class="currency">€</span><span class="dynamic-price">240</span></strong> (<span class="currency">€</span><span class="dynamic-price">60</span> on average per lesson) (Recommended)
                </p>
              </div>
              <span class="price"><span class="euro currency">€</span><span class='dynamic-price'>240</span>
            </div>
          </div>
          <a href="https://docs.google.com/forms/d/1dW-N6xyf7ATc6zCIL0rR1I63EN4A4U6JghhPA6xi2pM/viewform?edit_requested=true" class="main-btn">Apply for Private Paid Lessons</a>
        </div>
      </div>
    </section>

## CSS

/_ ////////////////////
PRICING SECTION
//////////////////// _/

.pricing-section {
background-color: #f3f0ff;
padding-top: 6.4rem;
padding-bottom: 12rem;
}

.pricing-container {
max-width: 130rem;
margin: 0 auto;
padding: 0 5%;
}

.pricing-box {
background-color: #fff;
padding: 6.4rem 0;
width: 69rem;
box-shadow: 0 3px 14px rgba(0, 0, 0, 0.2);
border-radius: 6px;
transition: all 0.2s ease-out;
margin: 0 auto;
}

.pricing-heading {
font-weight: 500;
padding: 0 5rem;
margin-bottom: 6.8rem;
/_ text-align: center; _/
}

.plans {
display: flex;
flex-direction: column;
}

.plan-flex {
display: flex;
align-items: center;
justify-content: space-between;
padding: 2.4rem 5rem;
border-bottom: 1px solid #bbb;
}
.plan-flex:first-child {
padding-top: 0;
}
.plan-flex:last-child {
border-bottom: none;
padding-bottom: 0;
}

.plan-text {
display: flex;
flex-direction: column;

width: 65%;
}

.plan-text h3 {
font-size: var(--font-size-tertiary);
margin-bottom: 0.8rem;
letter-spacing: 0.4pt;
font-weight: 600;
}

.plan-text p {
font-size: var(--font-size-p-primary);
color: var(--primary-gray);
line-height: 1.5;
}

.price {
font-family: "Inter", sans-serif;
letter-spacing: -2pt;
font-size: 5.2rem;
font-weight: 500;
}

.euro {
font-size: 4rem;
font-weight: 700;
margin-right: 2px;
/_ color: #777; _/
}

.pricing-section .main-btn {
display: block;
padding: 1.7rem;
margin-left: 5rem;
margin-right: 5rem;

background-color: var(--btn-pink);
color: #fff;

font-size: var(--font-size-tertiary);
text-align: center;
margin-top: 6.8rem;
font-weight: 700;
text-transform: uppercase;

box-shadow: 0 2px 4px rgb(0, 0, 0, 0.4);
transition: all 0.1s ease-out;
border-radius: 14px;
}

.pricing-section .main-btn:hover {
background-color: #ff77a7;
text-decoration: none;
}

## JS (When scroll needed)

} else if (href2 === "#pricing") {
window.scrollTo({
top: offsetPosition + 30,
behavior: "smooth",
});

# Lessons page

## HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="description" content="MiaVocalCoach paid lessons." />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <script
      src="https://kit.fontawesome.com/b1ef1537c1.js"
      crossorigin="anonymous"
    ></script>

    <script src="../js/lessons.js" defer></script>
    <link href="../css/style2.css" rel="stylesheet" />
    <link href="../css/queries2.css" rel="stylesheet" />
    <link rel="icon" href="../img/favicon.png" type="image/icon type" />

    <!-- Discord -->
    <meta property="og:title" content="MiaVocalCoach - My Lessons" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://miavocalcoach.com/lessons" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="" />
    <meta name="theme-color" content="#c2255c" />

    <title>My Lessons - MiaVocalCoach</title>

  </head>
  <body>
    <!-- <section class="consider-section">
      <div class="consider-container">
        <h2 class="last-option">A last option</h2>
        <p class="consider-message">
          Before you decide to have lessons with me,<br />
          please consider these <strong>FREE</strong> options:
        </p>
        <p class="ov-free">
          Join the
          <a
            href="https://discord.gg/TnPmEesEGV"
            class="inline-a"
            target="_blank"
            rel="noopener noreferrer"
            >One Voice</a
          >
          Discord server for FREE 1-on-1 and group lessons, and access to a ton
          of resources, organized in a specific order so you can progress on
          your own in the safest and fastest way possible.
        </p>
      </div>
    </section> -->

    <section class="main-section">
      <div class="main-container">
        <h1 class="main-heading">PRIVATE PAID LESSONS</h1>
        <div class="flexbox">
          <div class="text-box">
            <h2 class="main-subheading">The point of our lessons</h2>
            <ul class="feature-box">
              <li>
                <p class="feature-text">
                  We will be working together in order to create the voice that <strong>YOU</strong> want in the fastest and healthiest way possible! The tools to do so will be given to you so you can also safely work on your own.
                </p>
              </li>
              <li>
                <p class="feature-text">
                  Within the lesson a practice program will be specifically designed for your personal needs. You get "homework" and a small summary of what you need to work on after each lesson. Practicing alone is just as important as practicing and learning with me!
                </p>
              </li>
              <li>
                <p class="feature-text">
                  Your progress will be tracked through the <strong>Your One Voice</strong> Discord server. You get your own personal category with channels designed to your needs! Every lesson is recorded and you get private access to those videos. This will allow us to track your progress overtime. (If you would rather not use Discord, we can use other options)
                </p>
              </li>
            </ul>
          </div>
          <img
            src="../img/youronevoice.png"
            alt="Your One Voice server for Mia's paid lessons"
            class="yourserver-img"
          />
        </div>
      </div>
    </section>

    <section id="pricing" class="pricing-section">
      <div class="pricing-container">
        <div class="pricing-box">
          <h2 class="pricing-heading plan-heading">Paid Lesson Options</h2>
          <div class="plans">
            <div class="plan-flex">
              <div class="plan-text">
                <h3>Singular 30 minute Lesson</h3>
                <p>A short session to get you going in the right direction!</p>
              </div>
              <span class="price"><span class="euro">€</span>40</span>
            </div>
            <div class="plan-flex">
              <div class="plan-text">
                <h3>Singular One hour Lesson</h3>
                <p>Enough time for us to give plenty of attention to technique, supervised practice and/or song work! (Recommended)</p>
              </div>
              <span class="price"><span class="euro">€</span>80</span>
            </div>
            <div class="plan-flex">
              <div class="plan-text">
                <h3>30 minute Package of 4</h3>
                <p>
                  4 Lessons for the price of 3!<br>
                  <s>€160</s> <strong>€120</strong> (€30 on average per lesson)
                </p>
              </div>
              <span class="price"><span class="euro">€</span>120</span>
            </div>
            <div class="plan-flex">
              <div class="plan-text">
                <h3>1 hour Package of 4</h3>
                <p>
                  4 Lessons for the price of 3!<br>
                  <s>€320</s> <strong>€240</strong> (€60 on average per lesson)
                </p>
              </div>
              <span class="price"><span class="euro">€</span>240</span>
            </div>
          </div>
          <a href="https://docs.google.com/forms/d/1dW-N6xyf7ATc6zCIL0rR1I63EN4A4U6JghhPA6xi2pM/viewform?edit_requested=true" class="main-btn">Apply for Private Paid Lessons</a>
        </div>
      </div>
    </section>

    <section class="plans-section">
      <div class="plans-container">
        <h2 class="main-subheading more-margin">My current options for lessons</h2>
        <div class="card-flex">
          <div class="plan-box free">
            <h3 class="plan-heading">Free Lessons</h3>
            <ul class="plan-feature-list">
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle free-icon"></i>
                <p class="plan-feature-p">
                  One 30-minute lesson per week
                </p>
              </li>
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle free-icon"></i>
                <p class="plan-feature-p">
                  The main focus is on the technique and making sure you can practice it <i>correctly</i> alone. No supervised practice, only enough to ensure you can practice safely alone.
                </p>
              </li>
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle free-icon"></i>
                <p class="plan-feature-p">
                  Submit recordings publicly in the One Voice server for me to evaluate when available
                </p>
              </li>
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle free-icon"></i>
                <p class="plan-feature-p">
                  Less flexible scheduling / availability; less personalization possibilities due to having less time
                </p>
              </li>
              <a href="https://discord.gg/8khKvfHG" target="_blank" class="plan-btn free-btn"
                >Get Free Lessons at One Voice</a
              >
            </ul>
          </div>

          <div class="plan-box paid">
            <h3 class="plan-heading">Paid Lessons</h3>
            <ul class="plan-feature-list">
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle paid-icon"></i>
                <p class="plan-feature-p">
                  30-minute and 1-hour options (can do 2 hours at a time), unlimited times per week
                </p>
              </li>
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle paid-icon"></i>
                <p class="plan-feature-p">
                  We focus both on technique AND supervised practice
                </p>
              </li>
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle paid-icon"></i>
                <p class="plan-feature-p">
                  Submit recordings privately for me to evaluate as soon as possible
                </p>
              </li>
              <li class="plan-feature-item">
                <i class="fa-solid fa-circle paid-icon"></i>
                <p class="plan-feature-p">
                  More personalization possibilities due to having more time and your own personal space for us to share everything we do
                </p>
              </li>
              <a class="plan-btn paid-btn" href="https://docs.google.com/forms/d/1dW-N6xyf7ATc6zCIL0rR1I63EN4A4U6JghhPA6xi2pM/viewform?edit_requested=true">
                Apply for Private Paid Lessons
              </a>
            </ul>
          </div>
        </div>
      </section>

      <section class="calendly-section">
        <div class="calendly-container">
          <h2 class="main-subheading calendly-heading">Schedule a Lesson</h2>
          <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/miavocalcoach?hide_landing_page_details=1&primary_color=fc9cea"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <!-- Calendly inline widget end -->
        </div>
      </section>/

      <section class="contacts-section">
        <div class="contacts-container">
          <div class="contact-box">
            <h2>Have a Question?</h2>
            <form action="">
              <div class="form-flex">
                <div class="form-pair">
                  <label for="name">Name</label>
                <input  placeholder="John Titor" id="name" name="name" type="text"/>
              </div>
              <div class="form-pair">
                <label for="email">Email Address</label>
                <input  placeholder="example@gmail.com" id="email" name="email" type="email"/>
              </div>
              <div class="form-pair">
                <label for="subject">Subject</label>
                <input  placeholder="Subject of the message (optional)" id="subject" name="subject" type="text"/>
              </div>

              <div class="form-pair">
                <label for="message">Message</label>
                <textarea placeholder="Type your message here..." id="message" name="message"></textarea>
              </div>
            </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section class="bth">
        <div class="bth-container">
          <a class="back-to-homepage" href="/"><i class="fa-solid fa-house"></i>
            <p>Homepage</p>
          </a>
        </div>
      </section>

    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>

  </body>
</html>

# CTA Section

## HTML

    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-box ov-box">
          <img src="/img/webp/ov.webp" alt="One Voice discord server logo" />
          <h2 class="cta-heading ov-heading">One Voice</h2>
          <p class="cta-description ov-description">
            Weekly free 1-on-1 30-minute voice lessons, weekly karaokes,
            information on health for singing, and a resource library with a
            supportive community!
          </p>
          <a
            href="https://discord.gg/8khKvfHG"
            target="_blank"
            class="cta-btn ov-btn cta-btn-trans"
            >To One Voice</a
          >
        </div>
        <div class="cta-box lessons-box">
          <img
            src="/img/webp/mia-pfp.webp"
            alt="MiaVocalCoach: Mia discord profile picture"
          />
          <h2 class="cta-heading lessons-heading">My Lessons</h2>
          <p class="cta-description lessons-description">
            Choose from my free AND paid options!
          </p>
          <a href="lessons/" class="cta-btn lessons-btn">To Lessons</a>
        </div>
        <div class="cta-box patreon-box">
          <img
            src="/img/webp/mia-patron.webp"
            alt="MiaVocalCoach Patreon logo"
          />
          <h2 class="cta-heading patreon-heading">Support me on Patreon!</h2>
          <p class="cta-description patreon-description">
            Get exclusive perks!
          </p>
          <a
            href="https://www.patreon.com/MiaVocalCoach"
            target="_blank"
            class="cta-btn patreon-btn cta-btn-trans"
            >To Patreon</a
          >
        </div>
      </div>
    </section>

## CSS

/_ ////////////////////
CTA SECTION
//////////////////// _/

.cta-section {
padding: 4.8rem 0;
padding-bottom: 12rem;
border-bottom: 1px solid rgb(215, 215, 215);
}

.cta-section img {
width: 15rem;
border-radius: 50%;
margin-bottom: 2.4rem;
}

.cta-container {
max-width: 120rem;
margin: 0 auto;

display: flex;
justify-content: space-around;
}

.cta-box {
display: flex;
flex-direction: column;
align-items: flex-start;

box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
width: 30%;
padding: 4.8rem 3rem;
padding-bottom: 5.2rem;
border-radius: 12px;
transition: all 0.2s ease-out;
}

.cta-box:hover {
transform: scale(1.03);
}

.cta-heading {
color: #2b2b2b;
font-size: 3rem;
line-height: 1.3;
margin-bottom: 1rem;
font-weight: 600;
}

.cta-description {
font-size: 1.8rem;
line-height: 1.6;
color: #555;
}

.cta-btn {
display: block;
font-size: 2rem;
margin-top: auto;
color: #262626;
text-align: center;
/_ width: 100%; _/
padding: 1.3rem 3.2rem;
border: 1px solid;
border-radius: 30px;
font-weight: 600;
transition: all 0.1s;
letter-spacing: normal;
}

.cta-btn-trans {
}

/_ Individual styling _/

/_ ov _/
.ov-box {
}

.ov-heading {
}

.ov-description {
margin-bottom: 3.2rem;
color: #222;
}

.ov-btn:hover {
background-color: #333;
border-color: #333;
color: #fff;
}

/_ lessons _/
.lessons-box {
background-color: #d63e73;
box-shadow: 0 3px 9px rgba(0, 0, 0, 0.4);
}

.lessons-box:hover {
box-shadow: 0 4px 9px rgba(0, 0, 0, 0.4);
}

.lessons-heading {
color: #fff;
font-weight: 700;
}

.lessons-description {
color: #fff;
font-weight: 500;
}

.lessons-btn {
background-color: #fff;
border: none;
}

.lessons-btn:hover {
color: #fff;
background-color: #a2b6ff;
}

/_ patreon _/
.patreon-box {
background-color: #ffd0e5;
}

.patreon-box:hover {
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.patreon-heading {
}

.patreon-description {
color: #222;
}

.patreon-btn {
background-color: #fff;
border: none;
}

.patreon-btn:hover {
background-color: #d63e73;
color: #fff;
}

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

## CSS

/_ ////////////////////
VIDEO SECTION
//////////////////// _/

.video-section {
padding: 6.4rem 0;
background-color: #e3e3e3;
/_ background-color: #f2f2f2; _/
}

.video-container {
position: relative;
padding: 0 6%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin: 0 auto;
}

.lesson-thumbnail {
position: relative;
width: 75rem;
cursor: pointer;
/_ box-shadow: 0 1.5px 10px rgba(0, 0, 0, 0.4); _/
}

.play-btn {
display: inline-block;
font-size: 4rem;
color: rgb(249, 76, 76);
margin-left: 3px;
z-index: 1;
}

.play-btn-box {
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
height: 8rem;
width: 8rem;
background-color: rgba(255, 255, 255, 0.9);
position: absolute;
cursor: pointer;
}

.play-btn-box::after {
position: absolute;
content: "";
height: 10rem;
width: 10rem;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.4);
cursor: pointer;
}

.hidden {
display: hidden;
}

.none {
display: none;
}

.video {
position: absolute;
width: 75rem;
z-index: 3;
}

.video-title {
color: #262626;
font-size: 2.6rem;
text-align: center;
margin-top: 2rem;
font-weight: 400;
}

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
