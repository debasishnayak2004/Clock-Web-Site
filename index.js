let hours = document.querySelector(".hours");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");



setInterval(() => {
     let d = new Date();
     htime = d.getHours();
     mtime = d.getMinutes();
     stime = d.getSeconds();
    hrotate = 30*htime + mtime/2;
    mrotate = 6*mtime;
    srotate = 6*stime;

    hours.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;

}, 1000);
