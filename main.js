let item1=document.querySelector('.item1');
let arrowright=document.querySelector('.leftright').lastElementChild;
arrowright.addEventListener('click',plus)
let arrowleft=document.querySelector('.leftright').firstElementChild;
arrowleft.addEventListener('click',minus)
let slides=document.querySelectorAll('.mySlides');

let i=1;

function plus(){
    if(i==3)i=1;
    else i++;
    slides[i-1].style.display="block";
    for(let j=0;j<slides.length;j++){
        if(j!=(i-1)) slides[j].style.display="none";
    }
    swap();
};
function minus(){
    if(i==1)i=3;
    else i--;
    slides[i-1].style.display="block";
    for(let j=0;j<slides.length;j++){
        if(j!=(i-1)) slides[j].style.display="none";
    }
    swap();
};
function swap(){
    item1.setAttribute('style',`background: url("images/desktop-image-hero-${i}.jpg") no-repeat  center/cover `)
}
let menu=document.querySelector('.menu');
let leftright=document.querySelector('.leftright');

function myFunction(x) {
    if (x.matches) { // If media query matches
      document.querySelector('.item1').appendChild(leftright);
      menu.style.display="block"
    } else {
        document.querySelector('.item2').appendChild(leftright);
        menu.style.display="none"
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

menu.addEventListener('click',function(){
    document.querySelector('.menudrop').style.display="block";
   document.querySelectorAll('.item1 img')[2].style.display="none";
    
})
let closes=document.querySelector('.menudrop img');
closes.addEventListener('click',function(){
    document.querySelector('.menudrop').style.display="none";
    document.querySelectorAll('.item1 img')[2].style.display="block";
})
