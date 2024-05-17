let form1=document.querySelector(".form1");
let form2=document.querySelector(".form2");
let form3=document.querySelector(".form3");
let form4=document.querySelector(".form4");
let form5=document.querySelector(".form5");
let but1=document.querySelector(".save1");
let but2=document.querySelector(".save2");
let but3=document.querySelector(".save3");
let but4=document.querySelector(".add");
let but5=document.querySelector(".save4");
let but6=document.querySelector(".finish");
let inp1=document.getElementById("user");
let inp2=document.getElementById("last");
let inp3=document.getElementById("phone");
let inp4=document.getElementById("email");
let inp5=document.getElementById("sc");
let inp6=document.getElementById("desc");
let inp7=document.getElementById("jb");
let inp8=document.getElementById("o");
let inp9=document.querySelector(".con .form4 .mop .slc");
let inp10=document.querySelector(".con .form4 .mop .sk");
let but7=document.querySelector(".con .form4 .mop .sav .save4");
let but8=document.querySelector(".con .form4 .mop .sav .finish");
let inp11=document.querySelector(".con .form4 .mop .sk input");
let inp12=document.querySelector(".con .form4 .mop .slc select");
let div4=document.querySelector(".list .firs");
let jobdesc=document.querySelector('.descjb');
let lp1=document.querySelector(".con .form5 .popo .slco");
let lp2=document.querySelector(".con .form5 .popo .soko");
let but9=document.querySelector(".addd");
let but10=document.querySelector(".con .form5 .popo .savo .save5");
let but11=document.querySelector(".con .form5 .popo .savo .finisho");
let lp3=document.querySelector(".con .form5 .popo .soko input");
let lp4=document.querySelector(".con .form5 .popo .slco select");
let div10=document.querySelector(".lipo .ino");
let page=document.querySelector(".page");
let user=document.querySelector('.user');
let email=document.querySelector('.email');
let phone=document.querySelector('.phone');
let scholl=document.querySelector('.scholl');
let description=document.querySelector('.more');
let job=document.querySelector('.jbo');
let morejob=document.querySelector('.descjb');
let skill=document.querySelector('.name');
let perskill=document.querySelector('.specific');
let lang=document.querySelector('.lang');
let perlang=document.querySelector('.def');
let si=document.querySelector(".si");
let nono=document.querySelector(".nono")
ns=[];
np=[];
ln=[];
lp=[];
 let obj={
    "a":inp1.value,
    "b":inp2.value,
    "c":inp3.value,
    "d":inp4.value,
    "e":inp5.value,
    "f":inp6.value,
    "g":inp7.value,
    "h":inp8.value,
    "f":ns,
    "k":np,
    "l":ln,
    "m":lp
    }

but1.addEventListener("click",(ev)=>{
if(inp1.value && inp2.value && inp3.value
     && inp4.value.includes("@")){
    form1.style.display="none";
    form2.style.display="grid";
    obj={
        "a":inp1.value,
        "b":inp2.value,
        "c":inp3.value,
        "d":inp4.value,
        "e":inp5.value,
        "f":inp6.value,
        "g":inp7.value,
        "h":inp8.value,
        "f":ns,
        "k":np,
        "l":ln,
        "m":lp
        }
}else{
    ev.preventDefault()
}
})
but2.addEventListener("click",(ev)=>{
if(inp5.value && inp6.value){
form2.style.display="none";
form3.style.display="grid";
obj={
    n1:inp1.value,
    n2:inp2.value,
    n3:inp3.value,
    n4:inp4.value,
    n5:inp5.value,
    n6:inp6.value,
    n7:inp7.value,
    n8:inp8.value,
    n9:ns,
    n10:np,
    n11:ln,
    n12:lp
    }
}else{
ev.preventDefault();
}})
but3.addEventListener("click",(ev)=>{
if(inp7.value && inp8.value){
form3.style.display="none";
form4.style.display="grid";
obj={
    "a":inp1.value,
    "b":inp2.value,
    "c":inp3.value,
    "d":inp4.value,
    "e":inp5.value,
    "f":inp6.value,
    "g":inp7.value,
    "h":inp8.value,
    "f":ns,
    "k":np,
    "l":ln,
    "m":lp
    }
}else{
ev.preventDefault()
}
})
but4.addEventListener("click",()=>{
    inp9.style.display="grid";
    inp10.style.display="grid";
but7.style.display="block";
but7.addEventListener("click",(ev)=>{
    if(inp11.value !=""){
        but8.style.display="block"
        div1=document.createElement("div");
        div2=document.createElement("div");
        div1.innerHTML=inp11.value;
        div2.innerHTML=inp12.value;
        div4.appendChild(div1);
        div4.appendChild(div2);
        np[ns.length]=div1.innerHTML;
        ns[ns.length] =div2.innerHTML;
        obj={
            "a":inp1.value,
            "b":inp2.value,
            "c":inp3.value,
            "d":inp4.value,
            "e":inp5.value,
            "f":inp6.value,
            "g":inp7.value,
            "h":inp8.value,
            "f":ns,
            "k":np,
            "l":ln,
            "m":lp
            }
        inp11.value="";
    }else{
        ev.preventDefault()
    }
})
    })
but8.addEventListener("click",()=>{
    form4.style.display="none";
    form5.style.display="grid";
})
but9.addEventListener("click",()=>{
    lp1.style.display="grid";
    lp2.style.display="grid";
but10.style.display="block";
but10.addEventListener("click",(ev)=>{
    if(lp3.value !=""){
        but11.style.display="block"
        div8=document.createElement("div");
        div9=document.createElement("div");
        div8.innerHTML=lp3.value;
        div9.innerHTML=lp4.value;
        div10.appendChild(div8);
        div10.appendChild(div9);
        ln[ln.length]=div8.innerHTML;
        lp[lp.length] =div9.innerHTML;
        obj={
            "a":inp1.value,
            "b":inp2.value,
            "c":inp3.value,
            "d":inp4.value,
            "e":inp5.value,
            "f":inp6.value,
            "g":inp7.value,
            "h":inp8.value,
            "j":ns,
            "k":np,
            "l":ln,
            "m":lp
            }
        lp3.value="";
    }else{
        ev.preventDefault()
    }
})
    })
but11.addEventListener("click",()=>{
    x="";
    y=""
    form5.style.display="none";
    div12=document.createElement("div");
    div13=document.querySelector("div");
    div14=document.querySelector("div");
    div15=document.querySelector("div");
    user.innerHTML +=`${String(obj["a"]).toLocaleLowerCase()} ${String(obj["b"]).toLocaleLowerCase()}`
    email.innerHTML +=`${String(obj["d"]).toLowerCase()}`
    phone.innerHTML +=`${String(obj["c"]).toLowerCase()}`
    scholl.innerHTML +=`${String(obj["e"]).toLowerCase()}`
    description.innerHTML +=`${String(obj["f"]).toLowerCase()}`
    job.innerHTML +=`${String(obj["g"]).toLowerCase()}`
    morejob.innerHTML +=`${String(obj["h"]).toLowerCase()}`
    for(i=0;i<obj["k"].length;i++){
     if(String(obj["j"][i]).toLowerCase() == "beginner"){
        x +=`<div>
        <span>${String(obj["k"][i]).toLowerCase()}</span>
        <span data-per="25%" style="width:25%;"></span>
        </div>`
        }else if(String(obj["j"][i]).toLowerCase() == "middle"){
            x +=`<div>
            <span>${String(obj["k"][i]).toLowerCase()}</span>
            <span data-per="50%" style="width:50%;"></span>
            </div>`
        }else if(String(obj["j"][i]).toLowerCase() == "enabled"){
            x +=`<div>
            <span>${String(obj["k"][i]).toLowerCase()}</span>
            <span data-per="75%" style="width:75%;"></span>
            </div>`
        }else{
            x +=`<div>
            <span>${String(obj["k"][i]).toLowerCase()}</span>
            <span data-per="100%" style="width:100%;"></span>
            </div>` 
        }
    }
    si.innerHTML =x
    for(j=0;j<obj["l"].length;j++){
        if(String(obj["m"][j]).toLowerCase() =="beginner"){
            y +=`<div>
            <span>${String(obj["l"][j]).toLowerCase()}</span>
            <span data-pe="25%" style="width:25%;"></span>
            </div>`
        }else if(String(obj["m"][j]).toLowerCase() =="middle"){
            y +=`<div>
            <span>${String(obj["l"][j]).toLowerCase()}</span>
            <span data-pe="50%" style="width:50%;"></span>
            </div>`
        }else if(String(obj["m"][j]).toLowerCase() =="enabled"){
            y +=`<div>
            <span>${String(obj["l"][j]).toLowerCase()}</span>
            <span data-pe="75%" style="width:75%;"></span>
            </div>`
        }else{
            y +=`<div>
            <span>${String(obj["l"][j]).toLowerCase()}</span>
            <span data-pe="100%" style="width:100%;"></span>
            </div>`
        }
    }
    nono.innerHTML =y
    page.style.display="block";
})

