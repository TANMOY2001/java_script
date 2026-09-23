var a=document.getElementById("a");
var b=document.getElementById("b");
var flag=0;
b.addEventListener("click",function(){
    if(flag==0){
    a.style.backgroundColor="rgb(236, 248, 3)";
    b.innerHTML="off";
    flag=1;
    }
    else{
        a.style.backgroundColor="transparent";
        b.innerHTML="on";
        flag=0;
    }

});