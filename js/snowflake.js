// var flakeColor = "#FF00FF";
function getColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
var newOn = 100;
var flake = $("<div></div>").css("position", "absolute").html("❄");
$(function () {
    var dwidth = $(document).width();
    var dheight = $(document).height();
    setInterval(function () {
        var startLeft = Math.random() * dwidth;
        var endLeft = Math.random() * dwidth;
        var flakeSize = 5 + 50 * Math.random();
        var durationTime = 4000 + 7000 * Math.random();
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.4 + 0.3 * Math.random();
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "font-size": flakeSize,
            //"color": flakeColor,
            "color": getColor(),
            "top": "-55px",
            "opacity": startOpacity
        }).animate({
            "top": dheight,
            "left": endLeft,
            "opacity": endOpacity
        }, durationTime, function () {
            $(this).remove();
        });
    }, newOn);
});

// var flakeColor = "#FF00FF";
function getColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
var newOn = 100;
var flake = $("<div></div>").css("position", "absolute").html("❄");
$(function () {
    var dwidth = $(document).width();
    var dheight = $(document).height();
    setInterval(function () {
        var startLeft = Math.random() * dwidth;
        var endLeft = Math.random() * dwidth;
        var flakeSize = 5 + 50 * Math.random();
        var durationTime = 4000 + 7000 * Math.random();
        var startOpacity = 0.7 + 0.3 * Math.random();
        var endOpacity = 0.4 + 0.3 * Math.random();
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "font-size": flakeSize,
            //"color": flakeColor,
            "color": getColor(),
            "top": "-55px",
            "opacity": startOpacity
        }).animate({
            "top": dheight,
            "left": endLeft,
            "opacity": endOpacity
        }, durationTime, function () {
            $(this).remove();
        });
    }, newOn);
});
