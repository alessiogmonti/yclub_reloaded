const SecondsToTime = (sec_num) => {

    let days  = Math.floor(sec_num / (24 * 60 * 60));
    let hours   = Math.floor((sec_num - (days * 24 * 3600)) / 3600);
    let minutes = Math.floor((sec_num - (days * 24 * 3600) - (hours * 3600)) / 60);
    let seconds = sec_num - (days * 24 * 3600) - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return days !== 0 ? `${days} : ${hours} : ${minutes} : ${seconds}` : `${hours} : ${minutes} : ${seconds}`
}

export default SecondsToTime;