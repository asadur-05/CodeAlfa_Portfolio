var tablinks= document.getElementsByClassName("tab-links"); //accessing class tab-links
var tabcontents= document.getElementsByClassName("tab-contents");//accessing class tab-contents

let form=document.getElementById("contact-form");


//adding remove and add  function when Click on skills , Experience & Education.
function opentab(tabname){
    for(links of tablinks){
        links.classList.remove("active-link");//removing underline
    }
    for(contents of tabcontents){
        contents.classList.remove("active-tab");//removing lists
    }
    event.currentTarget.classList.add("active-link");//adding underline
    document.getElementById(tabname).classList.add("active-tab");//adding lists
}

//side menu function for phones
var sidemenu = document.querySelector("#sidemenu");

function openmenu(){
    sidemenu.style.right ="0px";
}
function closemenu(){
    sidemenu.style.right ="-280px";
}

//reset function for  the contact-form after submit the form.
const btn =document.querySelector(".btn2");
btn.addEventListener("click", ()=>{

    setTimeout(()=>{
        form.reset();
    },250);
})

