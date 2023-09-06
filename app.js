let second =document.querySelector(".second-hand");
let minute =document.querySelector(".minute-hand");
let hour =document.querySelector(".hour-hand");
function showTime(){
    let time= new Date();
    second.style.transform=`rotate(${time.getSeconds()*6}deg)`;
    minute.style.transform=`rotate(${time.getMinutes()*6 }deg)`;
    hour.style.transform=`rotate(${time.getHours()*30 + time.getMinutes()/2}deg)`;
}

setInterval(showTime, 1000);
