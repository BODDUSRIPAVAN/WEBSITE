var ok=1;
function first_fun()
{
    var first=document.getElementById("first").value
    var first_regex=/^[a-z_]{3}[a-z_]*$/i
    if(!first_regex.test(first))
    {
        document.getElementById("first").style.border="10px solid red";
       document.getElementById("l1").style.visibility="visible";
       ok=0;
    }
    else
    {
        document.getElementById("first").style.border="1px solid black";
        document.getElementById("l1").style.visibility="hidden";
        ok=1;
    }
}
function last_fun()
{
    var first_regex=/^[a-z_]{3}[a-z_]*$/i
    var last=document.getElementById("last").value
    if(!first_regex.test(last))
    {
        document.getElementById("last").style.border="10px solid red";
        document.getElementById("l2").style.visibility="visible";
        ok=0;
    }
    else
    {
        document.getElementById("last").style.border="1px solid black";
        document.getElementById("l2").style.visibility="hidden";
        ok=1;
    }
}
function middle_name()
{
    var middle=document.getElementById("middle").value
    var middle_regex=/^[a-z_]*$/i
    if(!middle_regex.test(middle))
    {
        document.getElementById("middle").style.border="10px solid red";
        document.getElementById("l3").style.visibility="visible";
        ok=0;
    }
    else
    {
        document.getElementById("middle").style.border="1px solid black";
        document.getElementById("l3").style.visibility="hidden";
        ok=1;
    }
}
function full_name()
{
    if(ok==1)
    {
        document.getElementById("full").value=document.getElementById("first").value+document.getElementById("last").value
    }
    else
    {
        document.getElementById("full").value="";
    }
}
function phone_num()
{
    var nation=document.getElementById("country").value
    var pho=document.getElementById("phone").value
    var nation_india=/^[6789][0-9]{9}$/
    var nation_usa=/^([0-9]{3}-){2}[0-9]{4}$/
    if(nation==="INDIA")
    {
        if(!nation_india.test(pho))
        {
            document.getElementById("phone").style.border="10px solid red";
            document.getElementById("l4").style.visibility="visible";
            ok=0;
        }
        else
        {
            document.getElementById("phone").style.border="1px solid black";
            document.getElementById("l4").style.visibility="hidden";
            ok=1;
        }
    }
    if(nation==="USA")
    {
        if(!nation_usa.test(pho))
        {
            document.getElementById("phone").style.border="10px solid red";
            document.getElementById("l4").style.visibility="visible";
            ok=0;
        }
        else
        {
            document.getElementById("phone").style.border="1px solid black";
            document.getElementById("l4").style.visibility="hidden";
            ok=1;
        }
    }
}
function pswd_len()
{
    var psswd=document.getElementById("password").value;
    if(psswd.length<6)
    {
        document.getElementById("password").style.border="10px solid red";
        document.getElementById("lp").style.visibility="visible";
        ok=0;
    }
    else
    {
        document.getElementById("password").style.border="1px solid black";
        document.getElementById("lp").style.visibility="hidden";
        ok=1;
    }
}
var i=0
function reveal()
{
    if(i==0)
    {
        document.getElementById("password").type="text"
        i=1
    }
    else
    {
        document.getElementById("password").type="password"
        i=0
    }
}
function hobbies()
{
    var c1=(document.getElementById("h1").checked)?1:0
    var c2=(document.getElementById("h2").checked)?1:0
    var c3=(document.getElementById("h3").checked)?1:0
    var c4=(document.getElementById("h4").checked)?1:0
    var c5=(document.getElementById("h5").checked)?1:0
    if(c1+c2+c3+c4+c5<2)
    {
        document.getElementById("h1").style.backgroundColor="red";
        document.getElementById("l5").style.visibility="visible";
        ok=0;
    }
    else
    {
        document.getElementById("h1").style.border="1px solid #000000";
        document.getElementById("l5").style.visibility="hidden";
        ok=1;
    }
}
function emaill()
{
    var pat=/^[a-z][a-z0-9_?\.?\!\#\$\%\&\`\*\+\-\/\=\?\^\_\'\{\|]*@[a-z]+\.[a-z]+(\.[a-z]+)?$/i
    var mail=document.getElementById("email").value
    if(!pat.test(mail))
    {
        document.getElementById("email").style.border="10px solid red";
        document.getElementById("l7").style.visibility="visible";
        ok=0;
    }
    else
    {
        document.getElementById("email").style.border="1px solid black";
        document.getElementById("l7").style.visibility="hidden";
        ok=1;
    }
}
function age()
            {
                var abc=document.getElementById("dob").value;
                var dob=new Date(abc);
                var today = new Date();
                var a=new Date(today-dob);
                document.getElementById("agee").value=(a.getFullYear()-1970+"-years,"+a.getMonth()+"-months,"+a.getDay()+"-days")
            }
function address_fun()
{
    var addr=document.getElementById("address").value
    var addr_regex=/[0-9]+/
    if(addr_regex.test(addr))
    {
        var s=""
        for(k of addr)
        {
            if(!addr_regex.test(k))
            {
                s=s+k
            }
        }
        document.getElementById("address").value=s
    }    
}
function req()
{
    var req=document.getElementById("require").checked
    if(req==false)
    {
        document.getElementById("l10").style.visibility="visible";
        ok=0;
    }
    else
    {
        document.getElementById("l10").style.visibility="hidden";
        ok=1;
    }
}
function confirmation()
        {
            var choice=confirm("Enter 'Ok' to confirm 'Cancel' to deny !")
            if(choice)
                document.getElementById("reset_confirm").type="reset"
            else
                document.getElementById("reset_confirm").type="button"
        }
function submitting()
        {
            var a=confirm("Press Ok to submit Cancel to deny !")
            if(a && ok==1)
            {
                document.getElementById("submit_confirm").type="submit"
            }
            else
            {
                document.getElementById("submit_confirm").type="button"
            }
        }
function validate()
{
    if(ok===1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function photo_size(input) {
    const fileSize = input.files[0].size / 1024 / 1024;
    if (fileSize > 50) {
      alert('File size exceeds 50 kb');
      ok=0;
    } else {
      ok=1;
    }
  }