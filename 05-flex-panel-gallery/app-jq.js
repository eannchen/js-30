function toggleOpen() {
  console.log($(this));
  $(this).toggleClass("open");
}
function toggleActive(e) {
  const origEvent = e.originalEvent;
  if (origEvent.propertyName.includes("flex")) {
    $(this).toggleClass("open-active");
  }
}

const panels = $(".panels .panel");
panels.on("click", toggleOpen);
panels.on("transitionend", toggleActive);
