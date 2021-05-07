'use strict';

export default class Info {
  constructor() {
    this.info = document.querySelector('.info');
    this.info__refresh = document.querySelector('.info__refresh');
    this.info__message = document.querySelector('.info__message');
    this.info__refresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  hide() {
    this.info.classList.add('info--hide');
  }

  showWithText(text) {
    this.info__message.innerHTML = text;
    this.info.classList.remove('info--hide');
  }
}
