const textArea = document.querySelector('textarea');

textArea.addEventListener('keyup', e => {
  textArea.style.height = '';
  let setHeight = e.target.scrollHeight;
  textArea.style.height = setHeight + 'px';
})