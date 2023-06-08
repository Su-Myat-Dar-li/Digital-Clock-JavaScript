function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";
    //hour
    if (hour === 0){
        hour = 12 ;
    }
    if ( hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    var time = document.getElementById("clockDisplay");
    time.innerHTML = `<p>${hour} : ${minute} : ${second} <span>${session}</span> </p>`;
    setTimeout(showTime,1000);
}
showTime();

function showDate(){
    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();

    if(day < 10){
        day = "0" + day;
    }
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = months[date.getMonth()];

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekDay = days[date.getDay()];

    var calender = document.getElementById("dayDisplay");
    calender.innerHTML = `<p>${day} - ${month} - ${year} <span>Today is Happy <b>${weekDay}<b></span> </p>`;
}
showDate();