/////               //////
///// Navbar toggle//////
/////              /////
$(function() {
$(".navicon").on("click", function() {
    if ($(".navitem").hasClass("show")) {
        $(".navitem").removeClass("show");
    } else {
        $(".navitem").addClass("show");
    }
});
});

/////                       /////
///// Form email validation /////
/////                       /////
function formValidate()
{
{var bandData= document.getElementById("bandname").value}; 
{var emailData= document.getElementById("email").value};
{var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;}

if(emailData.match(mailFormat))
{
alert("Thanks for your interest, " +bandData +". I'll be in touch with you soon at " +emailData);
return true;
}

else
{
alert("The email address was invalid");
return false;
}
}

