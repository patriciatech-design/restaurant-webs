const menuBtn =
      document.querySelector('.menu-btn');
const nav =
      document.querySelector('.nav-hidden');

menuBtn.addEventListener('click' , () => {
                         if(nav.style.display==="flex"){
  nav.style.display = "none";
} else {
  nav.style.display="flex";               }
})