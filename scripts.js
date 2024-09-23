// Get all the tab links
const tabs = document.querySelectorAll('.tabs a');

// Add a click event listener to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the link

        // Hide all sections
        document.querySelectorAll('div').forEach(section => {
            section.style.display = 'none';
        });

        // Show the clicked section
        const target = document.querySelector(this.getAttribute('href'));
        target.style.display = 'block';
    });
});
