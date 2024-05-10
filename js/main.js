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

function validateInput(input) {
    // Remove leading zeros unless the number is zero
    if (input.value.length > 1 && input.value.startsWith('0')) {
        input.value = input.value.replace(/^0+/, '');
    }
    // Prevent negative values and ensure only numbers are entered
    if (input.value < 0 || isNaN(input.value)) {
        input.value = '';
    }
}

document.getElementById('propertyImages').addEventListener('change', function(event) {
    var imageCarousel = document.getElementById('imageCarousel');
    imageCarousel.innerHTML = ''; // Clear existing images

    Array.from(event.target.files).forEach((file, index) => {
        var reader = new FileReader();
        reader.onload = function(e) {
            var activeClass = index === 0 ? ' active' : '';
            var itemHTML = `<div class="carousel-item${activeClass}">
                                <img src="${e.target.result}" class="d-block w-100" alt="Uploaded Image">
                            </div>`;
            imageCarousel.innerHTML += itemHTML;
        };
        reader.readAsDataURL(file);
    });
});




