document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentSections = document.querySelectorAll('.text-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all tabs and content
            tabLinks.forEach(link => link.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1); // Get the target ID
            const target = document.getElementById(targetId);
            target.classList.add('active'); // Add active class to target

            // Optional: Reset any height or styles if needed
        });
    });
});
