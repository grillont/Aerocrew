if(window.innerWidth > 1080){
    
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
        const navHeight = navbar.offsetHeight;
        const imgHeight = windowWidth/2;

        if(scrolled > imgHeight - navHeight){
            navbar.style.top = '0px';
        }else{
            navbar.style.top = (imgHeight - scrolled - navHeight)/2 + 'px';
        }
    });
}else{
    var btn_nav_hamb = document.querySelector('.menu_btn_hamb');
    var navbar = document.querySelector('nav');
    var menu_estOuvert = false;
    btn_nav_hamb.addEventListener('click', ()=>{
        if(menu_estOuvert){
            navbar.style.right = '100%';
            document.querySelector('.corps_page').style.filter = 'blur(0px)';
            menu_estOuvert = false;
        }else{
            navbar.style.right = '40%';
            document.querySelector('.corps_page').style.filter = 'blur(3px)';
            menu_estOuvert = true;
        }
    });
    
}