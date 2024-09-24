document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li a');
    const sections = document.querySelectorAll('div');

    // Function to display the correct section based on the tab clicked
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            sections.forEach(section => section.style.display = 'none'); // Hide all sections

            // Show the corresponding section based on tab clicked
            const targetSection = this.id.replace('-tab', ''); // Get the section ID
            document.getElementById(targetSection).style.display = 'block'; // Show the section
        });
    });

    // Display the home section by default when the page loads
    sections.forEach(section => section.style.display = 'none'); // Hide all sections initially
    document.getElementById('home').style.display = 'block'; // Show home section
});

