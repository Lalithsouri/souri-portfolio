function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const menuIcon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("active"); // Optional: for icon animation
    
    // Toggle the "open" class on the menu
    menu.classList.toggle("open");
    
    // Add visual feedback to the menu icon
    if (menu.classList.contains("open")) {
    menuIcon.style.transform = "rotate(90deg)";
    } else {
    menuIcon.style.transform = "rotate(0)";
    }
   }
   
   // Close menu when clicking outside
   document.addEventListener('click', function(event) {
    const menu = document.querySelector(".menu-links");
    const menuIcon = document.querySelector(".hamburger-icon");
    
    // If menu is open and click is outside menu and not on hamburger icon
    if (menu.classList.contains("open") && 
    !menu.contains(event.target) && 
    !menuIcon.contains(event.target)) {
    
    menu.classList.remove("open");
    menuIcon.style.transform = "rotate(0)";
    }
   });
   
   // Close menu when a link is clicked
   document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function() {
    const menu = document.querySelector(".menu-links");
    const menuIcon = document.querySelector(".hamburger-icon");
    
    menu.classList.remove("open");
    menuIcon.style.transform = "rotate(0)";
    });
   });
   
   // Add smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
    window.scrollTo({
    top: targetElement.offsetTop - 80, // Offset for fixed header
    behavior: 'smooth'
    });
    }
    });
   });