//==================== SCROLL TO TOP ====================//

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//==================== NAVBAR SHADOW ====================//

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 20px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 4px 15px rgba(0,0,0,.08)";

}

});

//==================== TYPING EFFECT ====================//

const text=[
"Advanced Excel & MIS Executive",
"Payroll Automation",
"MIS Reporting",
"Power BI Dashboards Developer",
];

let count=0;

let index=0;

let currentText="";

let letter="";

(function type(){

if(count===text.length){

count=0;

}

currentText=text[count];

letter=currentText.slice(0,++index);

document.querySelector(".hero-content h2").textContent=letter;

if(letter.length===currentText.length){

count++;

index=0;

setTimeout(type,1500);

}else{

setTimeout(type,120);

}

})();
//==================== MOBILE MENU ====================//

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

};

//==================== DARK MODE ====================//

const theme=document.getElementById("themeIcon");

theme.onclick=()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

theme.classList.remove("fa-moon");

theme.classList.add("fa-sun");

}else{

theme.classList.remove("fa-sun");

theme.classList.add("fa-moon");

}

};

//==================== SCROLL REVEAL ====================//

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

});

reveals.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition=".8s";

});


window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

//================ COUNTER =================//

const counters=document.querySelectorAll(".about-info h3");

counters.forEach(counter=>{

const update=()=>{

const target=Number(counter.innerText.replace("+","").replace("%",""));

let count=0;

const interval=setInterval(()=>{

count++;

counter.innerText=count;

if(counter.innerText.includes("%")){

counter.innerText=count+"%";

}

if(count>=target){

clearInterval(interval);

if(target!=100){

counter.innerText=target+"+";

}else{

counter.innerText="100%";

}

}

},20);

};

update();

});
