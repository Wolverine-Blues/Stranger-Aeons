/////               //////
///// Navbar toggle//////
/////              /////
$(function() {

$(".navicon").on("click", function() {
    if ($(".navitem").hasClass("show")) 
    {
        $(".navitem").removeClass("show");
    } 
    else 
    {
        $(".navitem").addClass("show");
    }
});
});     


//commented code below kept breaking in browser but rewriting it in
//jquery above fixed it. keeping this just in case I can get it to work with
//vanilla js

// let navItem = document.getElementsById("navitem");
// let navIcon = document.getElementsById("navicon");
// navIcon.addEventListener("click", () => {
//     if (navItem.classList.contains("show")){
//         navItem.classList.remove("show");
//     }
//     else {
//         (navItem.classList.add("show"));
//     }
// }
// )


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

