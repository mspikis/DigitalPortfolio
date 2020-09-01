$(document).ready(function () {
    $("#sym").click(function () {
        $(".dMenu").css("bottom", "-16vh");
        $("#frame").css("border-bottom-width", "3.7vh");
        $("#arrow").css("visibility", "visible");
    });
    $("#arrow").click(function () {
        $(".dMenu").removeAttr('style');
        $("#frame").removeAttr('style');
        $("#arrow").css("visibility", "hidden");
    });
});