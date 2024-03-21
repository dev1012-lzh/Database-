
document.title = 'Join Meeting';

setInterval(() => {
    var today = new Date();
    var year = today.getFullYear();
    var month = '0' + (today.getMonth() + 1);
    var day = today.getDate();

    var hour = today.getHours();
    if (hour > 12) {
        var hour = hour - 12;
        var daylight = 'pm';
    } else {
        var daylight = 'am';
    }
    var minute = today.getMinutes();
    if (minute < 10) {
        var minute = "0" + minute;
    }
    var second = today.getSeconds();
    if (second < 10) {
        var second = '0' + second;
    }

    var date = `${day} - ${month} - ${year}`;
    var time = `${hour}:${minute}:${second}`;

    var dateTime = `${date} ${time}`;
    console.log(dateTime)
    document.querySelector('h3#time').innerHTML = date;
    document.querySelector('h2#time').innerHTML = time + ' <span style="font-size:10px">' + daylight + '</span>';
}, 500);

function chkbox() {
    document.querySelector('button').innerHTML = 'Menyertai Temu Duga'
    document.querySelector('button').disabled = false;
    document.querySelector('#chkbox').disabled = true;
    document.querySelector('button').style.cursor = 'pointer';
    document.querySelector('button').style.background = 'white';
}