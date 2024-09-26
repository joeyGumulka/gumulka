document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.text-content');
    const homeSection = document.getElementById('home');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs and content
            tabLinks.forEach(link => link.classList.remove('active'));
            contentSections.forEach(section => {
                section.classList.remove('active');
                section.classList.remove('flex'); // Remove flex class from all sections
            });

            // Add active class to the clicked tab and corresponding content
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1); // Get the target ID
            const target = document.getElementById(targetId);
            target.classList.add('active');

            // If the Home tab is clicked, add the flex class
            if (targetId === 'home') {
                homeSection.classList.add('flex'); // Enable flex layout for home section
            } else {
                homeSection.classList.remove('flex'); // Ensure flex layout is removed for other tabs
            }
        });
    });
});
