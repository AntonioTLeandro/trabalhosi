$("#menu").mouseenter(function (e) {
    $("#menu").css({"width":"300px", "height": "210px"})
    $("#menu_options").css({"display":"block"})
})
$("#menu").mouseleave(function (e) {
    $("#menu").css({"width":"", "height": ""})
    $("#menu_options").css({"display":"none"})
})

