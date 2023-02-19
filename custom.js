// NavBar
const navBar = document.querySelector(".nav");
const menu = document.querySelector("#menu-btn")

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    navBar.classList.remove('active');
}

// Search Sidebar Module 
function show() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementsByClassName('toggle-btn').classList.toggle('active');
}

// Admin Sidebar Module 
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".fa-magnifying-glass");

btn.onclick = function() {
    sidebar.classList.toggle('active');
}

searchBtn.onclick = function() {
    sidebar.classList.toggle('active');
}    

// FAQs Module
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
    