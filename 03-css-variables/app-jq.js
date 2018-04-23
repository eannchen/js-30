function handler() {
  const unit = this.dataset.unit || '';
  $(document.documentElement).css(`--${this.name}`, this.value + unit);
}
const inputs = $('.controls input')
inputs.on('change', handler);
inputs.on('mousemove', handler);