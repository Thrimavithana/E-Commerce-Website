let sideNav = document.querySelector('.side-nav')
let menuBar = document.querySelector('#menu-bar');
let themeToggler = document.querySelector('#theme-toggler')
let body = document.querySelector('body')


menuBar.onclick = () =>{
    sideNav.classList.toggle('active');
    menuBar.classList.toggle('fa-close');
    scrollY = 0;
}





themeToggler.onclick = () =>{
   
    themeToggler.classList.toggle('fa-moon');
    if(themeToggler.classList.contains('fa-moon')){
        document.querySelector('body').classList.add('night-theme');
        themeToggler.classList.remove('fa-sun');
    }else{
        document.querySelector('body').classList.remove('night-theme');
        themeToggler.classList.toggle('fa-sun');
    }
}




var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000
});







// // menuBar.onclick = () =>{
// //     if (sideNav.style.left === "-12%") {
// //         sideNav.style.left === "0";
// //         menuBar.classList.remove('fa-bars')
// //         menuBar.classList.add('fa-times')

// //     }
// //     sideNav.classList.toggle('active');
// // }
// menubar.onClick = () => {
//     sideNav.classList.add('active')
    
// }
// // close.onclick = () => {
// //     sideNav.classList.remove('active');
// // }

// // -----------night mood--------------


