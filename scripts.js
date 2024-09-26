document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const contentSections = document.querySelectorAll('.text-content');

  function updateFlexLayout() {
    const activeSection = document.querySelector('.text-content.active');
    if (activeSection && activeSection.id === 'home') {
      activeSection.classList.add('flex'); // Apply flex if Home is active
    } else {
      contentSections.forEach(section => {
        section.classList.remove('flex'); // Remove flex if any other tab is active
      });
    }
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove active class from all tabs and content
      tabLinks.forEach(link => link.classList.remove('active'));
      contentSections.forEach(section => {
        section.classList.remove('active');
        section.classList.remove('flex'); // Ensure flex is removed for inactive sections
      });

      // Add active class to the clicked tab and corresponding content
      this.classList.add('active');
      const targetId = this.getAttribute('href').substring(1); // Get the target ID
      const target = document.getElementById(targetId);
      target.classList.add('active');

      // Check and update flex layout
      updateFlexLayout();
    });
  });

  // Check on page load to set flex for the Home section
  updateFlexLayout();
});
