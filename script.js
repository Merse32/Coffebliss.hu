document.addEventListener("DOMContentLoaded", function() {
    const welcomeBtn = document.getElementById("welcomeBtn");
    
    if (welcomeBtn) {
        welcomeBtn.addEventListener("click", function() {
            alert("Üdvözlünk a Coffee Bliss kávézóban! Reméljük, hogy élvezni fogod a nálunk töltött időt. ☕");
        });
    }

    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Köszönjük az üzeneted! Hamarosan válaszolunk. 📩");
            contactForm.reset();
        });
    }
});