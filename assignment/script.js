// Carousel functionality
let currentSlide = 0;
const images = document.querySelectorAll('.carousel img');
function showSlide() {
    images.forEach(img => img.style.display = 'none');
    images[currentSlide].style.display = 'block';
    currentSlide = (currentSlide + 1) % images.length;
    setTimeout(showSlide, 3000); // Change image every 3 seconds
}
showSlide(); // Initialize carousel

// Tabs to Accordion
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set up tabs as accordion on mobile
if (window.innerWidth < 600) {
    const tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach(tab => {
        tab.onclick = () => {
            const content = tab.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };
    });
}
