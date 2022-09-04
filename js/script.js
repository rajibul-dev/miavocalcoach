'use strict'

// For video, the former popup style
// const thumbnail = document.querySelector('.video-action')
// const videoBtn = document.querySelector('.play-btn-box')
// const overlay = document.querySelector('.overlay')
// const closeBtn = document.querySelector('.xmark')
// const video = document.querySelector('.yt-embed')

// const playClick = function () {
//   overlay.classList.remove('none')
//   video.classList.remove('none')
//   closeBtn.classList.remove('none')
// }
// const closeClick = function () {
//   overlay.classList.add('none')
//   video.classList.add('none')
//   closeBtn.classList.add('none')
// }

// thumbnail.addEventListener('click', playClick)
// videoBtn.addEventListener('click', playClick)
// closeBtn.addEventListener('click', closeClick)
// overlay.addEventListener('click', closeClick)

// For video
// const vidPreArea = document.querySelector('.video-action');
// const thumbnail = document.querySelector('.lesson-thumbnail');
// const videoBtn = document.querySelector('.play-btn-box');
// const video = document.querySelector('.video');

// const playClick = function () {
//   vidPreArea.classList.add('hidden');
//   thumbnail.classList.add('hidden');
//   video.classList.remove('none');
//   video.play()
// };

// thumbnail.addEventListener('click', playClick)
// videoBtn.addEventListener('click', playClick)

// Back to top button
const toTop = document.querySelector(".btt");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 6500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  };
});

toTop.addEventListener('click', function () {
  window.scrollTo(0, 0);
});
