function checkEmail(mail)
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}
function signup()
{
    var username = document.getElementById("logname").value;
    var useremail = document.getElementById("logmail").value;
    var userpass = document.getElementById("logpas").value;
    var userrepass = document.getElementById("logrepas").value;
    var userage = document.getElementById("logage").value;
    var userblood = document.getElementById("logbg").value;
    if (username!="")
    {
        if ( useremail != "")
        {
            if (userpass!="")
            {
                if (userrepass!="")
                {
                    if (userage!="")
                    {
                        if (userblood=="")
                        {
                            alert("please select bloodgroup");
                            
                        }
                        else
                        {

                        }
                    }
                    else
                    {
                        alert("please enter age");
                    }
                }
                else
                {
                    alert("please enter samepassword");
                }
            }
            else
            {
                alert("please enter password");
            }
        }
        else
        {
            alert("please enter email");
        }
    }
    else
    {
        alert("please enter your name");
    }
    if (userblood!="")
    {
        if (username.length>=6)
        {
            if (userpass==userrepass)
            {
                if (userage>=18)
                {
                    if (checkEmail(useremail)== true) 
                    {
                        alert('Sign up Successful');
                        return false
                    }
                    else
                    {
                        alert('Please provide a valid email address');
                    }
                }
                else
                {
                    alert("age sholud be greater than 18");

                }
            }
            else
            {
                alert("password should be matched");
            }
        }
        else
        {
           alert("Name sholud be atleast 6 letters"); 
        }
    }

}


