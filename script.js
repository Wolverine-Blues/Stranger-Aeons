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

function formFunct()
    {
    if(document.getElementById("bandname").value.length == 0)
        {alert("Band Name is invalid")}
    if(document.getElementById("email").value.length == 0)
        {alert("Email is invalid")}
    
    else{
    {var bandData= document.getElementById("bandname").value;} //let doesn't work to declare variable here for some reason
    {var emailData= document.getElementById("email").value;}
    {var fieldData= document.getElementById("field").value;}

    alert("Thanks for your interest, " +bandData +". I'll be in touch with you soon at " +emailData)
    }
}

// function formFunct()
// {
//     {var bandData= document.getElementById("bandname").value;} //let doesn't work to declare variable here for some reason
//     {var emailData= document.getElementById("email").value;}
//     {var fieldData= document.getElementById("field").value;}

//     alert("Thanks for your interest, " +bandData +". I'll be in touch with you soon at " +emailData)
// }


