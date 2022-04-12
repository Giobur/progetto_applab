let stars = document.getElementById('stars');
          let applab = document.getElementById('applab');
          let mountains_behind = document.getElementById('mountains_behind');
          let text = document.getElementById('text');
          let btn = document.getElementById('btn');
          let mountains_front = document.getElementById('mountains_front');
          let header = document.queryCommandValue('header');


          window.addEventListener('scroll',function(){
               let value = window.scrollY;
               stars.style.left = value * 0.25 + 'px';
               applab.style.top = value * 1.05 + 'px';
               mountains_behind.style.top = value * 0.5 + 'px';
               mountains_front.style.top = value * 0 + 'px';
               text.style.marginRight = value * 3 + 'px';
               text.style.marginTop = value * 1.5 + 'px';
               btn.style.marginTop = value * 1.5 + 'px';
               header.style.top = value * 0.5 + 'px';
          })



const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

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

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();