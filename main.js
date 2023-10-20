function formValidate() {
 var name = document.getElementById("name").Value;
var family  = document.getElementById("family name").Value;
var Email = document.getElementById("Email").Value;
var password = document.getElementById("password").Value;
var error = document.getElementById("error").Value;
var text = "";


 if(name.length < 5 ){
    text = "Please Enter Vaild Email";
    error.innerHtml = text;
    return false;
}

else if(family.length < 5 ){

    text = "Please Enter Vaild Email";
    error.innerHtml = text;
    return false;
}

else if(Email.indexOf("@")== -1 ){

    text = "Please Enter Vaild Email";
    error.innerHtml = text;
    return false;
}
else if(password.length < 8){

    text = "Please Enter Vaild Password";
    error.innerHtml = text;
    return false;
}


else {
return true;
}
}




