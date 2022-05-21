export class Time {
  constructor(newDate) {
    this.dateNow = new Date();
    this.newDate = newDate;
    this.dateDiff = this.newDate - this.dateNow;

    this.seconds = null;
    this.minutes = null;
    this.hours = null;
    this.days = null;
    // this.years = null;

    this.msToTime(this.dateDiff);
  }

  msToTime(t) {
    // console.log(this.newDate);
    // console.log(this.dateNow);
    let second = Math.floor(t / 1000);
    let minute = Math.floor(second / 60);
    second = second % 60;
    let hour = Math.floor(minute / 60);
    minute = minute % 60;
    let day = Math.floor(hour / 24);
    hour = hour % 24;
    // let month = Math.floor(day / 30);
    // day = day % 30;
    // let year = Math.floor(month / 12);
    // month = month % 12;

    this.seconds = second;
    this.minutes = minute;
    this.hours = hour;
    this.days = day;
    // this.years = year;

    // console.log(this.seconds);
    // console.log(this.minutes);
    // console.log(this.hours);
    // console.log(this.days);
  }
}
