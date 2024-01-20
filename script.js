let container = document.getElementById("container");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayDate = new Date();
console.log(todayDate);

let date = todayDate.getDate();
let month = months[todayDate.getMonth()];
let year = todayDate.getFullYear();
let day = days[todayDate.getDay()];
console.log(month);
console.log(day);
console.log(date);
console.log(year);

const monthDiv = document.createElement("p");
monthDiv.innerText = month;
monthDiv.className = "month";
container.appendChild(monthDiv);

const dayDiv = document.createElement("p");
dayDiv.innerText = day;
dayDiv.className = "day";
container.appendChild(dayDiv);

const dateDiv = document.createElement("p");
dateDiv.innerText = date;
dateDiv.className = "date";
container.appendChild(dateDiv);

const yearDiv = document.createElement("p");
yearDiv.innerText = year;
yearDiv.className = "year";
container.appendChild(yearDiv);
