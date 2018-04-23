function playSound(e) {
  /**
   * 此的 this 等同 e.target
   * this.getAttribute('data-key') 等同 this.dataset.key;
   */
  const keyCode = e.keyCode || this.dataset.key;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!audio | !key) return;

  /**
   * HTMLMediaElement
   * https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLMediaElement
   *
   * element.play(): 進行播放
   * element.currentTime: 指定播放秒數
   */
  audio.currentTime = 0;
  audio.play();

  // key.classList.add('playing');
  key.classList.toggle("playing", true);
}

function removeTransition(e) {
  // 只取一個屬性觸發
  if (e.propertyName !== "transform") return;

  // this.classList.remove('playing');
  this.classList.toggle("playing", false);
}

/**
 * querySelectorAll 為 NodeList 而非 Array (但 NodeList 也有 forEach 方法)
 *
 * 可以用 Array.from 包裹解決
 * const keys = Array.from(document.querySelectorAll(`.key`));
 */
const keys = document.querySelectorAll(`.key`);

keys.forEach(key => {
  /**
   * transitionend
   * https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend
   *
   * CSS transition 結束後觸發。
   * 當 transition 完成前被移除(譬如移除 transition-property)，或 display 設定 none，事件將不會被觸發。
   */
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", playSound);
});
window.addEventListener("keydown", playSound);
