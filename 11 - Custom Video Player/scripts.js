/**
 * Media events
 * https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
 */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

// 點擊 播放 或 video視窗 更新
function togglePlay() {
  video.paused ? video.play() : video.pause()
}
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

// 變更播放圖示
function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// 跳轉
function skip() {
  video.currentTime += Number(this.dataset.skip);
}
skipButtons.forEach(btn =>
  btn.addEventListener('click', skip)
)

// 音量及播放速度 (支援點擊及拖曳)
function rangeChange() {
  video[this.name] = this.value;
}
ranges.forEach(range =>
  range.addEventListener('change', rangeChange)
)
ranges.forEach(range =>
  // 會不斷監聽 mousemove，但 value 有變動才會值
  range.addEventListener('mousemove', rangeChange)
)

// 進度條顯示
function progressDisplay(percent) {
  progressBar.style.flexBasis = `${percent}%`;
}

// 影片時間監聽
function timeUpdate() {
  const percent = (video.currentTime / video.duration) * 100;
  progressDisplay(percent);
}
video.addEventListener('timeupdate', timeUpdate);

// 進度條控制
let isMousedown = false;
function progressMove(e) {
  if (!isMousedown) return;
  const scale = (e.offsetX / progress.offsetWidth);
  const scrubTime = scale * video.duration;
  video.currentTime = scrubTime;
  const progressPercent = scale * 100;
  progressDisplay(progressPercent);
}
progress.addEventListener('mousedown', (e) => { isMousedown = true; progressMove(e) });
progress.addEventListener('mouseup', () => isMousedown = false);
progress.addEventListener('mousemove', progressMove);


// 全螢幕
// function fullScreen() {
//   if (video.requestFullscreen) {
//     video.requestFullscreen();
//   } else if (video.msRequestFullscreen) {
//     video.msRequestFullscreen();
//   } else if (video.mozRequestFullScreen) {
//     video.mozRequestFullScreen();
//   } else if (video.webkitRequestFullscreen) {
//     video.webkitRequestFullscreen();
//   }
// }
// fullscreen.addEventListener('click', fullScreen);