const videoBlock = document.querySelector('.gym__video');
const button = videoBlock.querySelector('.gym__video-button');
const iframe = videoBlock.querySelector('iframe');

const playVideo = () => {
  if (videoBlock && iframe) {
    iframe.style.visibility = 'visible';
    button.style.display = 'none';
    iframe.src += 'autoplay=1';
    iframe.setAttribute('allow', 'autoplay');
  }
};

button.addEventListener('click', playVideo);
