///// Navbar toggle//////
$(function() {
$(".navicon").on("click", function() {
    if ($(".navitem").hasClass("show")) {
        $(".navitem").removeClass("show");
    } else {
        $(".navitem").addClass("show");
    }
});
});

///// Form Data/////
function formFunct()
{
    {var bandData= document.getElementById("bandname").value;}
    {var emailData= document.getElementById("email").value;}
    {var fieldData= document.getElementById("field").value;}

    alert("Thanks for your interest, " +bandData +". I'll be in touch with you soon at " +emailData)
}

