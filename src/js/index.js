(function() {
    let date = new Date()
    let hourTransform = date.getHours() * 30;
    document.querySelector('.hours').style.transform = "rotate(" + hourTransform + "deg)";
    let minutesTransform = date.getMinutes() * 6;
    document.querySelector('.minutes').style.transform = "rotate(" + minutesTransform + "deg)";
    let secondsTransform = date.getSeconds() * 6;
    document.querySelector('.seconds').style.transform = "rotate(" + secondsTransform + "deg)";
})();