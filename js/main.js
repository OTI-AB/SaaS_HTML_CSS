// FAQs Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqsContainer = document.querySelector('.faqs-content');

  faqsContainer.addEventListener('click', (e) => {
    const groupHead = e.target.closest('.faqs-group-head');

    if (!groupHead) return;

    const group = groupHead.parentElement;
    const groupBody = group.querySelector('.faqs-group-body');
    const icon = groupHead.querySelector('i');

    // Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle body
    groupBody.classList.toggle('open');

    // Close open bodies
    const otherGroups = faqsContainer.querySelectorAll('.faqs-group');

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faqs-group-body');
        const otherGroupIcon = otherGroup.querySelector('.faqs-group-head i');
        otherGroupBody.classList.remove('open');
        otherGroupIcon.classList.remove('fa-minus');
        otherGroupIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu to Active
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const hamburgerButton = document
    .getElementById('hamburger-button')
    .addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
});
