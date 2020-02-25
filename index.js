// Write a function that accepts two dates
// announcement date
// too early time
// At ${announcement date}, person said ${too early time} was too early
// announcement date can be localized, but too early time cannot.

const { setHours, setMinutes } = require("date-fns");
const { zonedTimeToUtc, utcToZonedTime, format } = require("date-fns-tz");

function format_too_early_msg(announcement_time, too_early_time) {
  // Announcement time is a date object that can be localized,
  // Too early time is a date object should not be localized
  // Returns a string At 6:51, Steve said that 4:30 is too early.
  const date1 = format(utcToZonedTime(announcement_time), "HH:mm");
  const date2 = format(zonedTimeToUtc(too_early_time), "HH:mm");

  return `At ${date1}, Steve said ${date2} is too early.`;
}

const date1 = setMinutes(setHours(new Date(), 6), 51);
const date2 = setMinutes(setHours(new Date(), 4), 30);

console.log(format_too_early_msg(date1, date2));
