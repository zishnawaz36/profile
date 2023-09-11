
var addfrined=document.querySelector("#add");
var b=document.querySelector("h5");
var flag=0;
addfrined.addEventListener("click",function(){
    if(flag==0){
        b.innerHTML="Following";
       b.style.color="green";
        flag=1;
    }
    else{
        b.innerHTML="unfollow";
        flag=0;
    }
    })
    var c=document.querySelector("#remove");
    var virat=0;
    c.addEventListener("click",function(){
        if(virat==0){
            b.innerHTML="unfollow";
            b.style.color="red";
            flag=1;
        }
    })
    var d=document.querySelector(".icon-large");
    var heart=0;
    d.addEventListener("click",function(){
if(heart==0){
    d.style.backgroundColor="red";
    heart=1;
}
else{
    d.style.backgroundColor="transparent";
    heart=0;
}
    })
    