const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
const days = [
  "Sunday", "Monday",
  "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

let timestamp = new Date("2019-05-12T15:20:15+01:00")

let string = `${days[timestamp.getDay()]} ${timestamp.getDate()}th`
months[timestamp.getMonth()]
