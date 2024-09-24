document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li a');
    const sections = document.querySelectorAll('div.content section');

    // Function to display the correct section based on the tab clicked
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior

            // Hide all sections
            sections.forEach(section => section.classList.add('hidden')); 

            // Show the corresponding section based on tab clicked
            const targetSection = this.id.replace('-tab', ''); // Get the section ID
            document.getElementById(targetSection).classList.remove('hidden'); // Show the section
        });
    });

    // Display the home section by default when the page loads
    sections.forEach(section => section.classList.add('hidden')); // Hide all sections initially
    document.getElementById('home').classList.remove('hidden'); // Show home section
});
