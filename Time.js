export class Time {
  constructor(newDate) {
    this.dateNow = new Date();
    this.newDate = newDate;
    this.dateDiff = this.newDate - this.dateNow;

    this.seconds = null;
    this.minutes = null;
    this.hours = null;
    this.days = null;

    this.msToTime(this.dateDiff);
  }

  msToTime(t) {
    let second = Math.floor(t / 1000);
    let minute = Math.floor(second / 60);
    second = second % 60;
    let hour = Math.floor(minute / 60);
    minute = minute % 60;
    let day = Math.floor(hour / 24);
    hour = hour % 24;

    this.seconds = second;
    this.minutes = minute;
    this.hours = hour;
    this.days = day;
  }
}
