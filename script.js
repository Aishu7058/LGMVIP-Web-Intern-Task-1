var v=document.getElementById("t1");
const ul=document.getElementById("tb");
var c=document.getElementById("completed");
var selected;
var taskl=document.getElementById("tl");

t1.addEventListener("keydown",function(e){
    if(e.key==="Enter"){ addTask(e);}
});

function addTask(e){
    var t=e.target.value;
    const li=document.createElement("li");
    li.setAttribute('id',t);
    li.appendChild(document.createTextNode(t));
    ul.appendChild(li);
    v.value=" ";
    
    //marsk task as completed
    li.addEventListener("click",function(e){
        selected=li.innerHTML;
        taskl.innerHTML+=selected+" ";
    });
    
   
    //clear tasks
    var rt=document.getElementById("rt");
    rt.addEventListener("click",function(){
        li.remove();
    }) 
}
