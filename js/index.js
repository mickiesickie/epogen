var navTrigger = document.getElementsByClassName('link-nav');
var numTrigger = navTrigger.length;

for(var i= 0; i < numTrigger;i++){
     navTrigger[i].addEventListener('click',goToSection,false)
}

function goToSection(){
    const {section} = this.dataset;
    const el = document.querySelector(`#${section}`);
    removeClass();
    this.classList.add('active-label');
    el.scrollIntoView({behavior:'smooth',block:'start'})
}

function removeClass(){ 
    for(var i= 0; i < numTrigger;i++){
        navTrigger[i].classList.remove('active-label')
   }
}
function goToHeader(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}