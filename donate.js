
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    return re.test(input_str);
}

function validates() {
    var userfname = document.getElementById("logfname").value;
    var userlname = document.getElementById("loglname").value;
    var Age = document.getElementById("logage").value;
    var userbloodgroup = document.getElementById("logbg").value;
    var userphone = document.getElementById("logph").value;
    var userstate = document.getElementById("logst").value;
    var userdisct = document.getElementById("logdct").value;
    var useraddress = document.getElementById("logad").value;
    if (userfname !== "") {
        if (Age !== "") {
            if (userbloodgroup !== "") {
                if (userphone !== "") {
                    if (userstate !== "") {
                        if (userdisct !== "") {
                            if (useraddress === "") {
                                alert("enter Your Details");
                                
                            }
                            else
                            {

                            }
                            
                        }
                        else
                        {
                            alert("Select Your District");
                        }

                    }
                    else
                    {
                        alert("Select Your State");
                    }
                    
                }
                else
                {
                    alert("enter Your Phone No");
                }
            }
            else
            {
                alert("Select Your Blood Group");
            }
        }
        else
        {
            alert(" Enter Your age");
        }
    }
    else
    {
        alert("Enter Your Name");
    }
    if (useraddress !== "")
    {
        if(userstate=="Andhra Pradesh")
        {
            if(userdisct=="Vishakapatanam")
            {
                if (userfname.length >6)
                {
                    if (Age>=18)
                    {
                        if (!validatePhoneNumber(userphone))
                        {
                            alert("please enter valid no");
                        }
                        else
                        {
                            window.location = "thankyou.html";
                        }
                    }
                    else
                    {
                        alert("Age sholud be >= 18");
                    }
                }
                else
                {
                    alert("Name sholud be atleast 6 letters");
                }
            }
            else
            {
                alert("Sorry we did not start out services there");
            }
        }              
        else
        {
            alert("Sorry we did not start out services there");
        }
         event.preventDefault();
        
    }
     
}