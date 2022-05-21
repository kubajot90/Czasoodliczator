export class Ui {
  constructor() {
    this.settingsBtn = null;
    this.settingsModal = null;

    this.daysDisplay = null;
    this.hoursDisplay = null;
    this.minutesDisplay = null;
    this.secondsDisplay = null;

    this.daysInput = null;
    this.monthsInput = null;
    this.yearsInput = null;

    this.nameOfEventInput = null;
    this.imageLinkInput = null;

    this.settingSaveBtn = null;

    this.initialize();
  }
  initialize() {
    this.htmlElements();
    // this.addListeners()
  }

  htmlElements() {
    this.settingsBtn = document.querySelector("[data-settings-button]");
    this.settingsModal = document.querySelector("[data-settings-modal]");

    this.daysDisplay = document.querySelector("[data-days]");
    this.hoursDisplay = document.querySelector("[data-hours]");
    this.minutesDisplay = document.querySelector("[data-minutes]");
    this.secondsDisplay = document.querySelector("[data-seconds]");

    this.daysInput = document.querySelector("[data-input-day]");
    this.monthsInput = document.querySelector("[data-input-month]");
    this.yearsInput = document.querySelector("[data-input-year]");

    this.nameOfEventInput = document.querySelector("[data-input-name]");
    this.imageLinkInput = document.querySelector("[data-input-link]");

    this.settingSaveBtn = document.querySelector("[data-settings-save-button]");
  }
}
