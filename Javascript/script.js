/////               //////
///// Navbar toggle//////
/////              /////

//for some reason I couldn't get vanilla javascript to work properly with my nav bar. 
//Most likely because I didnt group my links inside a div.

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

/////            /////
///// ABOUT PAGE /////
/////            /////

// const ans = document.getElementsByClassName("ans"); 
const quest = document.getElementsByClassName("quest");

for (index = 0; index < quest.length; index++) {
    quest[index].addEventListener("click", function() {

    const ans = this.nextElementSibling;
    if (ans.style.display ==="block") 
    {
        ans.style.display ="none";
    } 
    
    else 
    {
        ans.style.display ="block";
    }
    
    this.classList.toggle("highlight")
});
}

/////                       /////
///// Form email validation /////
/////                       /////

//had to use var here. let or const breaks the function 

function formValidate() {
{var bandData= document.getElementById("bandname").value}; 
{var emailData= document.getElementById("email").value};
{var demoData= document.getElementById("demofield").value};
{var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;}

    if(emailData.match(mailFormat))
    {
        alert("Thanks for your interest, " +bandData +". I'll be in touch with you soon at " +emailData 
        +" if you gave me a demo link it was "+ demoData);
        return true;
    }

    else
    {
    alert("The email address was invalid.");
    return false;
    }
}

