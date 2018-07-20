$(".subtext p").on("click", function() {
    if ($(this).hasClass("button_focus")) {;
        $(this).removeClass("button_focus");
        $(this).addClass("button_normal");
    } else {
        $(this).removeClass("button_normal");
        $(this).addClass("button_focus");
    }
});