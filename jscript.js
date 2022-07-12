function fun() {
    var x = document.getElementById("hnavi");
    var y=document.getElementById("vnavi");
    if (x.style.display === "none")
    {
      x.style.display = "block";
      y.style.display="none";
    }
    else
    {
      x.style.display = "none";
      y.style.display = "block";
    }
  }

var list=["url('1.jpg')","url('4.jpg')","url('12.jpg')","url('malayantiger.jpg')","url('13.jpg')"]
var i=0
function chameleon_body()
{
document.getElementById("main-middle").style.backgroundImage=list[i];
i=(i+1)%list.length;
setTimeout(chameleon_body,1000);
}
chameleon_body();
function faculty()
{
  document.getElementById("middle").innerHTML="<object data='faculty.html' height='506.25' width='100%'></object>"
}
function student()
{
  document.getElementById("middle").innerHTML="<object data='student.html' height='506.25' width='100%'></object>"
}
function contactus()
{
  document.getElementById("middle").innerHTML="<object data='contactus.html' height='506.25' width='100%'></object>"
}

function search(){
  var j=document.getElementById('entry').value;
  var k;
  for(let i=1;i<12;i++){
      k=document.getElementById('v'+i).innerText;
      if(k.indexOf(j)==-1){
          document.getElementById('v'+i).style.display='none';
      }else{
          document.getElementById('v'+i).style.display='inline-block';
      }
  }
}

setInterval(search,1000);
function notification(l){
  var note=['Monkeys are more in RGUKT !','Rare Butterflies are found in RGUKT !','Fine Arts Department functions very well !','Mango plantations are located in RGUKT !','RGUKT uses Solar Energy !','Squirrels are rare in RGUKT !','Dogs are there in RGUKT !'];
  var k=l;
  for(let i=1;i<8;i++){
      document.getElementById('div_'+i).innerText=note[k];
      k+=1;
      if(k==note.length){
          k=0;
      }
  }
  setTimeout(notification,1000,((l+1)%note.length));
}
notification(0);

function show(k){
  var j=k.nextElementSibling;
  if(j.style.display=='inline-block'){
      j.style.display='none';
  }else{
    k.nextElementSibling.style.display='inline-block';
  }
}