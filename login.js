
function validates()
{
var usermail = document.getElementById("logemail").value;
var password = document.getElementById("logpass").value;
if ( usermail == "Blooddonation@gmail.com" && password == "G")
{
window.location = "homepage.html"; // Redirecting to other page.
return false;
}
else
{
alert("please enter valid details");
}
}


