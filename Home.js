// stories
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Scrollup


const scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block"; 
    } else {
        scrollUpBtn.style.display = "none"; 
    }
};

scrollUpBtn.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};

//donate
document.getElementById("supportButton").addEventListener("click", function(event) {
    event.preventDefault(); 

    
    var modal = new bootstrap.Modal(document.getElementById('supportModal'));
    modal.show();
  });
