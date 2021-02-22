function sendTelegram(str) {
    let url = `https://api.tlgr.org/bot1352782865:AAHjN_YICWRfoQc3n_uX_s6p7Op9cIQr6fo/sendMessage?chat_id=80268845&text=`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + str, true);
    xhttp.send();
}