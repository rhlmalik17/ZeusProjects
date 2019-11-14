const slideNav=()=>{
    const socialLinks = document.querySelector('.socialLinks');
    const burger = document.querySelector('.burger');
    const links = document.querySelectorAll('.socialLinks ul li');

    burger.addEventListener('click',()=>{
       socialLinks.classList.toggle('nav-active');
        socialLinks.style.transition='transform 0.5s ease-in';
        links.forEach((link,index)=>
        {

            if(link.style.animation)
            {
                link.style.animation='';
            }
            else
            link.style.animation= 'socialFade 0.5s ease forwards '+(index/7+0.3)+'s';

        });
        //Burger animation
        burger.classList.toggle('toggle');
    });

    //animating links

};
slideNav();