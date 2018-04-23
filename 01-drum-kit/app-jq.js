function playSound(e) {
  const keyCode = e.keyCode || this.dataset.key;
  const audio = $(`audio[data-key="${keyCode}"]`)[0];
  const key = $(`div[data-key="${keyCode}"]`);
  if (!audio | !key) return;
  audio.currentTime = 0;
  audio.play();

  key.addClass('playing');
}
function removeTransition(e) {
  const self = $(this);
  self.removeClass('playing');
}

const keys = $('.key');
$(window).on('keydown', playSound);
keys.on('click', playSound);
keys.on('transitionend', removeTransition);