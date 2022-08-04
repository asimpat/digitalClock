"use strict";

let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");

function calTime() {
    let date = new Date();
    // console.log(date);
    let dayNumber = date.getDay();
    // console.log(dayNumber);
    let hours = date.getHours();
    // console.log(hours);
    let minutes = date.getMinutes();
    // console.log(minutes);
    let seconds = date.getSeconds();
    // console.log(seconds);
    let session = hours >= 12 ? "PM" : "AM";
    let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    hours = hours > 12 ? hours - 12 : hours; //Convert to 12 o clock format
    hours = hours ? hours : "12";
    hours = hours < 10 ? "0" + hours : hours; //for hours to container a 0 when less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes; //for minutes to container a 0 when less than 10
    seconds = seconds < 10 ? "0" + seconds : seconds; //for seconds to container a 0 when less than 10

    day.textContent = dayNames[dayNumber];
    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
    ampm.textContent = session;

    setTimeout(calTime, 200); // Calling the function over and over again to make the time continue to work and give you the correct time and date
    // console.log(date);
}
calTime();