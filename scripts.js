document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li a');
    const sections = document.querySelectorAll('.text-content');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Function to remove active class from all tabs
    function removeActiveClassFromTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
    }

    // Function to show the clicked tab's section
    function showSection(sectionId) {
        const targetSection = document.querySelector(`#${sectionId}`);
        targetSection.classList.add('active');
    }

    // Add event listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            // Hide all sections
            hideAllSections();

            // Remove active class from all tabs
            removeActiveClassFromTabs();

            // Add active class to the clicked tab
            this.classList.add('active');

            // Show the corresponding section
            const sectionId = this.getAttribute('href').substring(1); // Get the id without '#'
            showSection(sectionId);
        });
    });

    // Show the "home" section by default on page load
    hideAllSections(); // Hide all sections first
    showSection('home'); // Show home section by default
});
