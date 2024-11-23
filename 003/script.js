const now = document.querySelector("#now")

setInterval(function () {
    let date = new Date();
    // date.toTimeString()
    // console.log(date.toLocaleTimeString());
    now.innerHTML = date.toLocaleTimeString();
}, 1000)