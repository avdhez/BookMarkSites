// Search functionality
document.querySelector('.search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const links = document.querySelectorAll('.neon-link');
    
    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});

// Animation for the search bar on load
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    setTimeout(() => {
        searchBar.style.transform = 'scale(1.02)';
        searchBar.style.boxShadow = '0 0 25px rgba(5, 217, 232, 0.4)';
        
        setTimeout(() => {
            searchBar.style.transform = 'scale(1)';
            searchBar.style.boxShadow = '0 0 15px rgba(5, 217, 232, 0.2)';
        }, 300);
    }, 500);
});
