// FAQs Module
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

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