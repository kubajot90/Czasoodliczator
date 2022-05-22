import { Time } from "./Time.js";
import { Ui } from "./Ui.js";

class App {
  constructor() {
    this.ui = new Ui();
    this.time = null;

    this.dayInputValue = null;
    this.monthInputValue = null;
    this.yearInputValue = null;

    this.nameOfEventInputValue = null;

    this.isInputOk = true;
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

    this.nameOfEventInputValue = this.ui.nameOfEventInput.value;

    this.checkInputs();
    if (this.isInputOk) {
      this.setDate();
      this.resetSettingsValue();
    }
  }

  setDate() {
    this.time = new Time(
      new Date(this.yearInputValue, this.monthInputValue, this.dayInputValue)
    );
    this.drawDate();
    this.setDisplayTitle();
    window.requestAnimationFrame(() => this.setDate());
  }

  setDisplayTitle() {
    this.ui.displayTitle.innerHTML = `${this.nameOfEventInputValue}<span> - ${this.dayInputValue}.${this.monthInputValue}.${this.yearInputValue}</span>`;
  }

  drawDate() {
    this.ui.daysDisplay.textContent = `${this.time.days}`;
    this.ui.hoursDisplay.textContent = `${this.time.hours}`;
    this.ui.minutesDisplay.textContent = `${this.time.minutes}`;
    this.ui.secondsDisplay.textContent = `${this.time.seconds}`;
  }

  resetSettingsValue() {
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  }

  checkInputs() {
    this.isInputOk = true;

    document.querySelectorAll(".input").forEach((input) => {
      input.classList.remove("error");
      if (input.value === "") {
        input.classList.add("error");
        this.isInputOk = false;
      }
    });
    if (this.yearInputValue < new Date().getYear()) {
      this.ui.yearsInput.classList.add("error");
      this.isInputOk = false;
    }
  }

  toggleClass(element) {
    element.classList.toggle("hide");
  }
}

const app = new App();
app.initialize();
