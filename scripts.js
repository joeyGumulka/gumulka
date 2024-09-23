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

// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll("div");
    
    // Loop through sections and hide them
    sections.forEach(section => {
        section.style.display = "none";
    });
    
    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}

// Attach event listeners to navigation links
document.querySelectorAll(".tabs li a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const sectionId = this.getAttribute("href").substring(1); // Get the section ID from the href
        showSection(sectionId); // Show the relevant section
    });
});

