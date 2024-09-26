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
      target.classList.add('active');

      // Adjust Flexbox layout if needed
      // Example: Adjust the height of the content sections
      contentSections.forEach(section => {
        section.style.height = 'auto';
      });
    });
  });
});
