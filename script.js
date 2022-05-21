import { Time } from "./Time.js";
import { Ui } from "./Ui.js";

class App {
  constructor() {
    this.ui = new Ui();
    this.time = null;
  }
  initialize() {
    this.addListeners();
  }

  setDate() {
    const year = this.ui.yearsInput.value;
    const month = this.ui.monthsInput.value;
    const day = this.ui.daysInput.value;

    this.time = new Time(new Date(year, month, day));

    this.drawDate();
    window.requestAnimationFrame(() => this.setDate());
  }

  addListeners() {
    this.ui.settingsBtn.addEventListener("click", () =>
      this.toggleClass(this.ui.settingsModal)
    );

    this.ui.settingSaveBtn.addEventListener("click", () => this.setDate());
  }

  drawDate() {
    this.ui.daysDisplay.textContent = `${this.time.days}`;
    this.ui.hoursDisplay.textContent = `${this.time.hours}`;
    this.ui.minutesDisplay.textContent = `${this.time.minutes}`;
    this.ui.secondsDisplay.textContent = `${this.time.seconds}`;
  }

  toggleClass(element) {
    element.classList.toggle("hide");
  }
}

const app = new App();
app.initialize();
