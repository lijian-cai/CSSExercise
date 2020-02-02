let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.sec');
let inputTime = +new Date('2020-02-02 18:00:00');
// 防止空白
countdown();

setInterval(countdown, 1000);

function countdown() {
    let nowTime = +new Date();
    let times = (inputTime - nowTime) / 1000;
    let h = parseInt(times / 60 / 60 % 24);
    h = h < 10 ? '0' + h : h;
    hour.innerHTML = h;
    let m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    minute.innerHTML = m;
    let s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
}