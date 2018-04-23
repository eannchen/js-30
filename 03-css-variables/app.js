function handler() {
  // const suffix = this.getAttribute('data-unit') || '';
  const unit = this.dataset.unit || '';

  //  style.setProperty('padding') 等同於 style.padding
  // document.documentElement 取得 document 根元素
  document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
}

const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => {
  input.addEventListener('change', handler);
  input.addEventListener('mousemove', handler);
});