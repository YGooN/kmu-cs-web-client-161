function image() {
    $("#a").fadeToggle();
}

function aaa() {
    $("#b").fadeToggle();
}

function a(){
    setTimeout(image, 0);
    setTimeout(image, 1000);
    setTimeout(aaa, 1500);
    setTimeout(aaa, 2500);
}
setInterval(a, 3000)