document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li a');
    const sections = document.querySelectorAll('.content section');

    // Hide all sections initially
    sections.forEach(section => section.classList.add('hidden'));
    // Show the home section by default
    document.getElementById('home').classList.remove('hidden');

    // Add click event listeners to tabs
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
});
