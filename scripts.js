document.addEventListener("DOMContentLoaded", function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const contentSections = document.querySelectorAll('.text-content');

  function updateFlexLayout() {
    const activeSection = document.querySelector('.text-content.active');
    if (activeSection && activeSection.id === 'home') {
      activeSection.classList.add('flex'); 
    } else {
      contentSections.forEach(section => {
        section.classList.remove('flex'); 
      });
    }
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();


      tabLinks.forEach(link => link.classList.remove('active'));
      contentSections.forEach(section => {
        section.classList.remove('active');
        section.classList.remove('flex'); 
      });

     
      this.classList.add('active');
      const targetId = this.getAttribute('href').substring(1); 
      const target = document.getElementById(targetId);
      target.classList.add('active');

      updateFlexLayout();
    });
  });

  updateFlexLayout();
});
