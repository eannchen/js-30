function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  // 只取一個屬性的變化去 toggle
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

const panels = document.querySelectorAll(".panels .panel");

panels.forEach(panel => {
  panel.addEventListener("click", toggleOpen);
  // transition 事件監聽，每個 transition 設定屬性變化都會觸發
  panel.addEventListener("transitionend", toggleActive);
});
