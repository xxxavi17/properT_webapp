(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });

    
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('logoutModal');
    const content = document.querySelector('.logout-content');
    const logoutButton = document.getElementById('logoutButton');
    const noButton = document.querySelector('.no-btn');
    const yesButton = document.querySelector('.btn-danger');
    const closeButton = document.querySelector('.close-btn');

    logoutButton.addEventListener('click', function() {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
            content.classList.add('show');
        }, 10); // short delay to allow display flex to take effect
    });

    function closeModal() {
        content.classList.remove('show');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // should match the CSS transition timing
    }

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    closeButton.addEventListener('click', closeModal);
    noButton.addEventListener('click', closeModal);

    yesButton.addEventListener('click', function() {
        closeModal();
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 310); // after the modal close transition
    });

    content.addEventListener('click', function(event) {
        event.stopPropagation(); // prevents modal from closing when clicking inside
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const bodyContent = document.querySelector('.body-content');
  
    function fadeInPage() {
      if (bodyContent) {
        bodyContent.style.opacity = 1;
      }
    }
  
    fadeInPage();
  
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.href;
        bodyContent.style.opacity = 0;
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 300);
      });
    });
  });
  