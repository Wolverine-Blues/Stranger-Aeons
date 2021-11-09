$(function() {
$(".navicon").on("click", function() {
    if ($(".navitem").hasClass("show")) {
        $(".navitem").removeClass("show");
    } else {
        $(".navitem").addClass("show");
    }
});
});
