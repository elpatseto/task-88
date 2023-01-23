import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {
    const article = document.getElementsByClassName("article");

    article[0].addEventListener("click", function() {
      anime({
        targets: ".article p",
        translateX: 250,
        direction: 1500,
        loop: true,
        easing: 'spring(1, 80, 10, 0)'
      });
    });
  }
}
