let startmenu=document.querySelector("start-menu")
let taskbar=document.querySelector("task-bar")

taskbar.addEventListener("click",function(){
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
      startmenu.style.bottom == "-655px"
    }else{
        startmenu.style.bottom == "50px";
    }
})