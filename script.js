import { Time } from "./Time.js";
import { Ui } from "./Ui.js";

class App {
  constructor() {
    this.ui = new Ui();
    this.time = null;

    this.dayInputValue = null;
    this.monthInputValue = null;
    this.yearInputValue = null;
  }
  initialize() {
    this.addListeners();
  }

  addListeners() {
    this.ui.settingsBtn.addEventListener("click", () =>
      this.toggleClass(this.ui.settingsModal)
    );

    this.ui.settingSaveBtn.addEventListener("click", () => this.start());
  }

  start() {
    this.dayInputValue = this.ui.daysInput.value;
    this.monthInputValue = this.ui.monthsInput.value - 1;
    this.yearInputValue = this.ui.yearsInput.value;

    this.checkInputs();
    this.setDate();
    this.resetSettingsValue();
    // window.setTimeout(() => this.toggleClass(this.ui.settingsModal), 1000);
  }

  setDate() {
    this.time = new Time(
      new Date(this.yearInputValue, this.monthInputValue, this.dayInputValue)
    );

    this.drawDate();
    window.requestAnimationFrame(() => this.setDate());
  }

  drawDate() {
    this.ui.daysDisplay.textContent = `${this.time.days}`;
    this.ui.hoursDisplay.textContent = `${this.time.hours}`;
    this.ui.minutesDisplay.textContent = `${this.time.minutes}`;
    this.ui.secondsDisplay.textContent = `${this.time.seconds}`;
  }

  resetSettingsValue() {
    this.ui.nameOfEventInput.value = "";
    this.ui.imageLinkInput.value = "";

    this.ui.daysInput.value = "";
    this.ui.monthsInput.value = "";
    this.ui.yearsInput.value = "";
  }

  checkInputs() {
    this.ui.daysInput.classList.remove("error");
    this.ui.monthsInput.classList.remove("error");
    this.ui.yearsInput.classList.remove("error");

    if (this.dayInputValue === "") {
      this.ui.daysInput.classList.add("error");
    } else if (this.monthInputValue === "") {
      this.ui.monthsInput.classList.add("error");
    } else if (this.yearInputValue < new Date().getYear()) {
      this.ui.yearsInput.classList.add("error");
    }
  }

  toggleClass(element) {
    element.classList.toggle("hide");
  }
}

const app = new App();
app.initialize();
