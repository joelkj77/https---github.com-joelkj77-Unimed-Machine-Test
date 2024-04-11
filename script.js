const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const searchIconDesktop = document.getElementById('searchIcon-desktop');
const searchBoxDesktop = document.querySelector('.search-box-desktop');

searchIconDesktop.addEventListener('click', () => {
    searchBoxDesktop.classList.toggle('show');
});
const icons = document.querySelector(".icons");
    searchIcon = document.querySelector("#searchIcon");

    searchIcon.addEventListener("click", () => {
        icons.classList.toggle("openSearch");
        if(icons.classList.contains("openSearch")){
          return searchIcon.classList.replace("uil-search","uil-times");
        }
        searchIcon.classList.replace("uil-times","uil-search");
    })

function toggleMenu() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show"); // Toggle the "show" class
}
function toggleDropdown() {
    var linksDropdown = document.getElementById("links-dropdown");
    linksDropdown.classList.toggle("open"); // Toggle the "show" class
}

window.addEventListener("scroll",() => { 
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled");
        
    }else{
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");

    }
});

menuIcon.addEventListener("click",() => {
    mobileMenuContainer.classList.add("active");
    console.log("hai");
});

closeIcon.addEventListener("click",() => {
    mobileMenuContainer.classList.remove("active");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration:1000,
};

ScrollReveal().reveal(".hand-holding_img",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".hand-holding_bg_img",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".medshop-right-img",{
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".discount-products_img",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".right-bg",{
    ...scrollRevealOption,
    interval:500,
});