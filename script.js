setInterval(() => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log(dateTime)
    document.querySelector('h3').innerHTML = date;
    document.querySelector('h2').innerHTML = time;
}, 1000);