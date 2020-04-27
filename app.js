const windowWidth = window.innerWidth;
const scrolled = window.scrollY; 
const navbar = document.querySelector('nav');
const navHeight = navbar.offsetHeight;
const imgHeight = windowWidth/2;
navbar.style.top = (imgHeight - scrolled - navHeight)/2 + 'px';


window.addEventListener('scroll', ()=>{
   const windowWidth = window.innerWidth;
   const scrolled = window.scrollY; 
   const navbar = document.querySelector('nav');
   const navbarOpacity = document.querySelector('nav:after');
   const navHeight = navbar.offsetHeight;
   const imgHeight = windowWidth/2;
      
   if(scrolled > imgHeight - navHeight){
       navbar.style.top = '0px';
       navbarOpacity.style.backgoundColor = 'red';
   }else{
       navbar.style.top = (imgHeight - scrolled - navHeight)/2 + 'px';
       navbarOpacity.style.opacity = scrolled+'%';
   }
});