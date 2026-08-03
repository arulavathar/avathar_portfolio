/* ==========================================
        TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Software Development Engineer",
    "AWS Cloud Engineer",
    "Java Developer",
    "Ex-SDE Intern at Amazon"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


/* ==========================================
        DARK MODE
========================================== */

const themeButton = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeButton.innerHTML = "☀️";
}

themeButton.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        themeButton.innerHTML="☀️";
    }
    else{
        localStorage.setItem("theme","dark");
        themeButton.innerHTML="🌙";
    }

});


/* ==========================================
        SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    "section,.project,.card"
);

function reveal(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((item)=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){
            item.classList.add("show");
        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


/* ==========================================
        NAVBAR EFFECT
========================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        nav.style.background="rgba(0,0,0,.65)";
        nav.style.boxShadow="0 8px 30px rgba(0,0,0,.25)";

    }
    else{

        nav.style.background="rgba(0,0,0,.25)";
        nav.style.boxShadow="none";

    }

});


/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.pageYOffset>=top){
            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){
            link.classList.add("active");
        }

    });

});


/* ==========================================
        BACK TO TOP BUTTON
========================================== */

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.background="#38bdf8";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 8px 25px rgba(0,0,0,.25)";
topButton.style.transition=".3s";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }
    else{

        topButton.style.display="none";

    }

});

topButton.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ==========================================
        STATS COUNTER
========================================== */

const counters=document.querySelectorAll(".counter");

const speed=40;

function animateCounters(){

    counters.forEach(counter=>{

        const target=+counter.getAttribute("data-target");

        let count=0;

        const update=()=>{

            const increment=Math.ceil(target/speed);

            count+=increment;

            if(count<target){

                counter.innerText=count;

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

}


/* ==========================================
        START COUNTERS WHEN VISIBLE
========================================== */

const stats=document.querySelector("#stats");

if(stats){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounters();

observer.disconnect();

}

});

});

observer.observe(stats);

}


/* ==========================================
        PRELOADER (Optional)
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});