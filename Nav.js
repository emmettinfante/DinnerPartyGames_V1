document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname;
    
    // Remove all active classes first
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class based on current page
    if (currentPage.includes('index.html') || currentPage === '/') {
        document.querySelector('a[href="index.html"].nav-btn').classList.add('active');
    } 
    else if (currentPage.includes('games.html') || 
             currentPage.includes('Dictionary.html') || 
             currentPage.includes('spy.html') || 
             currentPage.includes('QuestionableOrder.html')) {
        document.querySelector('a[href="games.html"].nav-btn').classList.add('active');
    }
    else if (currentPage.includes('about.html')) {
        document.querySelector('a[href="about.html"].nav-btn').classList.add('active');
    }
    else if (currentPage.includes('contact.html')) {
        document.querySelector('a[href="contact.html"].nav-btn').classList.add('active');
    }
}); 