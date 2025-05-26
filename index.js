const menuIcon= document.querySelector(".hamburger-menu");
const menuIconImg = document.querySelector(".menu-icon");
const displayList= document.querySelector(".nav-list") ;
menuIcon.addEventListener("click",toggleMenu);

menuImage=[
    "./public/images/menu-open.svg",
   "./public/images/menu-close.svg"
]
const menuOpen = menuImage[0];
const menuClose = menuImage[1];


let isMenuOpen = true;
function toggleMenu() {
    menuIconImg.src = isMenuOpen ? menuClose : menuOpen;
    isMenuOpen = !isMenuOpen;
    if(!isMenuOpen){
      displayList.classList.toggle("active");
    }else{
        displayList.classList.remove("active");
    }

}
// Portfolio list Section
const portfolioIcon =document.querySelector(".portfolio-list");
const portfolioIconImg = document.querySelector(".arrow-icon");
const portfolioList = document.querySelector(".portfolio-dropdown");
portfolioIcon.addEventListener("click",togglePortfolio);

arrowImage=[
    "./public/images/arrow-down.svg",
    "./public/images/arrow-up.svg"
]
const arrowDown = arrowImage[0];
const arrowUp = arrowImage[1];

let isarrowDown= true;
function togglePortfolio(){
    portfolioIconImg.src = isarrowDown ? arrowUp : arrowDown;
    isarrowDown = !isarrowDown;
    if(isarrowDown){
      portfolioList.classList.toggle("show-portfolio");
    }else{
        portfolioList.classList.remove("show-portfolio");
    }
}