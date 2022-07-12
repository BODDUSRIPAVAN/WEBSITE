var i=0;
function reveal()
{
    if(i==0)
    {
        document.getElementById("password").type="text";
        i=1;
    }
    else
    {
        document.getElementById("password").type="password";
        i=0;
    }
}
function valid()
{
    var t=document.getElementById("username").value;
    var pattern=/^f[\w]+$/i
    if(!pattern.test(t))
    {
        document.getElementById("username").style.background="red";
        return false;
    }
    else
    {
        document.getElementById("username").style.background="white";
        return true;
    }
}