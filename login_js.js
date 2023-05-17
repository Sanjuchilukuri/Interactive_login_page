const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//generate_captha funtions helps to create a captcha 
function generate_captha(length) 
{
    var result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) 
    {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById("captha").innerHTML=result;
}
//validate funtions helps to valid  captcha if it is correct it redirects to another page 
function validate()
{
    var user_name=document.getElementById("user").value;
    var capp=document.getElementById("c").value;
    var a_capp=document.getElementById("captha").innerHTML;
    if(user_name=="")// If userbame is empty
    {
        document.getElementById("span").innerHTML="** Enter Username";
        return false;
    }
    else if(a_capp!=capp)// If validation is unsuccessful
    {
        document.getElementById("span").innerHTML="** captcha Invalid!..";
        return false;
    }
    else if(a_capp== capp) // If login validation is successful
    {
        // Navigate to the new page
        window.location.replace("https://sanjuchilukuri.github.io/portfolio/");
        return true;
    }
}
