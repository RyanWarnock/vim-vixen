import './hint.css';

export default class Hint {
  constructor(target, tag) {
    if (!(document.body instanceof HTMLElement)) {
      throw new TypeError('target is not an HTMLElement');
    }

    this.target = target;

    let doc = target.ownerDocument
    let { top, left } = target.getBoundingClientRect();

    this.element = doc.createElement('span');
    this.element.className = 'vimvixen-hint';
    this.element.textContent = tag;
    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';

    this.show();
    doc.body.append(this.element);
  }

  show() {
    this.element.style.display = 'inline';
  }

  hide() {
    this.element.style.display = 'none';
  }

  remove() {
    this.element.remove();
  }

  activate() {
    if (this.target.tagName.toLowerCase() === 'a') {
      this.target.click();
    }
  }
}
