// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all tab links
    const tabs = document.querySelectorAll('.tabs li a');
    // Select all content sections
    const contentSections = document.querySelectorAll('.text-content');

    // Function to hide all sections
    function hideAllSections() {
        contentSections.forEach(section => {
            section.classList.add('hidden');
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
        targetSection.classList.remove('hidden');
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
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Show the "home" section by default on page load
    showSection('home');
});
