// FAQs Module
const faqs = document.querySelectorAll(".faq")

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// Sidebar Module 
function show() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementsByClassName('toggle-btn').classList.toggle('active');
}