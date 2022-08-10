var t;
function set() {
    document.getElementById("output").style.display = "block"
    t = input.value;
    document.getElementById("output").textContent = "あと" + t + "秒"
    setTimeout(count, 1000)
}
function count() {
    if (t === 0) {
        document.getElementById("output").style.display = "none"
    } else {
        t --
        document.getElementById("output").textContent = "あと" + t + "秒"
        setTimeout(count, 1000)
    }
}